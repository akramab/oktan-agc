import { put, takeLatest, call } from "redux-saga/effects";
import { setCrystalProfile, successEditCrystalProfile } from "./action";
import { GET_CRYSTAL_PROFILE, EDIT_CRYSTAL_PROFILE } from "./constant";
import { callApi } from "../Layout/saga";
import { PROFILE_URL } from "../../config/api";

export function* handleGetCrystalProfile(action: any): any {
    let res = yield call(
        callApi,
        "GET",
        PROFILE_URL,
        null,
        null,
        true
    );
    if (res) {
        yield put(setCrystalProfile(res));
    }
}

export function* handleEditCrystalProfile(action: any): any {
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
        yield put(successEditCrystalProfile(res));
    }
}

export function* watchCrystalProfileSaga() {
    yield takeLatest(GET_CRYSTAL_PROFILE, handleGetCrystalProfile);
    yield takeLatest(EDIT_CRYSTAL_PROFILE, handleEditCrystalProfile);
}