const questionsDataSelector = (state: any) => {
    return state?.questionDashboardReducer?.questionsData
        ? state.questionDashboardReducer.questionsData
        : [];
};

const editMessageSelector = (state: any) => {
    return state?.questionDashboardReducer?.editMessage
        ? state.questionDashboardReducer.editMessage
        : null;
};

const deleteMessageSelector = (state: any) => {
    return state?.questionDashboardReducer?.deleteMessage
        ? state.questionDashboardReducer.deleteMessage
        : null;
};

const createMessageSelector = (state: any) => {
    return state?.questionDashboardReducer?.createMessage
        ? state.questionDashboardReducer.createMessage
        : null;
};

const questionDetailSelector = (state: any) => {
    return state?.questionDashboardReducer?.questionDetail
        ? state.questionDashboardReducer.questionDetail
        : null;
};

export {
    questionsDataSelector,
    editMessageSelector,
    deleteMessageSelector,
    createMessageSelector,
    questionDetailSelector
}
