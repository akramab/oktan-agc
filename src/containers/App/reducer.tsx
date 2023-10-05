import { combineReducers } from "redux";
import layoutReducer from "../Layout/reducer";
import registerReducer from "../Register/reducer";
import loginReducer from "../Login/reducer";
import crystalProfileReducer from "../CrystalProfile/reducer";
import isotermProfileReducer from "../IsotermProfile/reducer";
import contestantDashboardReducer from "../ContestantDashboard/reducer";

const Reducer = combineReducers({
    layoutReducer,
    registerReducer,
    loginReducer,
    crystalProfileReducer,
    isotermProfileReducer,
    contestantDashboardReducer
});

export default Reducer;