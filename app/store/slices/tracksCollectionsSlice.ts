import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

import { RootState, TracksCollectionsState } from 'store/store.types'


const initialState: TracksCollectionsState = {
    sortings: [{ name: 'name', direction: 'asc' }],
}

const tracksCollectionsSlice = createSlice({
    name: 'tracksCollections',
    initialState,
    reducers: {
        addFilter(state, action: PayloadAction<string>) {
            console.log('state: ', state)
            console.log('action: ', action)
        },
    },
})

export const { addFilter } = tracksCollectionsSlice.actions

export const currentToastSelector = (state: RootState) => {
    console.log('state: ', state)
}

export default tracksCollectionsSlice
