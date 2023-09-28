import { SUCCESS_SEND_LOGIN } from "./constant";

const initialState = {
    loginMessage: null
};

const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SUCCESS_SEND_LOGIN:
            return {
                ...state,
                loginMessage: action.params,
            };
        default:
            return state;
    }
};

export default loginReducer;
