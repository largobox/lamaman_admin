import React, { useMemo } from 'react'

import { TableSortings } from 'uikit'
import Box from './TracksCollectionsTable.styles'
import { useAppDispatch, useAppSelector } from 'hooks'
import {
    changeCurrentSorting,
    currentSortingSelector,
} from 'store/slices/tracksCollectionsSlice'
import { SortHandlerSign } from 'common-types'
import { TracksCollectionsTableItem } from 'unique'


const TracksCollectionsTable = () => {
    const currentSorting = useAppSelector(currentSortingSelector)
    const dispatch = useAppDispatch()

    const sortings = useMemo(
        () => [
            {
                name: 'name',
                label: 'наименование',
            },
            {
                name: 'createdAt',
                label: 'дата создания',
            },
        ],
        [],
    )

    const sortHandler: SortHandlerSign = (name, direction) => {
        dispatch(changeCurrentSorting({ name, direction }))
    }

    const items = [
        { id: 1, name: 'name 1', createdAt: '12-12-2021' },
        { id: 2, name: 'name 2', createdAt: '12-12-2021' },
        { id: 3, name: 'name 3', createdAt: '12-12-2021' },
    ]

    return (
        <Box>
            <TableSortings
                items={sortings}
                currentTableSorting={currentSorting}
                onSort={sortHandler}
            />

            {items.map((item) => (
                <TracksCollectionsTableItem
                    key={item.id}
                    data={item}
                />
            ))}
        </Box>
    )
}

export default TracksCollectionsTable
