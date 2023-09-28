import { put, takeLatest, call } from "redux-saga/effects";
import { successSendRegister } from "./action";
import { SEND_REGISTER } from "./constant";
import { callApi } from "../Layout/saga";
import { REGISTER_URL } from "../../config/api";

export function* handleSendRegister(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "POST",
        REGISTER_URL,
        null,
        params,
        true
    );
    if (res) {
        yield put(successSendRegister(res));
    }
}

export function* watchRegisterSaga() {
    yield takeLatest(SEND_REGISTER, handleSendRegister);
}