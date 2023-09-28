import { put, takeLatest, call } from "redux-saga/effects";
import { setIsotermProfile, successEditIsotermProfile } from "./action";
import { GET_ISOTERM_PROFILE, EDIT_ISOTERM_PROFILE } from "./constant";
import { callApi } from "../Layout/saga";
import { PROFILE_URL } from "../../config/api";

export function* handleGetIsotermProfile(action: any): any {
    let res = yield call(
        callApi,
        "GET",
        PROFILE_URL,
        null,
        null,
        true
    );
    if (res) {
        yield put(setIsotermProfile(res));
    }
}

export function* handleEditIsotermProfile(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "POST",
        PROFILE_URL,
        null,
        params,
        true
    );
    if (res) {
        yield put(successEditIsotermProfile(res));
    }
}

export function* watchIsotermProfileSaga() {
    yield takeLatest(GET_ISOTERM_PROFILE, handleGetIsotermProfile);
    yield takeLatest(EDIT_ISOTERM_PROFILE, handleEditIsotermProfile);
}