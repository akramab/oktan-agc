import {
    GET_CRYSTAL_PROFILE,
    SET_CRYSTAL_PROFILE,
    EDIT_CRYSTAL_PROFILE,
    SUCCESS_EDIT_CRYSTAL_PROFILE
} from "./constant";

export function getCrystalProfile() {
    return {
        type: GET_CRYSTAL_PROFILE
    };
}

export function setCrystalProfile(params: any) {
    return {
        type: SET_CRYSTAL_PROFILE,
        params,
    };
}

export function editCrystalProfile(params: any) {
    return {
        type: EDIT_CRYSTAL_PROFILE,
        params,
    };
}

export function successEditCrystalProfile(params: any) {
    return {
        type: SUCCESS_EDIT_CRYSTAL_PROFILE,
        params,
    };
}