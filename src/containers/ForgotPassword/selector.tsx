const forgotPasswordMessageSelector = (state: any) => {
    return state?.forgotPasswordReducer?.forgotPasswordMessage
        ? state.forgotPasswordReducer.forgotPasswordMessage
        : null;
};

export {
    forgotPasswordMessageSelector
};
