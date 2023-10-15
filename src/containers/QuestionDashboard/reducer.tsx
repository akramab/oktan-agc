import {
    SET_QUESTIONS_DATA,
    SUCCESS_EDIT_QUESTION_DATA,
    SUCCESS_DELETE_QUESTION_DATA,
    SUCCESS_CREATE_QUESTION
} from "./constant";

const initialState = {
    questionsData: [],
    editMessage: null,
    deleteMessage: null,
    createMessage: null
};

const questionDashboardReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_QUESTIONS_DATA:
            return {
                ...state,
                questionsData: action.params,
            };
        case SUCCESS_EDIT_QUESTION_DATA:
            return {
                ...state,
                editMessage: action.params,
            };
        case SUCCESS_DELETE_QUESTION_DATA:
            return {
                ...state,
                deleteMessage: action.params,
            };
        case SUCCESS_CREATE_QUESTION:
            return {
                ...state,
                createMessage: action.params,
            };
        default:
            return state;
    }
};

export default questionDashboardReducer;
