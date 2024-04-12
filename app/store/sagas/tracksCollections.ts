import { getContext, put, select, takeEvery } from 'redux-saga/effects'

import Api from 'api-maow'
import {
    changeRequestStatus,
    findTracksCollections,
    findTracksCollectionsParamsSelector,
    findTracksCollectionsSuccess,
    getTracksCollectionSuccess,
} from 'store/slices/tracksCollectionsSlice'
import { addToast } from 'store/slices/toastsSlice'
import { delay } from 'app-utils'
import {
    CREATE_TRACKS_COLLECTION,
    FIND_TRACKS_COLLECTIONS,
    GET_TRACKS_COLLECTION,
    SAGA_LAYER,
    UPDATE_TRACKS_COLLECTION,
} from 'consts'
import {
    CreateTracksCollectionAction,
    FindTracksCollectionsInput,
    FindTracksCollectionsOutput,
    GetTracksCollectionAction,
    GetTracksCollectionOutput,
    UpdateTracksCollectionAction,
} from 'store/store.types'
import logger from 'logger'
import { Router } from 'common-types'


function* createTracksCollectionWorkerSaga(
    action: CreateTracksCollectionAction,
) {
    try {
        yield put(
            changeRequestStatus({
                name: 'createTracksCollection',
                status: 'loading',
            }),
        )
        yield delay()
        yield Api.createTracksCollection(action.payload.data)
        yield put(
            changeRequestStatus({
                name: 'createTracksCollection',
                status: 'loaded',
            }),
        )
        yield put(findTracksCollections())

        const router: Router = yield getContext('router')

        router.navigate('/tracks-collections')
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'createTracksCollection',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

function* findTracksCollectionsWorkerSaga() {
    try {
        yield put(
            changeRequestStatus({
                name: 'findTracksCollections',
                status: 'loading',
            }),
        )
        yield delay()

        const params = (yield select(
            findTracksCollectionsParamsSelector,
        )) as FindTracksCollectionsInput

        const result = (yield Api.findTracksCollections(
            params,
        )) as FindTracksCollectionsOutput

        yield put(findTracksCollectionsSuccess(result))
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'findTracksCollections',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

function* getTracksCollectionWorkerSaga(action: GetTracksCollectionAction) {
    try {
        yield put(
            changeRequestStatus({
                name: 'getTracksCollection',
                status: 'loading',
            }),
        )
        yield delay()

        const result = (yield Api.getTracksCollection(
            action.payload,
        )) as GetTracksCollectionOutput

        yield put(getTracksCollectionSuccess(result))
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'getTracksCollection',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

function* updateTracksCollectionWorkerSaga(
    action: UpdateTracksCollectionAction,
) {
    try {
        yield put(
            changeRequestStatus({
                name: 'updateTracksCollection',
                status: 'loading',
            }),
        )
        yield delay()
        yield Api.updateTracksCollection(action.payload.id, action.payload.data)
        yield put(
            changeRequestStatus({
                name: 'updateTracksCollection',
                status: 'loaded',
            }),
        )
        yield put(findTracksCollections())

        const router: Router = yield getContext('router')

        router.navigate('/tracks-collections')
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'updateTracksCollection',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

export function* createTracksCollectionWatcherSaga() {
    yield takeEvery(CREATE_TRACKS_COLLECTION, createTracksCollectionWorkerSaga)
}

export function* findTracksCollectionsWatcherSaga() {
    yield takeEvery(FIND_TRACKS_COLLECTIONS, findTracksCollectionsWorkerSaga)
}

export function* getTracksCollectionsWatcherSaga() {
    yield takeEvery(GET_TRACKS_COLLECTION, getTracksCollectionWorkerSaga)
}

export function* updateTracksCollectionWatcherSaga() {
    yield takeEvery(UPDATE_TRACKS_COLLECTION, updateTracksCollectionWorkerSaga)
}
