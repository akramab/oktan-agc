import { put, takeLatest, call } from "redux-saga/effects";
import { successSendNewPassword } from "./action";
import { SEND_NEW_PASSWORD } from "./constant";
import { callApi } from "../Layout/saga";
import { NEW_PASSWORD_URL } from "../../config/api";

export function* handleSendNewPassword(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "POST",
        NEW_PASSWORD_URL,
        null,
        params,
        true
    );
    if (res) {
        yield put(successSendNewPassword(res));
    }
}

export function* watchNewPasswordSaga() {
    yield takeLatest(SEND_NEW_PASSWORD, handleSendNewPassword);
}