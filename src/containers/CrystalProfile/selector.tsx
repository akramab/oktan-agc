const crystalProfileSelector = (state: any) => {
    return state?.crystalProfileReducer?.crystalProfile
        ? state.crystalProfileReducer.crystalProfile
        : null;
};

const editProfileMessageSelector = (state: any) => {
    return state?.crystalProfileReducer?.editProfileMessage
        ? state.crystalProfileReducer.editProfileMessage
        : null;
};

export {
    crystalProfileSelector,
    editProfileMessageSelector
};
