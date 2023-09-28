import { combineReducers } from "redux";
import layoutReducer from "../Layout/reducer";
import registerReducer from "../Register/reducer";
import loginReducer from "../Login/reducer";

const Reducer = combineReducers({
    layoutReducer,
    registerReducer,
    loginReducer
});

export default Reducer;