import {
    SEND_NEW_PASSWORD,
    SUCCESS_SEND_NEW_PASSWORD
} from "./constant";

export function sendNewPassword(params: any) {
    return {
        type: SEND_NEW_PASSWORD,
        params
    };
}

export function successSendNewPassword(params: any) {
    return {
        type: SUCCESS_SEND_NEW_PASSWORD,
        params,
    };
}