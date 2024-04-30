import { createSlice, createAction } from '@reduxjs/toolkit'

import { FIND_SELECTABLE_TRACKS_COLLECTIONS } from 'consts'
import {
    FindSelectableTracksCollectionsOutput,
    SelectablesRequestNames,
    SelectablesState,
} from 'store/selectables.types'
import {
    FindSuccessAction,
    RootState,
    ChangeRequestStatusAction,
} from 'store/store.types'


const initialState: SelectablesState = {
    requests: {
        findSelectableTracksCollections: 'initial',
        findSelectablePerformers: 'initial',
    },
    tracksCollections: {
        items: null,
    },
    performers: {
        items: null,
        searchValue: '',
    },
}

const selectablesSlice = createSlice({
    name: 'selectables',
    initialState,
    reducers: {
        changeRequestStatus(
            state,
            action: ChangeRequestStatusAction<SelectablesRequestNames>,
        ) {
            const { name, status } = action.payload

            state.requests[name] = status
        },

        findSelectableTracksCollectionsSuccess(
            state,
            action: FindSuccessAction<FindSelectableTracksCollectionsOutput>,
        ) {
            state.tracksCollections.items = action.payload.items
            state.requests.findSelectableTracksCollections = 'loaded'
        },
    },
})

// Actions
export const { changeRequestStatus, findSelectableTracksCollectionsSuccess } =
    selectablesSlice.actions

// Custom actions
export const findSelectableTracksCollections = createAction(
    FIND_SELECTABLE_TRACKS_COLLECTIONS,
)

// Selectors
export const isFindSelectableTracksCollectionsLoadingSelector = (
    state: RootState,
) => {
    return (
        state.selectables.requests.findSelectableTracksCollections === 'loading'
    )
}

export const isSelectableTracksCollectionsLoadedSelector = (
    state: RootState,
) => {
    return (
        state.selectables.requests.findSelectableTracksCollections === 'loaded'
    )
}

export const selectableTracksCollectionsItemsSelector = (state: RootState) => {
    return state.selectables.tracksCollections.items
}

export default selectablesSlice
