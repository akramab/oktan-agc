import { SUCCESS_SEND_RESET } from "./constant";

const initialState = {
    forgotPasswordMessage: null
};

const forgotPasswordReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SUCCESS_SEND_RESET:
            return {
                ...state,
                forgotPasswordMessage: action.params,
            };
        default:
            return state;
    }
};

export default forgotPasswordReducer;
