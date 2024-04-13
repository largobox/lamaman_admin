import { createSlice, createAction } from '@reduxjs/toolkit'

import {
    CREATE_TRACKS_COLLECTION,
    FIND_TRACKS_COLLECTIONS,
    GET_TRACKS_COLLECTION,
    PAGINATION_LIMIT,
    UPDATE_TRACKS_COLLECTION,
} from 'consts'
import {
    ChangeSortingAction,
    ChangePageAction,
    FindTracksCollectionsInput,
    HandleFindTracksCollectionsSuccessAction,
    RootState,
    TracksCollectionsState,
    TracksCollectionsSortings,
    ChangeTracksCollectionsRequestStatusAction,
    TracksCollectionsRequestNames,
    HandleGetTracksCollectionsSuccessAction,
    CreateTracksCollectionPayload,
    UpdateTracksCollectionPayload,
} from 'store/store.types'


const initialState: TracksCollectionsState = {
    formValues: {
        name: '',
    },
    items: null,
    itemsTotal: null,
    page: 1,
    requests: {
        createTracksCollection: 'initial',
        deleteTracksCollection: 'initial',
        findTracksCollections: 'initial',
        getTracksCollection: 'initial',
        updateTracksCollection: 'initial',
    },
    sorting: {
        name: 'name',
        direction: 'asc',
    },
}

const tracksCollectionsSlice = createSlice({
    name: 'tracksCollections',
    initialState,
    reducers: {
        changePage(state, action: ChangePageAction) {
            state.page = action.payload
        },

        changeSorting(
            state,
            action: ChangeSortingAction<TracksCollectionsSortings>,
        ) {
            state.sorting = action.payload
        },

        changeRequestStatus(
            state,
            action: ChangeTracksCollectionsRequestStatusAction,
        ) {
            const { name, status } = action.payload

            state.requests[name] = status
        },

        findTracksCollectionsSuccess(
            state,
            action: HandleFindTracksCollectionsSuccessAction,
        ) {
            state.items = action.payload.items
            state.itemsTotal = action.payload.meta.total
            state.requests.findTracksCollections = 'loaded'
        },

        getTracksCollectionSuccess(
            state,
            action: HandleGetTracksCollectionsSuccessAction,
        ) {
            state.formValues = action.payload
            state.requests.getTracksCollection = 'loaded'
        },

        resetForm(state) {
            state.formValues = {
                name: '',
            }
        },
    },
})

// Actions
export const {
    changePage,
    changeRequestStatus,
    changeSorting,
    findTracksCollectionsSuccess,
    getTracksCollectionSuccess,
    resetForm,
} = tracksCollectionsSlice.actions

// Custom actions
export const findTracksCollections = createAction(FIND_TRACKS_COLLECTIONS)

export const createTracksCollection =
    createAction<CreateTracksCollectionPayload>(CREATE_TRACKS_COLLECTION)

export const getTracksCollection = createAction<string>(GET_TRACKS_COLLECTION)

export const updateTracksCollection =
    createAction<UpdateTracksCollectionPayload>(UPDATE_TRACKS_COLLECTION)

// Selectors
export const findTracksCollectionsParamsSelector = (
    state: RootState,
): FindTracksCollectionsInput => {
    return {
        page: String(state.tracksCollections.page),
        sortingName: state.tracksCollections.sorting.name,
        sortingDirection: state.tracksCollections.sorting.direction,
        limit: String(PAGINATION_LIMIT),
    }
}

export const formValuesSelector = (state: RootState) => {
    return state.tracksCollections.formValues
}

export const isCreateLoadingSelector = (state: RootState) => {
    return state.tracksCollections.requests.createTracksCollection === 'loading'
}

export const isEditLoadingSelector = (state: RootState) => {
    return (
        state.tracksCollections.requests.updateTracksCollection === 'loading' ||
        state.tracksCollections.requests.getTracksCollection === 'loading'
    )
}

export const isFindLoadingSelector = (state: RootState) => {
    return state.tracksCollections.requests.findTracksCollections === 'loading'
}

export const isRequestLoadedSelector =
    (requestName: TracksCollectionsRequestNames) => (state: RootState) => {
        return state.tracksCollections.requests[requestName] === 'loaded'
    }

export const itemsSelector = (state: RootState) => {
    return state.tracksCollections.items
}

export const itemsTotalSelector = (state: RootState) => {
    return state.tracksCollections.itemsTotal
}

export const pageSelector = (state: RootState) => {
    return state.tracksCollections.page
}

export const sortingSelector = (state: RootState) => {
    return state.tracksCollections.sorting
}

export default tracksCollectionsSlice
