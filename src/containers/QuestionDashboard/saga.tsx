import { put, takeLatest, call } from "redux-saga/effects";
import {
    setQuestionsData,
    successEditQuestionData,
    successDeleteQuestionData,
    successCreateQuestion,
    setQuestionDetail
} from "./action";
import {
    GET_QUESTIONS_DATA,
    EDIT_QUESTION_DATA,
    DELETE_QUESTION_DATA,
    CREATE_QUESTION,
    GET_QUESTION_DETAIL
} from "./constant";
import { callApi } from "../Layout/saga";

// Subject to change
import { QUESTION_URL } from "../../config/api";

export function* handleGetQuestionsData(action: any): any {
    let res = yield call(
        callApi,
        "GET",
        QUESTION_URL,
        null,
        null,
        true
    );
    if (res) {
        yield put(setQuestionsData(res));
    }
}

export function* handleEditQuestionData(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "PUT",
        `${QUESTION_URL}/${params}`,
        null,
        null,
        true
    );
    if (res) {
        yield put(successEditQuestionData(res));
    }
}

export function* handleDeleteQuestionData(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "DELETE",
        `${QUESTION_URL}/${params}`,
        null,
        null,
        true
    );
    if (res) {
        yield put(successDeleteQuestionData(res));
    }
}

export function* handleCreateQuestion(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "POST",
        QUESTION_URL,
        null,
        params,
        true
    );
    if (res) {
        yield put(successCreateQuestion(res));
    }
}

export function* handleGetQuestionDetail(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "GET",
        `${QUESTION_URL}/${params}`,
        null,
        null,
        true
    );
    if (res) {
        yield put(setQuestionDetail(res));
    }
}

export function* watchQuestionDashboardSaga() {
    yield takeLatest(GET_QUESTIONS_DATA, handleGetQuestionsData);
    yield takeLatest(EDIT_QUESTION_DATA, handleEditQuestionData);
    yield takeLatest(DELETE_QUESTION_DATA, handleDeleteQuestionData);
    yield takeLatest(CREATE_QUESTION, handleCreateQuestion);
    yield takeLatest(GET_QUESTION_DETAIL, handleGetQuestionDetail);
}