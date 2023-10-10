import { put, takeLatest, call } from "redux-saga/effects";
import { successSendReset } from "./action";
import { SEND_RESET } from "./constant";
import { callApi } from "../Layout/saga";
import { FORGOT_PASSWORD_URL } from "../../config/api";

export function* handleSendReset(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "POST",
        FORGOT_PASSWORD_URL,
        null,
        params,
        true
    );
    if (res) {
        yield put(successSendReset(res));
    }
}

export function* watchForgotPasswordSaga() {
    yield takeLatest(SEND_RESET, handleSendReset);
}