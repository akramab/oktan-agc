import { combineReducers } from "redux";
import layoutReducer from "../Layout/reducer";
import registerReducer from "../Register/reducer";
import loginReducer from "../Login/reducer";
import crystalProfileReducer from "../CrystalProfile/reducer";
import isotermProfileReducer from "../IsotermProfile/reducer";
import contestantDashboardReducer from "../ContestantDashboard/reducer";
import forgotPasswordReducer from "../ForgotPassword/reducer";

const Reducer = combineReducers({
    layoutReducer,
    registerReducer,
    loginReducer,
    crystalProfileReducer,
    isotermProfileReducer,
    contestantDashboardReducer,
    forgotPasswordReducer
});

export default Reducer;