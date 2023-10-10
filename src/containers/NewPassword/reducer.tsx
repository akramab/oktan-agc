import { SUCCESS_SEND_NEW_PASSWORD } from "./constant";

const initialState = {
    newPasswordMessage: null
};

const newPasswordReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SUCCESS_SEND_NEW_PASSWORD:
            return {
                ...state,
                newPasswordMessage: action.params,
            };
        default:
            return state;
    }
};

export default newPasswordReducer;
