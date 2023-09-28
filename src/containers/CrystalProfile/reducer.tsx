import { SET_CRYSTAL_PROFILE, SUCCESS_EDIT_CRYSTAL_PROFILE } from "./constant";

const initialState = {
    crystalProfile: null,
    editProfileMessage: null
};

const crystalProfileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_CRYSTAL_PROFILE:
            return {
                ...state,
                crystalProfile: action.params,
            };
        case SUCCESS_EDIT_CRYSTAL_PROFILE:
            return {
                ...state,
                editProfileMessage: action.params,
            };
        default:
            return state;
    }
};

export default crystalProfileReducer;
