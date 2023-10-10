const newPasswordMessageSelector = (state: any) => {
    return state?.newPasswordReducer?.newPasswordMessage
        ? state.newPasswordReducer.newPasswordMessage
        : null;
};

export {
    newPasswordMessageSelector
};
