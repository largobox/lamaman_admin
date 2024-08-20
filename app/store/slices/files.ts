import { createSlice, createAction } from '@reduxjs/toolkit'

import { DOWNLOAD_FILE } from 'consts'
import { RootState } from 'store/store.types'
import { ChangeFileRequestStatusAction, FilesState } from 'store/files.types'


const initialState: FilesState = {
    items: [],
}

const filesSlice = createSlice({
    name: 'files',
    initialState,
    reducers: {
        changeFileRequestStatus(state, action: ChangeFileRequestStatusAction) {
            const { id, status } = action.payload
            const findedFile = state.items.find((item) => item.id === id)

            if (findedFile) {
                findedFile.status = status

                return
            }

            state.items.push({
                id,
                status,
            })
        },
    },
})

// Actions
export const { changeFileRequestStatus } = filesSlice.actions

// Custom actions
export const downloadFile = createAction<string>(DOWNLOAD_FILE)

// Selectors
export const isFileLoadingOrHasErrorSelector =
    (id: string) => (state: RootState) => {
        const findedFile = state.files.items.find((item) => item.id === id)

        if (findedFile === undefined) {
            return false
        }

        const result =
            findedFile.status === 'loading' || findedFile.status === 'error'

        return result
    }

export default filesSlice
