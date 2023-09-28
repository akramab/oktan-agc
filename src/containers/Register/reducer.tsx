import { SUCCESS_SEND_REGISTER } from "./constant";

const initialState = {
    registerMessage: null
};

const registerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SUCCESS_SEND_REGISTER:
            return {
                ...state,
                registerMessage: action.params,
            };
        default:
            return state;
    }
};

export default registerReducer;
