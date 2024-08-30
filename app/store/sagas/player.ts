import { put, select, takeEvery } from 'redux-saga/effects'

import Api from 'api'
import { addToast } from 'store/slices/toasts'
import { AudioPlayback, delay } from 'utils'
import {
    GET_TRACK_DESCRIPTION_PLAYER,
    GET_TRACK_FILE_PART_PLAYER,
    SAGA_LAYER,
} from 'consts'
import logger from 'logger'

import {
    GetTrackDescriptionPlayerAction,
    GetTrackDescriptionPlayerOutput,
    GetTrackFilePartParamsPlayer,
} from 'store/player.types'
import {
    changeRequestStatus,
    getTrackDescriptionPlayerSuccess,
    getTrackFilePartPlayerParamsSelector,
    setTrackFilePartStartByteIndex,
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

function* getTrackFilePartPlayerWorkerSaga() {
    try {
        yield put(
            changeRequestStatus({
                name: 'getTrackFilePart',
                status: 'loading',
            }),
        )
        yield delay()

        const params = (yield select(
            getTrackFilePartPlayerParamsSelector,
        )) as GetTrackFilePartParamsPlayer

        const result = (yield Api.getTrackFilePart(
            params.fileId,
            params.start,
            params.end,
        )) as ArrayBuffer

        yield AudioPlayback.addChunk(result, params.start)

        yield put(setTrackFilePartStartByteIndex(params.end + 1))

        yield put(
            changeRequestStatus({
                name: 'getTrackFilePart',
                status: 'loaded',
            }),
        )
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'getTrackFilePart',
                status: 'error',
            }),
        )

        AudioPlayback.clear()

        logger.error({ error, layer: SAGA_LAYER })
    }
}

export function* getTrackDescriptionPlayerWatcherSaga() {
    yield takeEvery(
        GET_TRACK_DESCRIPTION_PLAYER,
        getTrackDescriptionPlayerWorkerSaga,
    )
}

export function* getTrackFilePartPlayerWatcherSaga() {
    yield takeEvery(
        GET_TRACK_FILE_PART_PLAYER,
        getTrackFilePartPlayerWorkerSaga,
    )
}
