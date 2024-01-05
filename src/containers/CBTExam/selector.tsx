const connectedSelector = (state: any) => {
    return state?.cbtExamReducer?.connected
        ? state.cbtExamReducer.connected
        : false;
};

const socketMessageSelector = (state: any) => {
    return state?.cbtExamReducer?.socketMessage
        ? state.cbtExamReducer.socketMessage
        : null;
};

const cbtExamSelector = (state: any) => {
    return state?.cbtExamReducer?.cbtExam
        ? state.cbtExamReducer.cbtExam
        : null;
};

const toggleMessageSelector = (state: any) => {
    return state?.cbtExamReducer?.toggleMessage
        ? state.cbtExamReducer.toggleMessage
        : null;
};

const answerMessageSelector = (state: any) => {
    return state?.cbtExamReducer?.answerMessage
        ? state.cbtExamReducer.answerMessage
        : null;
};

const submitMessageSelector = (state: any) => {
    return state?.cbtExamReducer?.submitMessage
        ? state.cbtExamReducer.submitMessage
        : null;
};

export {
    connectedSelector,
    socketMessageSelector,
    cbtExamSelector,
    toggleMessageSelector,
    answerMessageSelector,
    submitMessageSelector
};
