import { put, select, takeEvery } from 'redux-saga/effects'

import Api from 'api'
import {
    changeRequestStatus,
    findTracks,
    findTracksParamsSelector,
    findTracksSuccess,
    getTrackSuccess,
} from 'store/slices/tracks'
import { addToast } from 'store/slices/toasts'
import { delay } from 'utils'
import {
    CREATE_TRACK,
    DELETE_TRACK,
    FIND_TRACKS,
    GET_TRACK,
    SAGA_LAYER,
    UPDATE_TRACK,
} from 'consts'
import logger from 'logger'
import router from 'router'
import {
    Track,
    TrackFormValues,
    TrackGetOutput,
    TracksSortings,
} from 'store/tracks.types'
import {
    CreateAction,
    DeleteAction,
    FindInput,
    FindOutput,
    GetAction,
    UpdateAction,
} from 'store/store.types'


function* createTrackWorkerSaga(action: CreateAction<TrackFormValues>) {
    try {
        yield put(
            changeRequestStatus({
                name: 'createTrack',
                status: 'loading',
            }),
        )
        yield delay()
        yield Api.createTrack(action.payload.data)
        yield put(
            changeRequestStatus({
                name: 'createTrack',
                status: 'loaded',
            }),
        )
        yield put(findTracks())

        router.navigate('/tracks')
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'createTrack',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

function* deleteTrackWorkerSaga(action: DeleteAction) {
    try {
        yield put(
            changeRequestStatus({
                name: 'deleteTrack',
                status: 'loading',
            }),
        )
        yield Api.deleteTrack(action.payload)
        yield put(
            changeRequestStatus({
                name: 'deleteTrack',
                status: 'loaded',
            }),
        )
        yield put(findTracks())
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'deleteTrack',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

function* findTracksWorkerSaga() {
    try {
        yield put(
            changeRequestStatus({
                name: 'findTracks',
                status: 'loading',
            }),
        )
        yield delay()

        const params = (yield select(
            findTracksParamsSelector,
        )) as FindInput<TracksSortings>

        const result = (yield Api.findTracks(params)) as FindOutput<
            Track,
            TracksSortings
        >

        yield put(findTracksSuccess(result))
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'findTracks',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

function* getTrackWorkerSaga(action: GetAction) {
    try {
        yield put(
            changeRequestStatus({
                name: 'getTrack',
                status: 'loading',
            }),
        )
        yield delay()

        const result = (yield Api.getTrack(action.payload)) as TrackGetOutput

        yield put(getTrackSuccess(result))
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'getTrack',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

function* updateTrackWorkerSaga(action: UpdateAction<TrackFormValues>) {
    try {
        yield put(
            changeRequestStatus({
                name: 'updateTrack',
                status: 'loading',
            }),
        )
        yield delay()
        yield Api.updateTrack(action.payload.id, action.payload.data)
        yield put(
            changeRequestStatus({
                name: 'updateTrack',
                status: 'loaded',
            }),
        )
        yield put(findTracks())

        router.navigate('/tracks')
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'updateTrack',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

export function* createTrackWatcherSaga() {
    yield takeEvery(CREATE_TRACK, createTrackWorkerSaga)
}

export function* deleteTrackWatcherSaga() {
    yield takeEvery(DELETE_TRACK, deleteTrackWorkerSaga)
}

export function* findTracksWatcherSaga() {
    yield takeEvery(FIND_TRACKS, findTracksWorkerSaga)
}

export function* getTrackWatcherSaga() {
    yield takeEvery(GET_TRACK, getTrackWorkerSaga)
}

export function* updateTrackWatcherSaga() {
    yield takeEvery(UPDATE_TRACK, updateTrackWorkerSaga)
}
