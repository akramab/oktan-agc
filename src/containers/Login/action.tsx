import {
    SEND_LOGIN,
    SUCCESS_SEND_LOGIN
} from "./constant";

export function sendLogin(params: any) {
    return {
        type: SEND_LOGIN,
        params
    };
}

export function successSendLogin(params: any) {
    return {
        type: SUCCESS_SEND_LOGIN,
        params,
    };
}