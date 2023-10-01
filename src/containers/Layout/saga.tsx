import { put, call, takeLatest } from "redux-saga/effects";
import { hitApi, payloadGenerator } from "../../config/api";
import { setLoaderState } from "./action";
import { GET_LOADER_STATE } from "./constant";

export function* setLoader(action: any): any {
    const { params } = action;
    yield put(setLoaderState(params));
}

export function* callApi(
    method: string,
    url: string,
    params: any,
    data: any,
    hasLoader: boolean = false,
): any {
    let out: any;
    if (hasLoader) yield put(setLoaderState(true));
    const payload = payloadGenerator(method, url, params, data);
    try {
        const request = yield call(hitApi, payload);
        const { data } = request;
        out = data;
    } catch (error: any) {
        const status = error?.response?.status;
    }
    if (hasLoader) {
        yield put(setLoaderState(false));
    }
    return out;
}

export function* watchAppSaga() {
    yield takeLatest(GET_LOADER_STATE, setLoader);
}
