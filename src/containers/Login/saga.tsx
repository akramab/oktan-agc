import { put, takeLatest, call } from "redux-saga/effects";
import { successSendLogin } from "./action";
import { SEND_LOGIN } from "./constant";
import { callApi } from "../Layout/saga";
import { LOGIN_URL } from "../../config/api";

export function* handleSendLogin(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "POST",
        LOGIN_URL,
        null,
        params,
        true
    );
    if (res) {
        yield put(successSendLogin(res));
    }
}

export function* watchLoginSaga() {
    yield takeLatest(SEND_LOGIN, handleSendLogin);
}