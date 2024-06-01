import { createSlice, createAction } from '@reduxjs/toolkit'

import {
    FIND_SELECTABLE_PERFORMERS,
    FIND_SELECTABLE_TRACKS_COLLECTIONS,
} from 'consts'
import {
    FindSelectablePerformersOutput,
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

        findSelectablePerformersSuccess(
            state,
            action: FindSuccessAction<FindSelectablePerformersOutput>,
        ) {
            state.performers.items = action.payload.items
            state.requests.findSelectablePerformers = 'loaded'
        },
    },
})

// Actions
export const {
    changeRequestStatus,
    findSelectableTracksCollectionsSuccess,
    findSelectablePerformersSuccess,
} = selectablesSlice.actions

// Custom actions
export const findSelectableTracksCollections = createAction(
    FIND_SELECTABLE_TRACKS_COLLECTIONS,
)

export const findSelectablePerformers = createAction(FIND_SELECTABLE_PERFORMERS)

// Selectors
export const isFindSelectablePerformersLoadingSelector = (state: RootState) => {
    return state.selectables.requests.findSelectablePerformers === 'loading'
}

export const isFindSelectableTracksCollectionsLoadingSelector = (
    state: RootState,
) => {
    return (
        state.selectables.requests.findSelectableTracksCollections === 'loading'
    )
}

export const selectableTracksCollectionsItemsSelector = (state: RootState) => {
    return state.selectables.tracksCollections.items
}

export const selectablePerformersItemsSelector = (state: RootState) => {
    return state.selectables.performers.items
}

export default selectablesSlice
