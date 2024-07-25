import { put, takeEvery } from 'redux-saga/effects'

import Api from 'api'
import { addToast } from 'store/slices/toasts'
import { delay } from 'utils'
import { GET_TRACK_DESCRIPTION_PLAYER, SAGA_LAYER } from 'consts'
import logger from 'logger'

import {
    GetTrackDescriptionPlayerAction,
    GetTrackDescriptionPlayerOutput,
} from 'store/player.types'
import {
    changeRequestStatus,
    getTrackDescriptionPlayerSuccess,
} from 'store/slices/player'


function* getTrackDescriptionPlayerWorkerSaga(
    action: GetTrackDescriptionPlayerAction,
) {
    try {
        yield put(
            changeRequestStatus({
                name: 'getTrackDescription',
                status: 'loading',
            }),
        )
        yield delay()

        const result = (yield Api.getTrackDescription(
            action.payload,
        )) as GetTrackDescriptionPlayerOutput

        yield put(getTrackDescriptionPlayerSuccess(result))
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'getTrackDescription',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

export function* getTrackDescriptionPlayerWatcherSaga() {
    yield takeEvery(
        GET_TRACK_DESCRIPTION_PLAYER,
        getTrackDescriptionPlayerWorkerSaga,
    )
}
