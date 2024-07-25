import { createSlice, createAction } from '@reduxjs/toolkit'

import {
    CREATE_TRACKS_COLLECTION,
    DELETE_TRACKS_COLLECTION,
    FIND_TRACKS_COLLECTIONS,
    GET_TRACKS_COLLECTION,
    PAGINATION_LIMIT,
    UPDATE_TRACKS_COLLECTION,
} from 'consts'
import {
    ChangeSortingAction,
    ChangePageAction,
    FindInput,
    FindSuccessAction,
    RootState,
    ChangeRequestStatusAction,
    GetSuccessAction,
    CreatePayload,
    UpdatePayload,
    FindOutput,
} from 'store/store.types'
import {
    TracksCollection,
    TracksCollectionFormValues,
    TracksCollectionsRequestNames,
    TracksCollectionsSortings,
    TracksCollectionsState,
} from 'store/tracksCollections.types'


const initialState: TracksCollectionsState = {
    formInitialValues: {
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
            action: ChangeRequestStatusAction<TracksCollectionsRequestNames>,
        ) {
            const { name, status } = action.payload

            state.requests[name] = status
        },

        findTracksCollectionsSuccess(
            state,
            action: FindSuccessAction<
                FindOutput<TracksCollection, TracksCollectionsSortings>
            >,
        ) {
            state.items = action.payload.items
            state.itemsTotal = action.payload.meta.total
            state.requests.findTracksCollections = 'loaded'
        },

        getTracksCollectionSuccess(
            state,
            action: GetSuccessAction<TracksCollectionFormValues>,
        ) {
            state.formInitialValues = action.payload
            state.requests.getTracksCollection = 'loaded'
        },

        resetForm(state) {
            state.formInitialValues = {
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
export const createTracksCollection = createAction<
    CreatePayload<TracksCollectionFormValues>
>(CREATE_TRACKS_COLLECTION)

export const deleteTracksCollection = createAction<string>(
    DELETE_TRACKS_COLLECTION,
)

export const findTracksCollections = createAction(FIND_TRACKS_COLLECTIONS)

export const getTracksCollection = createAction<string>(GET_TRACKS_COLLECTION)

export const updateTracksCollection = createAction<
    UpdatePayload<TracksCollectionFormValues>
>(UPDATE_TRACKS_COLLECTION)

// Selectors
export const findTracksCollectionsParamsSelector = (
    state: RootState,
): FindInput<TracksCollectionsSortings> => {
    return {
        page: String(state.tracksCollections.page),
        sortingName: state.tracksCollections.sorting.name,
        sortingDirection: state.tracksCollections.sorting.direction,
        limit: String(PAGINATION_LIMIT),
    }
}

export const formInitialValuesSelector = (state: RootState) => {
    return state.tracksCollections.formInitialValues
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

export const isItemsLoadedSelector = (state: RootState) => {
    return state.tracksCollections.requests.findTracksCollections === 'loaded'
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