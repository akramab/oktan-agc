import {
    SEND_REGISTER,
    SUCCESS_SEND_REGISTER
} from "./constant";

export function sendRegister(params: any) {
    return {
        type: SEND_REGISTER,
        params
    };
}

export function successSendRegister(params: any) {
    return {
        type: SUCCESS_SEND_REGISTER,
        params,
    };
}