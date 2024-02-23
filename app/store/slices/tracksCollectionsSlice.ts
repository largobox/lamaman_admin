import { createSlice } from '@reduxjs/toolkit'

import {
    ChangeCurrentSortingAction,
    RootState,
    TracksCollectionsState,
} from 'store/store.types'


const initialState: TracksCollectionsState = {
    currentSorting: { name: 'createdAt', direction: 'desc' },
}

const tracksCollectionsSlice = createSlice({
    name: 'tracksCollections',
    initialState,
    reducers: {
        changeCurrentSorting(state, action: ChangeCurrentSortingAction) {
            state.currentSorting = action.payload
        },
    },
})

export const { changeCurrentSorting } = tracksCollectionsSlice.actions

export const currentSortingSelector = (state: RootState) => {
    return state.tracksCollections.currentSorting
}

export default tracksCollectionsSlice
