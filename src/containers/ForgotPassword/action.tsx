import {
    SEND_RESET,
    SUCCESS_SEND_RESET
} from "./constant";

export function sendReset(params: any) {
    return {
        type: SEND_RESET,
        params
    };
}

export function successSendReset(params: any) {
    return {
        type: SUCCESS_SEND_RESET,
        params,
    };
}