import axios from "axios";

let CANCEL_TOKEN_SOURCE = axios.CancelToken.source();

const cancelAxiosRequest = () => {
    CANCEL_TOKEN_SOURCE.cancel();
    CANCEL_TOKEN_SOURCE = axios.CancelToken.source();
};

const getApiUrl = () => {
    // Temporary URL
    const url = "localhost:3001";
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
        const { status } = response;
        console.log(status);
    });
};

export const payloadGenerator = (
    method: string,
    url: string,
    params: any,
    data: any,
) => {
    let header = {};
    if (method === "POST") {
        header = {
            "Content-Type": "multipart/form-data",
        };
    }
    else {
        header = {
            "Content-Type": "application/json",
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
export const PROFILE_URL = `${getApiUrl()}/profile`;