import { put, takeEvery } from 'redux-saga/effects'

import Api from 'api'
import {
    changeRequestStatus,
    findSelectablePerformersSuccess,
    findSelectableTracksCollectionsSuccess,
} from 'store/slices/selectables'
import { addToast } from 'store/slices/toasts'
import { delay } from 'utils'
import {
    FIND_SELECTABLE_PERFORMERS,
    FIND_SELECTABLE_TRACKS_COLLECTIONS,
    SAGA_LAYER,
} from 'consts'
import logger from 'logger'
import {
    FindSelectablePerformersInput,
    FindSelectablePerformersOutput,
    FindSelectableTracksCollectionsInput,
    FindSelectableTracksCollectionsOutput,
} from 'store/selectables.types'


function* findSelectablePerformersWorkerSaga() {
    try {
        yield put(
            changeRequestStatus({
                name: 'findSelectablePerformers',
                status: 'loading',
            }),
        )
        yield delay()

        const params: FindSelectablePerformersInput = {
            page: '1',
            sortingName: 'name',
            sortingDirection: 'asc',
            limit: '10',
        }

        const result = (yield Api.findPerformers(
            params,
        )) as FindSelectablePerformersOutput

        yield put(findSelectablePerformersSuccess(result))
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'findSelectablePerformers',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

function* findSelectableTracksCollectionsWorkerSaga() {
    try {
        yield put(
            changeRequestStatus({
                name: 'findSelectableTracksCollections',
                status: 'loading',
            }),
        )
        yield delay()

        const params: FindSelectableTracksCollectionsInput = {
            page: '1',
            sortingName: 'name',
            sortingDirection: 'asc',
            limit: '10',
        }

        const result = (yield Api.findTracksCollections(
            params,
        )) as FindSelectableTracksCollectionsOutput

        yield put(findSelectableTracksCollectionsSuccess(result))
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'findSelectableTracksCollections',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

export function* findSelectablePerformersWatcherSaga() {
    yield takeEvery(
        FIND_SELECTABLE_PERFORMERS,
        findSelectablePerformersWorkerSaga,
    )
}

export function* findSelectableTracksCollectionsWatcherSaga() {
    yield takeEvery(
        FIND_SELECTABLE_TRACKS_COLLECTIONS,
        findSelectableTracksCollectionsWorkerSaga,
    )
}
