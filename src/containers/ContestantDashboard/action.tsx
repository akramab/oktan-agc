import {
    GET_CONTESTANTS_DATA,
    SET_CONTESTANTS_DATA,
    VERIFY_CONTESTANT_DATA,
    SUCCESS_VERIFY_CONTESTANT_DATA,
    DELETE_CONTESTANT_DATA,
    SUCCESS_DELETE_CONTESTANT_DATA,
    DOWNLOAD_CONTESTANT_DATA,
    SUCCESS_DOWNLOAD_CONTESTANT_DATA
} from "./constant";

export function getContestantsData() {
    return {
        type: GET_CONTESTANTS_DATA
    };
}

export function setContestantsData(params: any) {
    return {
        type: SET_CONTESTANTS_DATA,
        params,
    };
}

export function verifyContestantData(params: any) {
    return {
        type: VERIFY_CONTESTANT_DATA,
        params,
    };
}

export function successVerifyContestantData(params: any) {
    return {
        type: SUCCESS_VERIFY_CONTESTANT_DATA,
        params,
    };
}

export function deleteContestantData(params: any) {
    return {
        type: DELETE_CONTESTANT_DATA,
        params,
    };
}

export function successDeleteContestantData(params: any) {
    return {
        type: SUCCESS_DELETE_CONTESTANT_DATA,
        params,
    };
}

export function downloadContestantData(params: any) {
    return {
        type: DOWNLOAD_CONTESTANT_DATA,
        params,
    };
}

export function successDownloadContestantData(params: any) {
    return {
        type: SUCCESS_DOWNLOAD_CONTESTANT_DATA,
        params,
    };
}