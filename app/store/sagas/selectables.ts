import { put, takeEvery } from 'redux-saga/effects'

import Api from 'api'
import {
    changeRequestStatus,
    findSelectableTracksCollectionsSuccess,
} from 'store/slices/selectablesSlice'
import { addToast } from 'store/slices/toastsSlice'
import { delay } from 'utils'
import { FIND_SELECTABLE_TRACKS_COLLECTIONS, SAGA_LAYER } from 'consts'
import logger from 'logger'
import {
    FindSelectableTracksCollectionsInput,
    FindSelectableTracksCollectionsOutput,
} from 'store/selectables.types'


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

export function* findSelectableTracksCollectionsWatcherSaga() {
    yield takeEvery(
        FIND_SELECTABLE_TRACKS_COLLECTIONS,
        findSelectableTracksCollectionsWorkerSaga,
    )
}
