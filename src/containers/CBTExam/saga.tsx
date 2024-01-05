import { put, take, takeLatest, takeEvery, call } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import {
    socketConnected,
    socketDisonnected,
    messageReceived,
    setCBTExam,
    toggleFlagSuccess,
    addAnswerSuccess,
    successSubmitExam
} from "./action";
import {
    CONNECT_SOCKET,
    DISCONNECT_SOCKET,
    MESSAGE_RECEIVED,
    GET_CBT_EXAM,
    TOGGLE_FLAG,
    ADD_ANSWER,
    SUBMIT_EXAM
} from "./constant";
import { callApi } from "../Layout/saga";

import { CBT_EXAM_URL, CBT_URL } from "../../config/api";
import {
    connect,
    disconnect,
    onMessage,
    toggleFlag,
    addAnswer
} from './socket';
import io from 'socket.io-client';

export function* handleConnectSocket(action: any): any {
    try {
        yield call(connect);
        yield put(socketConnected());
    } catch (err) {
        console.error("Error connecting to Socket", err);
    }
}

export function* handleDisconnectSocket(action: any): any {
    yield call(disconnect);
    yield put(socketDisonnected());
}

export function* handleReceiveMessage(action: any): any {
    const { params } = action;
    yield put(messageReceived(params));
}

export function* handleToggleFlag(action: any): any {
    const { params } = action;
    yield call(toggleFlag, params);
    yield put(toggleFlagSuccess({id: params.id, message: "Flag toggled!"}));
}

export function* handleAddAnswer(action: any): any {
    const { params } = action;
    yield call(addAnswer, params);
    yield put(addAnswerSuccess({id:params.id, message: "Answer sent!"}));
}

export function* handleSubmitExam(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "POST",
        CBT_URL,
        null,
        params,
        true
    );
    if (res) {
        yield put(successSubmitExam(res));
    }
}

export function* handleGetCBTExam(action: any): any {
    let res = yield call(
        callApi,
        "GET",
        CBT_EXAM_URL,
        null,
        null,
        true
    );
    if (res) {
        yield put(setCBTExam(res));
    }
}

function createSocketChannel(socket) {
    return eventChannel((emit) => {
      const handler = (data) => {
        emit(data);
      };
  
      socket.on('SUCCESS_CBT_ACTION', handler);
  
      return () => {
        socket.off('SUCCESS_CBT_ACTION', handler);
      };
    });
}
  
function* watchSocketEvents(socket) {
    const socketChannel = yield call(createSocketChannel, socket);
  
    try {
      while (true) {
        const data = yield take(socketChannel);
        yield put({ type: "OktanAGC/App/SUCCESS_CBT_ACTION", params: data });
      }
    } finally {
      socketChannel.close();
    }
}

export function* watchCBTExamSaga() {
    const socket = io('http://localhost:3001');

    yield takeEvery(CONNECT_SOCKET, handleConnectSocket);
    yield takeEvery(DISCONNECT_SOCKET, handleDisconnectSocket);

    yield takeLatest(GET_CBT_EXAM, handleGetCBTExam);
    yield takeLatest(TOGGLE_FLAG, handleToggleFlag);
    yield takeLatest(ADD_ANSWER, handleAddAnswer);
    yield takeLatest(SUBMIT_EXAM, handleSubmitExam);

    yield call(watchSocketEvents, socket);
}