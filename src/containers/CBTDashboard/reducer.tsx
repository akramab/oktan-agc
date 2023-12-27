import {
    SET_CBT_INFO
} from "./constant";

const initialState = {
    cbtInfo: null
};

const cbtInfoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_CBT_INFO:
            return {
                ...state,
                cbtInfo: action.params,
            };
        default:
            return state;
    }
};

export default cbtInfoReducer;
