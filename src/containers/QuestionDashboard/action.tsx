import {
    GET_QUESTIONS_DATA,
    SET_QUESTIONS_DATA,
    EDIT_QUESTION_DATA,
    SUCCESS_EDIT_QUESTION_DATA,
    DELETE_QUESTION_DATA,
    SUCCESS_DELETE_QUESTION_DATA,
    CREATE_QUESTION,
    SUCCESS_CREATE_QUESTION,
    GET_QUESTION_DETAIL,
    SET_QUESTION_DETAIL
} from "./constant";

export function getQuestionsData(params: any) {
    return {
        type: GET_QUESTIONS_DATA,
        params,
    };
}

export function setQuestionsData(params: any) {
    return {
        type: SET_QUESTIONS_DATA,
        params,
    };
}

export function editQuestionData(params: any) {
    return {
        type: EDIT_QUESTION_DATA,
        params,
    };
}

export function successEditQuestionData(params: any) {
    return {
        type: SUCCESS_EDIT_QUESTION_DATA,
        params,
    };
}

export function deleteQuestionData(params: any) {
    return {
        type: DELETE_QUESTION_DATA,
        params,
    };
}

export function successDeleteQuestionData(params: any) {
    return {
        type: SUCCESS_DELETE_QUESTION_DATA,
        params,
    };
}

export function createQuestion(params: any) {
    return {
        type: CREATE_QUESTION,
        params,
    };
}

export function successCreateQuestion(params: any) {
    return {
        type: SUCCESS_CREATE_QUESTION,
        params,
    };
}

export function getQuestionDetail(params: any) {
    return {
        type: GET_QUESTION_DETAIL,
        params,
    };
}

export function setQuestionDetail(params: any) {
    return {
        type: SET_QUESTION_DETAIL,
        params,
    };
}