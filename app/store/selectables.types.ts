import { FindInput, FindOutput, RequestStatus } from './store.types'


type SelectablesRequests = {
    findSelectableTracksCollections: RequestStatus
    findSelectablePerformers: RequestStatus
}

export type SelectablesRequestNames = keyof SelectablesRequests

export type SelectableItem = {
    id: string
    name: string
}

export type SelectablesState = {
    tracksCollections: {
        items: null | SelectableItem[]
    }
    performers: {
        items: null | SelectableItem[]
        searchValue: string
    }
    requests: SelectablesRequests
}

export type FindSelectableTracksCollectionsInput = FindInput<'name'>

export type FindSelectableTracksCollectionsOutput = FindOutput<
    SelectableItem,
    {
        name: 'name'
        direction: 'asc'
    }
>
