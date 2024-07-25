import { put, takeEvery } from 'redux-saga/effects'

import Api from 'api'
import { addToast } from 'store/slices/toasts'
import { delay } from 'utils'
import { PLAY_PLAYER, SAGA_LAYER } from 'consts'
import logger from 'logger'

import { PlayerPlayAction, PlayerPlayOutput } from 'store/player.types'
import { changeRequestStatus, playPlayerSuccess } from 'store/slices/player'


function* playPlayerWorkerSaga(action: PlayerPlayAction) {
    try {
        yield put(
            changeRequestStatus({
                name: 'playPlayer',
                status: 'loading',
            }),
        )
        yield delay()

        const result = (yield Api.getTrackDescription(
            action.payload,
        )) as PlayerPlayOutput

        yield put(playPlayerSuccess(result))
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'playPlayer',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

export function* playPlayerWatcherSaga() {
    yield takeEvery(PLAY_PLAYER, playPlayerWorkerSaga)
}
