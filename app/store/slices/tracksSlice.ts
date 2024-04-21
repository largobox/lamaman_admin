import { createSlice, createAction } from '@reduxjs/toolkit'

import {
    CREATE_TRACK,
    DELETE_TRACK,
    FIND_TRACKS,
    GET_TRACK,
    PAGINATION_LIMIT,
    UPDATE_TRACK,
} from 'consts'
import {
    ChangeSortingAction,
    ChangePageAction,
    RootState,
    ChangeRequestStatusAction,
    FindSuccessAction,
    GetSuccessAction,
    FindOutput,
    UpdatePayload,
    CreatePayload,
    FindInput,
} from 'store/store.types'
import {
    Track,
    TrackFormValues,
    TracksRequestNames,
    TracksSortings,
    TracksState,
} from 'store/tracks.types'


const initialState: TracksState = {
    formValues: {
        name: '',
    },
    items: null,
    itemsTotal: null,
    page: 1,
    requests: {
        createTrack: 'initial',
        deleteTrack: 'initial',
        findTracks: 'initial',
        getTrack: 'initial',
        updateTrack: 'initial',
    },
    sorting: {
        name: 'name',
        direction: 'asc',
    },
}

const tracksSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {
        changePage(state, action: ChangePageAction) {
            state.page = action.payload
        },

        changeSorting(state, action: ChangeSortingAction<TracksSortings>) {
            state.sorting = action.payload
        },

        changeRequestStatus(
            state,
            action: ChangeRequestStatusAction<TracksRequestNames>,
        ) {
            const { name, status } = action.payload

            state.requests[name] = status
        },

        findTracksSuccess(
            state,
            action: FindSuccessAction<FindOutput<Track, TracksSortings>>,
        ) {
            state.items = action.payload.items
            state.itemsTotal = action.payload.meta.total
            state.requests.findTracks = 'loaded'
        },

        getTrackSuccess(state, action: GetSuccessAction<Track>) {
            state.formValues = action.payload
            state.requests.getTrack = 'loaded'
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
    findTracksSuccess,
    getTrackSuccess,
    resetForm,
} = tracksSlice.actions

// Custom actions
export const createTrack =
    createAction<CreatePayload<TrackFormValues>>(CREATE_TRACK)

export const deleteTrack = createAction<string>(DELETE_TRACK)

export const findTracks = createAction(FIND_TRACKS)

export const getTrack = createAction<string>(GET_TRACK)

export const updateTrack =
    createAction<UpdatePayload<TrackFormValues>>(UPDATE_TRACK)

// Selectors
export const findTracksParamsSelector = (
    state: RootState,
): FindInput<TracksSortings> => {
    return {
        page: String(state.tracks.page),
        sortingName: state.tracks.sorting.name,
        sortingDirection: state.tracks.sorting.direction,
        limit: String(PAGINATION_LIMIT),
    }
}

export const formValuesSelector = (state: RootState) => {
    return state.tracks.formValues
}

export const isCreateLoadingSelector = (state: RootState) => {
    return state.tracks.requests.createTrack === 'loading'
}

export const isEditLoadingSelector = (state: RootState) => {
    return (
        state.tracks.requests.updateTrack === 'loading' ||
        state.tracks.requests.getTrack === 'loading'
    )
}

export const isFindLoadingSelector = (state: RootState) => {
    return state.tracks.requests.findTracks === 'loading'
}

export const isItemsLoadedSelector = (state: RootState) => {
    return state.tracks.requests.findTracks === 'loaded'
}

export const itemsSelector = (state: RootState) => {
    return state.tracks.items
}

export const itemsTotalSelector = (state: RootState) => {
    return state.tracks.itemsTotal
}

export const pageSelector = (state: RootState) => {
    return state.tracks.page
}

export const sortingSelector = (state: RootState) => {
    return state.tracks.sorting
}

export default tracksSlice