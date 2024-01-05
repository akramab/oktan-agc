import {
    CONNECT_SOCKET,
    SOCKET_CONNECTED,
    DISCONNECT_SOCKET,
    SOCKET_DISCONNECTED,
    MESSAGE_RECEIVED,
    GET_CBT_EXAM,
    SET_CBT_EXAM,
    TOGGLE_FLAG,
    TOGGLE_FLAG_SUCCESS,
    ADD_ANSWER,
    ADD_ANSWER_SUCCESS,
    SUBMIT_EXAM,
    SUCCESS_SUBMIT_EXAM
} from "./constant";

export function connectSocket() {
    return {
        type: CONNECT_SOCKET,
    };
}

export function socketConnected() {
    return {
        type: SOCKET_CONNECTED,
    };
}

export function disconnectSocket() {
    return {
        type: DISCONNECT_SOCKET,
    };
}

export function socketDisonnected() {
    return {
        type: SOCKET_DISCONNECTED,
    };
}

export function messageReceived(params: any) {
    return {
        type: MESSAGE_RECEIVED,
        params,
    };
}

export function getCBTExam() {
    return {
        type: GET_CBT_EXAM,
    };
}

export function setCBTExam(params: any) {
    return {
        type: SET_CBT_EXAM,
        params,
    };
}

export function toggleFlag(params: any) {
    return {
        type: TOGGLE_FLAG,
        params,
    };
}

export function toggleFlagSuccess(params: any) {
    return {
        type: TOGGLE_FLAG_SUCCESS,
        params,
    };
}

export function addAnswer(params: any) {
    return {
        type: ADD_ANSWER,
        params,
    };
}

export function addAnswerSuccess(params: any) {
    return {
        type: ADD_ANSWER_SUCCESS,
        params,
    };
}

export function submitExam(params: any) {
    return {
        type: SUBMIT_EXAM,
        params,
    };
}

export function successSubmitExam(params: any) {
    return {
        type: SUCCESS_SUBMIT_EXAM,
        params,
    };
}