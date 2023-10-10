import { all } from "redux-saga/effects";
import { watchAppSaga } from "../Layout/saga";
import { watchRegisterSaga } from "../Register/saga";
import { watchLoginSaga } from "../Login/saga";
import { watchCrystalProfileSaga } from "../CrystalProfile/saga";
import { watchIsotermProfileSaga } from "../IsotermProfile/saga";
import { watchContestantDashboardSaga } from "../ContestantDashboard/saga";
import { watchForgotPasswordSaga } from "../ForgotPassword/saga";

export default function* Saga() {
    yield all([
        watchAppSaga(),
        watchRegisterSaga(),
        watchLoginSaga(),
        watchCrystalProfileSaga(),
        watchIsotermProfileSaga(),
        watchContestantDashboardSaga(),
        watchForgotPasswordSaga()
    ]);
}