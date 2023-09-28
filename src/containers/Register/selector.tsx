const registerMessageSelector = (state: any) => {
    return state?.registerReducer?.registerMessage
        ? state.registerReducer.registerMessage
        : null;
};

export {
    registerMessageSelector
};
