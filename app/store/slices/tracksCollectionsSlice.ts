import { createSlice } from '@reduxjs/toolkit'

import {
    ChangeCurrentSortingAction,
    ChangePageAction,
    RootState,
    TracksCollectionsState,
} from 'store/store.types'


const initialState: TracksCollectionsState = {
    currentSorting: { name: 'name', direction: 'asc' },
    page: 1,
}

const tracksCollectionsSlice = createSlice({
    name: 'tracksCollections',
    initialState,
    reducers: {
        changeCurrentSorting(state, action: ChangeCurrentSortingAction) {
            state.currentSorting = action.payload
        },

        changePage(state, action: ChangePageAction) {
            state.page = action.payload
        },
    },
})

export const { changeCurrentSorting, changePage } =
    tracksCollectionsSlice.actions

export const currentSortingSelector = (state: RootState) => {
    return state.tracksCollections.currentSorting
}

export const pageSelector = (state: RootState) => {
    return state.tracksCollections.page
}

export default tracksCollectionsSlice
