import React, { useEffect, useMemo } from 'react'

import { TableSortings } from 'uikit'
import Box from './TracksCollectionsTable.styles'
import { useAppDispatch, useAppSelector, useRequestDebounce } from 'hooks'
import {
    changeCurrentSorting,
    currentSortingSelector,
} from 'store/slices/tracksCollectionsSlice'
import { SortHandlerSign } from 'common-types'
import { TracksCollectionsTableItem } from 'unique'
import { useLazyFindTracksCollectionsQuery } from 'api'
import { Spin } from 'app/components/uikit/Spinner/Spinner.styles'
import { SpinBox } from 'layouts'


const TracksCollectionsTable = () => {
    const currentSorting = useAppSelector(currentSortingSelector)
    const dispatch = useAppDispatch()
    const [findTracksCollections, { data, isFetching, isSuccess, isLoading }] =
        useLazyFindTracksCollectionsQuery()
    const isResultsVisible = useRequestDebounce(
        isSuccess && !isFetching && !isLoading,
    )
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

    useEffect(() => {
        findTracksCollections({ sorting: currentSorting })
    }, [currentSorting])

    return (
        <Box>
            <TableSortings
                items={sortings}
                currentTableSorting={currentSorting}
                onSort={sortHandler}
            />

            {!isResultsVisible && (
                <SpinBox>
                    <Spin />
                </SpinBox>
            )}

            {isResultsVisible &&
                data.items.map((item) => (
                    <TracksCollectionsTableItem
                        key={item.id}
                        data={item}
                    />
                ))}
        </Box>
    )
}

export default TracksCollectionsTable
