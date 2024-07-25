import { createSlice, createAction } from '@reduxjs/toolkit'

import {
    CREATE_PERFORMER,
    DELETE_PERFORMER,
    FIND_PERFORMERS,
    GET_PERFORMER,
    PAGINATION_LIMIT,
    UPDATE_PERFORMER,
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
    Performer,
    PerformerFormValues,
    PerformersRequestNames,
    PerformersSortings,
    PerformersState,
} from 'store/performers.types'


const initialState: PerformersState = {
    formInitialValues: {
        name: '',
    },
    items: null,
    itemsTotal: null,
    page: 1,
    requests: {
        createPerformer: 'initial',
        deletePerformer: 'initial',
        findPerformers: 'initial',
        getPerformer: 'initial',
        updatePerformer: 'initial',
    },
    sorting: {
        name: 'name',
        direction: 'asc',
    },
}

const performersSlice = createSlice({
    name: 'performers',
    initialState,
    reducers: {
        changePage(state, action: ChangePageAction) {
            state.page = action.payload
        },

        changeSorting(state, action: ChangeSortingAction<PerformersSortings>) {
            state.sorting = action.payload
        },

        changeRequestStatus(
            state,
            action: ChangeRequestStatusAction<PerformersRequestNames>,
        ) {
            const { name, status } = action.payload

            state.requests[name] = status
        },

        findPerformersSuccess(
            state,
            action: FindSuccessAction<
                FindOutput<Performer, PerformersSortings>
            >,
        ) {
            state.items = action.payload.items
            state.itemsTotal = action.payload.meta.total
            state.requests.findPerformers = 'loaded'
        },

        getPerformerSuccess(
            state,
            action: GetSuccessAction<PerformerFormValues>,
        ) {
            state.formInitialValues = action.payload
            state.requests.getPerformer = 'loaded'
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
    findPerformersSuccess,
    getPerformerSuccess,
    resetForm,
} = performersSlice.actions

// Custom actions
export const createPerformer =
    createAction<CreatePayload<PerformerFormValues>>(CREATE_PERFORMER)

export const deletePerformer = createAction<string>(DELETE_PERFORMER)

export const findPerformers = createAction(FIND_PERFORMERS)

export const getPerformer = createAction<string>(GET_PERFORMER)

export const updatePerformer =
    createAction<UpdatePayload<PerformerFormValues>>(UPDATE_PERFORMER)

// Selectors
export const findPerformersParamsSelector = (
    state: RootState,
): FindInput<PerformersSortings> => {
    return {
        page: String(state.performers.page),
        sortingName: state.performers.sorting.name,
        sortingDirection: state.performers.sorting.direction,
        limit: String(PAGINATION_LIMIT),
    }
}

export const formInitialValuesSelector = (state: RootState) => {
    return state.performers.formInitialValues
}

export const isCreateLoadingSelector = (state: RootState) => {
    return state.performers.requests.createPerformer === 'loading'
}

export const isEditLoadingSelector = (state: RootState) => {
    return (
        state.performers.requests.updatePerformer === 'loading' ||
        state.performers.requests.getPerformer === 'loading'
    )
}

export const isFindLoadingSelector = (state: RootState) => {
    return state.performers.requests.findPerformers === 'loading'
}

export const isItemsLoadedSelector = (state: RootState) => {
    return state.performers.requests.findPerformers === 'loaded'
}

export const itemsSelector = (state: RootState) => {
    return state.performers.items
}

export const itemsTotalSelector = (state: RootState) => {
    return state.performers.itemsTotal
}

export const pageSelector = (state: RootState) => {
    return state.performers.page
}

export const sortingSelector = (state: RootState) => {
    return state.performers.sorting
}

export default performersSlice
