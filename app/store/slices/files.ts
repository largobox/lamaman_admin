import { createSlice, createAction } from '@reduxjs/toolkit'

import { DOWNLOAD_FILE } from 'consts'
import { RootState } from 'store/store.types'
import {
    ChangeFileRequestStatusAction,
    DonwloadFileSuccessAction,
    FilesState,
} from 'store/files.types'


const initialState: FilesState = {
    items: [],
}

const filesSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        changeFileRequestStatus(state, action: ChangeFileRequestStatusAction) {
            const { id, status } = action.payload

            if (status === 'loading') {
                state.items.push({
                    id,
                    status,
                    data: null,
                })
            }

            if (status === 'error') {
                const findedFile = state.items.find((item) => item.id === id)

                findedFile.status = 'error'
                findedFile.data = null
            }
        },

        donwloadFileSuccess(state, action: DonwloadFileSuccessAction) {
            const { id, data } = action.payload
            const findedFile = state.items.find((item) => item.id === id)

            findedFile.data = data
            findedFile.status = 'loaded'
        },
    },
})

// Actions
export const { changeFileRequestStatus, donwloadFileSuccess } =
    filesSlice.actions

// Custom actions
export const downloadFile = createAction<string>(DOWNLOAD_FILE)

// Selectors
export const isFileLoadingSelector = (id: string) => (state: RootState) => {
    const findedFile = state.files.items.find((item) => item.id === id)

    return findedFile.status === 'loading'
}

export default filesSlice
