import { put, select, takeEvery } from 'redux-saga/effects'

import Api from 'api'
import {
    changeRequestStatus,
    findPerformers,
    findPerformersParamsSelector,
    findPerformersSuccess,
    getPerformerSuccess,
} from 'store/slices/performers'
import { addToast } from 'store/slices/toasts'
import { delay } from 'utils'
import {
    CREATE_PERFORMER,
    DELETE_PERFORMER,
    FIND_PERFORMERS,
    GET_PERFORMER,
    SAGA_LAYER,
    UPDATE_PERFORMER,
} from 'consts'
import {
    CreateAction,
    DeleteAction,
    FindInput,
    FindOutput,
    GetAction,
    UpdateAction,
} from 'store/store.types'
import logger from 'logger'
import router from 'router'
import {
    Performer,
    PerformerFormValues,
    PerformersSortings,
} from 'store/performers.types'


function* createPerformerWorkerSaga(action: CreateAction<PerformerFormValues>) {
    try {
        yield put(
            changeRequestStatus({
                name: 'createPerformer',
                status: 'loading',
            }),
        )
        yield delay()
        yield Api.createPerformer(action.payload.data)
        yield put(
            changeRequestStatus({
                name: 'createPerformer',
                status: 'loaded',
            }),
        )
        yield put(findPerformers())

        router.navigate('/performers')
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'createPerformer',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

function* deletePerformerWorkerSaga(action: DeleteAction) {
    try {
        yield put(
            changeRequestStatus({
                name: 'deletePerformer',
                status: 'loading',
            }),
        )
        yield Api.deletePerformer(action.payload)
        yield put(
            changeRequestStatus({
                name: 'deletePerformer',
                status: 'loaded',
            }),
        )
        yield put(findPerformers())
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'deletePerformer',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

function* findPerformersWorkerSaga() {
    try {
        yield put(
            changeRequestStatus({
                name: 'findPerformers',
                status: 'loading',
            }),
        )
        yield delay()

        const params = (yield select(
            findPerformersParamsSelector,
        )) as FindInput<PerformersSortings>

        const result = (yield Api.findPerformers(params)) as FindOutput<
            Performer,
            PerformersSortings
        >

        yield put(findPerformersSuccess(result))
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'findPerformers',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

function* getPerformerWorkerSaga(action: GetAction) {
    try {
        yield put(
            changeRequestStatus({
                name: 'getPerformer',
                status: 'loading',
            }),
        )
        yield delay()

        const result = (yield Api.getPerformer(
            action.payload,
        )) as PerformerFormValues

        yield put(getPerformerSuccess(result))
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'getPerformer',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

function* updatePerformerWorkerSaga(action: UpdateAction<PerformerFormValues>) {
    try {
        yield put(
            changeRequestStatus({
                name: 'updatePerformer',
                status: 'loading',
            }),
        )
        yield delay()
        yield Api.updatePerformer(action.payload.id, action.payload.data)
        yield put(
            changeRequestStatus({
                name: 'updatePerformer',
                status: 'loaded',
            }),
        )
        yield put(findPerformers())

        router.navigate('/performers')
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeRequestStatus({
                name: 'updatePerformer',
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

export function* createPerformerWatcherSaga() {
    yield takeEvery(CREATE_PERFORMER, createPerformerWorkerSaga)
}

export function* deletePerformerWatcherSaga() {
    yield takeEvery(DELETE_PERFORMER, deletePerformerWorkerSaga)
}

export function* findPerformersWatcherSaga() {
    yield takeEvery(FIND_PERFORMERS, findPerformersWorkerSaga)
}

export function* getPerformerWatcherSaga() {
    yield takeEvery(GET_PERFORMER, getPerformerWorkerSaga)
}

export function* updatePerformerWatcherSaga() {
    yield takeEvery(UPDATE_PERFORMER, updatePerformerWorkerSaga)
}
