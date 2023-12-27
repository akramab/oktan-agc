const cbtInfoSelector = (state: any) => {
    return state?.cbtInfoReducer?.cbtInfo
        ? state.cbtInfoReducer.cbtInfo
        : null;
};

export {
    cbtInfoSelector
};
