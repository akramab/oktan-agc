import axios from "axios";
import { getAuthToken, removeTokens } from "../utils/general";
import { showToast } from "../utils/general";

let CANCEL_TOKEN_SOURCE = axios.CancelToken.source();

const cancelAxiosRequest = () => {
    CANCEL_TOKEN_SOURCE.cancel();
    CANCEL_TOKEN_SOURCE = axios.CancelToken.source();
};

const getApiUrl = () => {
    const url = process.env.REACT_APP_API_URL;
    return url;
};

export const hitApi = (parameters: any) => {
    const { method, url, headers, params, data, responseType } = parameters;
    const timeout = setTimeout(() => {
        cancelAxiosRequest();
    }, 30000);
    return axios({
        method: method,
        url: url,
        headers,
        params: params,
        data: data,
        responseType: responseType ?? null,
        cancelToken: CANCEL_TOKEN_SOURCE.token,
    }).then((res) => {
        clearTimeout(timeout);
        return res;
    }).catch((err) => {
        const { response } = err;
        const { status, data } = response;
        const { message } = data;
        const currentUrl = window.location.href;
        if (status === 401) {
            if (currentUrl.includes("login")) {
                showToast("Kombinasi Salah!");
            }
            else {
                removeTokens();
                window.location.href = "/login";
            }
        }
        else if (status === 422) {
            showToast(message);
        }
    });
};

export const payloadGenerator = (
    method: string,
    url: string,
    params: any,
    data: any,
) => {
    let header = {};
    if (url.includes("login") || url.includes("register")) {
        header = {
            "Content-Type": "application/json",
        };
    }
    else if (method === "POST" && url.includes("profile")) {
        header = {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${getAuthToken()}`
        };
    }
    else {
        header = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAuthToken()}`
        };
    }
    let payload = {};
    
    if (url.includes("download")) {
        payload = {
            method: method ? method : undefined,
            url: url ? url : undefined,
            headers: {
                ...header,
            },
            params,
            data,
            responseType: "blob",
        };
    }
    else {
        payload = {
            method: method ? method : undefined,
            url: url ? url : undefined,
            headers: {
                ...header,
            },
            params,
            data,
        };
    }
    return payload;
};

export const REGISTER_URL = `${getApiUrl()}/register`;
export const LOGIN_URL = `${getApiUrl()}/login`;

export const USER_URL = `${getApiUrl()}/user`;
export const PROFILE_URL = `${USER_URL}/profile`;
export const VERIFY_USER_URL = `${USER_URL}/verify`;
export const DELETE_USER_URL = `${USER_URL}/delete`;
export const DOWNLOAD_USER_URL = `${USER_URL}/download`;

export const FORGOT_PASSWORD_URL = `${getApiUrl()}/forgot`;
export const NEW_PASSWORD_URL = `${FORGOT_PASSWORD_URL}/new`;

export const QUESTION_URL = `${getApiUrl()}/question`;
export const EDIT_QUESTION_URL = `${QUESTION_URL}/edit`;
export const DELETE_QUESTION_URL = `${QUESTION_URL}/delete`;

export const CBT_URL = `${getApiUrl()}/cbt`;
export const CBT_INFO_URL = `${CBT_URL}/info`;
export const CBT_EXAM_URL = `${CBT_URL}/question`;
