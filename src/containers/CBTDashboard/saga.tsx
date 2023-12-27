import { put, takeLatest, call } from "redux-saga/effects";
import {
    setCBTInfo
} from "./action";
import {
    GET_CBT_INFO
} from "./constant";
import { callApi } from "../Layout/saga";

import { CBT_INFO_URL } from "../../config/api";

export function* handleGetCBTInfo(action: any): any {
    let res = yield call(
        callApi,
        "GET",
        CBT_INFO_URL,
        null,
        null,
        true
    );
    
    if (res) {
        yield put(setCBTInfo(res));
    }
}

export function* watchCBTInfoSaga() {
    yield takeLatest(GET_CBT_INFO, handleGetCBTInfo);
}