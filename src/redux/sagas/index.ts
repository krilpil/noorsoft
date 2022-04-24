import {takeLatest, all, call, put} from 'redux-saga/effects'
import {FORM_FETCH_LOGIN_REQUEST} from "../constants/form";
import {userAuthorization} from "../../api/user-authorization";
import {UserAuthorizationData, UserData} from "../../types/user-type";
import {formFetchLoginSuccess, formFetchLoginFailure} from "../actions/form-actions";

export function* workerFormRequest(action: { type: string, payload: UserAuthorizationData }): unknown {
    const responseAuthorization: UserData = yield call(userAuthorization, {
        email: action.payload.email,
        password: action.payload.password
    })

    responseAuthorization.authorization ?
        yield put(formFetchLoginSuccess(responseAuthorization)) :
        yield put(formFetchLoginFailure(responseAuthorization))
}

export function* watchFormRequest() {
    yield takeLatest(FORM_FETCH_LOGIN_REQUEST, workerFormRequest)
}

export default function* rootSaga() {
    yield all([
        watchFormRequest()
    ])
}