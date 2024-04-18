import { put, takeEvery } from 'redux-saga/effects'

import { AUTHORIZATION_LOGIN, SAGA_LAYER } from 'consts'
import logger from 'logger'
import { delay } from 'utils'
import Api from 'api'
import { AuthorizationLoginAction } from 'store/authorization.types'
import { addToast } from 'store/slices/toastsSlice'
import { changeRequestStatus, signIn } from 'store/slices/authorizationSlice'
import { validateAuthToken } from 'utils'
import router from 'router'


function* loginAuthorizationWorkerSaga(action: AuthorizationLoginAction) {
    try {
        yield put(
            changeRequestStatus({
                name: 'login',
                status: 'loading',
            }),
        )
        yield delay()

        const token = (yield Api.login(action.payload.data)) as string

        const isTokenValid = validateAuthToken(token)

        if (!isTokenValid) {
            yield put(
                addToast({ message: 'Токен невалидный', toastType: 'error' }),
            )
            yield put(
                changeRequestStatus({
                    name: 'login',
                    status: 'error',
                }),
            )

            return
        }

        yield put(signIn(token))
        yield put(
            changeRequestStatus({
                name: 'login',
                status: 'loaded',
            }),
        )

        router.navigate('/')
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'login',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

export function* loginAuthorizationWatcherSaga() {
    yield takeEvery(AUTHORIZATION_LOGIN, loginAuthorizationWorkerSaga)
}
