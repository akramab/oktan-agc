import {
    GET_ISOTERM_PROFILE,
    SET_ISOTERM_PROFILE,
    EDIT_ISOTERM_PROFILE,
    SUCCESS_EDIT_ISOTERM_PROFILE
} from "./constant";

export function getIsotermProfile() {
    return {
        type: GET_ISOTERM_PROFILE
    };
}

export function setIsotermProfile(params: any) {
    return {
        type: SET_ISOTERM_PROFILE,
        params,
    };
}

export function editIsotermProfile(params: any) {
    return {
        type: EDIT_ISOTERM_PROFILE,
        params,
    };
}

export function successEditIsotermProfile(params: any) {
    return {
        type: SUCCESS_EDIT_ISOTERM_PROFILE,
        params,
    };
}