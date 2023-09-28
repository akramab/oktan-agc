import { SET_ISOTERM_PROFILE, SUCCESS_EDIT_ISOTERM_PROFILE } from "./constant";

const initialState = {
    isotermProfile: null,
    editProfileMessage: null
};

const isotermProfileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_ISOTERM_PROFILE:
            return {
                ...state,
                isotermProfile: action.params,
            };
        case SUCCESS_EDIT_ISOTERM_PROFILE:
            return {
                ...state,
                editProfileMessage: action.params,
            };
        default:
            return state;
    }
};

export default isotermProfileReducer;
