import React from 'react'

import { TableSortings } from 'uikit'
import { AppLayout, PageLayout } from 'layouts'
import { TracksCollectionsTable, TracksCollectionsTopPanel } from 'unique'
import { useAppDispatch, useAppSelector } from 'hooks'
import {
    changeCurrentSorting,
    currentSortingSelector,
} from 'store/slices/tracksCollectionsSlice'
import { SortHandlerSign } from 'common-types'


const TracksCollectionsListPage = () => {
    const currentSorting = useAppSelector(currentSortingSelector)
    const dispatch = useAppDispatch()

    const sortings = [
        {
            name: 'name',
            label: 'наименование',
        },
        {
            name: 'createdAt',
            label: 'дата создания',
        },
    ]

    const sortHandler: SortHandlerSign = (name, direction) => {
        dispatch(changeCurrentSorting({ name, direction }))
    }

    return (
        <AppLayout>
            <PageLayout>
                <TracksCollectionsTopPanel />

                <TableSortings
                    items={sortings}
                    currentTableSorting={currentSorting}
                    onSort={sortHandler}
                />

                <TracksCollectionsTable />
            </PageLayout>
        </AppLayout>
    )
}

export default TracksCollectionsListPage
