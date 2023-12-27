import {
    GET_CBT_INFO,
    SET_CBT_INFO
} from "./constant";

export function getCBTInfo() {
    return {
        type: GET_CBT_INFO,
    };
}

export function setCBTInfo(params: any) {
    return {
        type: SET_CBT_INFO,
        params,
    };
}