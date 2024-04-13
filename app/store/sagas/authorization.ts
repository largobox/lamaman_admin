import { getContext, put, takeEvery } from 'redux-saga/effects'

import { AUTHORIZATION_LOGIN, SAGA_LAYER } from 'consts'
import logger from 'logger'
import { delay } from 'utils'
import Api from 'api-maow'
import { AuthorizationLoginAction } from 'store/store.types'
import { Router } from 'common-types'
import { addToast } from 'store/slices/toastsSlice'
import { changeRequestStatus, signIn } from 'store/slices/authorizationSlice'
import { validateAuthToken } from 'utils'


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
        const isValid = validateAuthToken(token)

        if (!isValid) {
            yield put(
                addToast({ message: 'Токен невалиден', toastType: 'error' }),
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

        const router: Router = yield getContext('router')

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
