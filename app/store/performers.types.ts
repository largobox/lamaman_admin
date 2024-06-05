import { Sorting } from 'common-types'
import { RequestStatus } from './store.types'


type PerformersRequests = {
    createPerformer: RequestStatus
    deletePerformer: RequestStatus
    findPerformers: RequestStatus
    getPerformer: RequestStatus
    updatePerformer: RequestStatus
}

export type PerformersRequestNames = keyof PerformersRequests

export type PerformerFormValues = {
    name: string
}

export type Performer = {
    id: string
    name: string
    createdAt: string
    updatedAt: string
}

export type PerformersSortings = 'name' | 'createdAt' | 'updatedAt'

export type PerformersState = {
    formInitialValues: PerformerFormValues
    items: Performer[] | null
    itemsTotal: number | null
    page: number
    requests: PerformersRequests
    sorting: Sorting<PerformersSortings>
}
