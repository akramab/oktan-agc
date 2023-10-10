import {
    SET_CONTESTANTS_DATA,
    SUCCESS_VERIFY_CONTESTANT_DATA,
    SUCCESS_DELETE_CONTESTANT_DATA,
    SUCCESS_DOWNLOAD_CONTESTANT_DATA,
    SUCCESS_DOWNLOAD_ALL_CONTESTANT_DATA
} from "./constant";

const initialState = {
    contestantsData: [],
    verifyMessage: null,
    deleteMessage: null,
    downloadMessage: null,
    downloadAllMessage: null
};

const contestantDashboardReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_CONTESTANTS_DATA:
            return {
                ...state,
                contestantsData: action.params,
            };
        case SUCCESS_VERIFY_CONTESTANT_DATA:
            return {
                ...state,
                verifyMessage: action.params,
            };
        case SUCCESS_DELETE_CONTESTANT_DATA:
            return {
                ...state,
                deleteMessage: action.params,
            };
        case SUCCESS_DOWNLOAD_CONTESTANT_DATA:
            return {
                ...state,
                downloadMessage: action.params,
            };
        case SUCCESS_DOWNLOAD_ALL_CONTESTANT_DATA:
            return {
                ...state,
                downloadAllMessage: action.params,
            };
        default:
            return state;
    }
};

export default contestantDashboardReducer;
