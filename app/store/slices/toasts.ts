import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

import { RootState } from 'store/store.types'
import { Toast, ToastsState } from 'store/toasts.types'


const initialState: ToastsState = {
    items: [],
}

const toastsSlice = createSlice({
    name: 'toasts',
    initialState,
    reducers: {
        addToast(state, action: PayloadAction<Toast>) {
            const toastWithSameMessage = state.items.find(
                (item) => item.message === action.payload.message,
            )

            if (toastWithSameMessage) return

            const { message, toastType } = action.payload

            state.items.push({
                message,
                toastType,
            })
        },

        removeToast(state, action: PayloadAction<string>) {
            state.items = state.items.filter(
                (item) => item.message !== action.payload,
            )
        },
    },
})

export const { addToast, removeToast } = toastsSlice.actions

export const currentToastSelector = (state: RootState) => {
    if (state.toasts.items.length === 0) return null

    return state.toasts.items[0]
}

export default toastsSlice
