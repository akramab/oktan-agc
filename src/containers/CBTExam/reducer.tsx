import {
    SOCKET_CONNECTED,
    SOCKET_DISCONNECTED,
    MESSAGE_RECEIVED,
    SET_CBT_EXAM,
    TOGGLE_FLAG_SUCCESS,
    ADD_ANSWER_SUCCESS,
    SUCCESS_SUBMIT_EXAM,
    SUCCESS_CBT_ACTION
} from "./constant";

const initialState = {
    connected: false,
    socketMessage: null,
    cbtExam: null,
    toggleMessage: null,
    answerMessage: null,
    submitMessage: null
};

const cbtExamReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SOCKET_CONNECTED:
            return {
                ...state,
                connected: true,
            };
        case SOCKET_DISCONNECTED:
            return {
                ...state,
                connected: false,
            };
        case MESSAGE_RECEIVED:
            return {
                ...state,
                socketMessage: action.params,
            };
        case SET_CBT_EXAM:
            return {
                ...state,
                cbtExam: action.params,
            };
        case TOGGLE_FLAG_SUCCESS:
            return {
                ...state,
                toggleMessage: action.params,
            };
        case ADD_ANSWER_SUCCESS:
            return {
                ...state,
                answerMessage: action.params,
            };
        case SUCCESS_SUBMIT_EXAM:
            return {
                ...state,
                submitMessage: action.params,
            };
        case SUCCESS_CBT_ACTION:
            return {
                ...state,
                cbtExam: action.params,
            };
        default:
            return state;
    }
};

export default cbtExamReducer;
