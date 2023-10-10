const contestantsDataSelector = (state: any) => {
    return state?.contestantDashboardReducer?.contestantsData
        ? state.contestantDashboardReducer.contestantsData
        : [];
};

const verifyMessageSelector = (state: any) => {
    return state?.contestantDashboardReducer?.verifyMessage
        ? state.contestantDashboardReducer.verifyMessage
        : null;
};

const deleteMessageSelector = (state: any) => {
    return state?.contestantDashboardReducer?.deleteMessage
        ? state.contestantDashboardReducer.deleteMessage
        : null;
};

const downloadMessageSelector = (state: any) => {
    return state?.contestantDashboardReducer?.downloadMessage
        ? state.contestantDashboardReducer.downloadMessage
        : null;
};

const downloadAllMessageSelector = (state: any) => {
    return state?.contestantDashboardReducer?.downloadAllMessage
        ? state.contestantDashboardReducer.downloadAllMessage
        : null;
};

export {
    contestantsDataSelector,
    verifyMessageSelector,
    deleteMessageSelector,
    downloadMessageSelector,
    downloadAllMessageSelector
};
