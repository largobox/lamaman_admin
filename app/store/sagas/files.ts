import { PayloadAction } from '@reduxjs/toolkit'
import { put, takeEvery } from 'redux-saga/effects'

import logger from 'logger'
import Api from 'api'
import { addToast } from 'store/slices/toasts'
import { delay } from 'utils'
import { DOWNLOAD_FILE, SAGA_LAYER } from 'consts'
import {
    changeFileRequestStatus,
    donwloadFileSuccess,
} from 'store/slices/files'


function* downloadFileWorkerSaga(action: PayloadAction<string>) {
    try {
        yield put(
            changeFileRequestStatus({
                id: action.payload,
                status: 'loading',
            }),
        )
        yield delay()

        const result = (yield Api.downloadFile(action.payload)) as Blob

        yield put(
            donwloadFileSuccess({
                id: action.payload,
                data: result,
            }),
        )
    } catch (error) {
        yield put(addToast({ message: error.message, toastType: 'error' }))
        yield put(
            changeFileRequestStatus({
                id: action.payload,
                status: 'error',
            }),
        )

        logger.error({ error, layer: SAGA_LAYER })
    }
}

export function* downloadFileWatcherSaga() {
    yield takeEvery(DOWNLOAD_FILE, downloadFileWorkerSaga)
}
