import { put, takeLatest, call } from "redux-saga/effects";
import {
    setContestantsData,
    successVerifyContestantData,
    successDeleteContestantData,
    successDownloadContestantData,
    successDownloadAllContestantData
} from "./action";
import {
    GET_CONTESTANTS_DATA,
    VERIFY_CONTESTANT_DATA,
    DELETE_CONTESTANT_DATA,
    DOWNLOAD_CONTESTANT_DATA,
    DOWNLOAD_ALL_CONTESTANT_DATA
} from "./constant";
import { callApi } from "../Layout/saga";
import { downloadFileAsync } from "../../utils/general";

// Subject to change
import {
    USER_URL,
    VERIFY_USER_URL,
    DELETE_USER_URL,
    DOWNLOAD_USER_URL
} from "../../config/api";

export function* handleGetContestantsData(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "GET",
        USER_URL,
        params,
        null,
        true
    );
    if (res) {
        yield put(setContestantsData(res));
    }
}

export function* handleVerifyContestantData(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "POST",
        `${VERIFY_USER_URL}/${params}`,
        null,
        null,
        true
    );
    if (res) {
        yield put(successVerifyContestantData(res));
    }
}

export function* handleDeleteContestantData(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "POST",
        `${DELETE_USER_URL}/${params}`,
        null,
        null,
        true
    );
    if (res) {
        yield put(successDeleteContestantData(res));
    }
}

export function* handleDownloadContestantData(action: any): any {
    const { params } = action;
    let res = yield call(
        callApi,
        "GET",
        `${DOWNLOAD_USER_URL}/${params}`,
        null,
        null,
        true
    );
    if (res !== null) {
        // const blob = new Blob([res], {type: ".csv"});
        const blob = new Blob([res], {type: "application/zip"});
        const url = URL.createObjectURL(blob);
        yield call(downloadFileAsync, url);
        yield put(successDownloadContestantData({id: params, message: "File downloaded"}));   
    }
}

export function* handleDownloadAllContestantData(action: any): any {
    let res = yield call(
        callApi,
        "GET",
        DOWNLOAD_USER_URL,
        null,
        null,
        true
    );
    if (res !== null) {
        const blob = new Blob([res], {type: "application/zip"});
        const url = URL.createObjectURL(blob);
        yield call(downloadFileAsync, url);
        yield put(successDownloadAllContestantData("All file downloaded"));   
    }
}

export function* watchContestantDashboardSaga() {
    yield takeLatest(GET_CONTESTANTS_DATA, handleGetContestantsData);
    yield takeLatest(VERIFY_CONTESTANT_DATA, handleVerifyContestantData);
    yield takeLatest(DELETE_CONTESTANT_DATA, handleDeleteContestantData);
    yield takeLatest(DOWNLOAD_CONTESTANT_DATA, handleDownloadContestantData);
    yield takeLatest(DOWNLOAD_ALL_CONTESTANT_DATA, handleDownloadAllContestantData);
}