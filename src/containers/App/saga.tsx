import { all } from "redux-saga/effects";
import { watchAppSaga } from "../Layout/saga";
import { watchRegisterSaga } from "../Register/saga";
import { watchLoginSaga } from "../Login/saga";
import { watchCrystalProfileSaga } from "../CrystalProfile/saga";

export default function* Saga() {
    yield all([
        watchAppSaga(),
        watchRegisterSaga(),
        watchLoginSaga(),
        watchCrystalProfileSaga()
    ]);
}