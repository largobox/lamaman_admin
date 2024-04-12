import React, { useEffect } from 'react'

import { TableHeader, Pagination } from 'uikit'
import Box from './TracksCollectionsTable.styles'
import { useAppDispatch, useAppSelector } from 'hooks'
import {
    changeSorting,
    changePage,
    sortingSelector,
    findTracksCollections,
    isRequestLoadedSelector,
    isFindLoadingSelector,
    itemsSelector,
    itemsTotalSelector,
    pageSelector,
} from 'store/slices/tracksCollectionsSlice'
import { SortSign, ChangePageSign } from 'common-types'
import { TracksCollectionsTableItem } from 'unique'
import { Spin } from 'app/components/uikit/Spinner/Spinner.styles'
import { SpinBox, RowsBox } from 'layouts'
import { tableHeaderItems } from './utils'
import { TracksCollectionsSortings } from 'store/store.types'


const TracksCollectionsTable = () => {
    const appDispatch = useAppDispatch()
    const isLoaded = useAppSelector(
        isRequestLoadedSelector('findTracksCollections'),
    )
    const isLoading = useAppSelector(isFindLoadingSelector)
    const items = useAppSelector(itemsSelector)
    const page = useAppSelector(pageSelector)
    const sorting = useAppSelector(sortingSelector)
    const total = useAppSelector(itemsTotalSelector)

    const changePageHandler: ChangePageSign = (value) => {
        appDispatch(changePage(value))
    }

    const sortHandler: SortSign<TracksCollectionsSortings> = (
        name,
        direction,
    ) => {
        appDispatch(changeSorting({ name, direction }))
    }

    useEffect(() => {
        appDispatch(findTracksCollections())
    }, [sorting, page])

    return (
        <Box>
            <TableHeader
                items={tableHeaderItems}
                currentTableSorting={sorting}
                onSort={sortHandler}
            />

            {isLoading && (
                <SpinBox>
                    <Spin />
                </SpinBox>
            )}

            {isLoaded && (
                <>
                    <RowsBox>
                        {items.map((item) => (
                            <TracksCollectionsTableItem
                                key={item.id}
                                data={item}
                            />
                        ))}
                    </RowsBox>

                    <Pagination
                        onChange={changePageHandler}
                        page={page}
                        total={total}
                    />
                </>
            )}
        </Box>
    )
}

export default TracksCollectionsTable
