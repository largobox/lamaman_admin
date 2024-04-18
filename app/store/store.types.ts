import { Sorting, SortingDirection } from 'common-types'
import store from './store'
import { PayloadAction } from '@reduxjs/toolkit'


export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export type RequestStatus = 'initial' | 'loading' | 'loaded' | 'error'

export type FindInput<T> = {
    sortingName: T
    sortingDirection: SortingDirection
    page: string
    limit: string
}

export type FindOutput<T, S> = {
    items: T[]
    meta: {
        sorting: Sorting<S>
        total: number
    }
}

export type CreatePayload<T> = {
    data: T
}

export type UpdatePayload<T> = {
    id: string
    data: T
}

export type ChangeSortingAction<T> = PayloadAction<{
    name: T
    direction: SortingDirection
}>

export type ChangePageAction = PayloadAction<number>

export type CreateAction<T> = PayloadAction<CreatePayload<T>>

export type DeleteAction = PayloadAction<string>

export type GetAction = PayloadAction<string>

export type UpdateAction<T> = PayloadAction<UpdatePayload<T>>

export type FindSuccessAction<T> = PayloadAction<T>

export type GetSuccessAction<T> = PayloadAction<T>

export type ChangeRequestStatusAction<T> = PayloadAction<{
    name: T
    status: RequestStatus
}>
