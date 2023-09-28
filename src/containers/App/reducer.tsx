import { combineReducers } from "redux";
import layoutReducer from "../Layout/reducer";
import registerReducer from "../Register/reducer";

const Reducer = combineReducers({
    layoutReducer,
    registerReducer
});

export default Reducer;