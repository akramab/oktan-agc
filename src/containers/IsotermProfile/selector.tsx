const isotermProfileSelector = (state: any) => {
    return state?.isotermProfileReducer?.isotermProfile
        ? state.isotermProfileReducer.isotermProfile
        : null;
};

const editProfileMessageSelector = (state: any) => {
    return state?.isotermProfileReducer?.editProfileMessage
        ? state.isotermProfileReducer.editProfileMessage
        : null;
};

export {
    isotermProfileSelector,
    editProfileMessageSelector
};
