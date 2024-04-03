import React, { useEffect } from 'react'

import { TableHeader, Pagination } from 'uikit'
import Box from './TracksCollectionsTable.styles'
import { useAppDispatch, useAppSelector, useRequestDebounce } from 'hooks'
import {
    changeCurrentSorting,
    changePage,
    currentSortingSelector,
    pageSelector,
} from 'store/slices/tracksCollectionsSlice'
import { addToast } from 'store/slices/toastsSlice'
import { SortSign, ChangePageSign } from 'common-types'
import { TracksCollectionsTableItem } from 'unique'
import { useLazyFindTracksCollectionsQuery } from 'api'
import { Spin } from 'app/components/uikit/Spinner/Spinner.styles'
import { SpinBox, RowsBox } from 'layouts'
import { getRequestErrorMessage } from 'app-utils'
import { tableHeaderItems } from './utils'


const TracksCollectionsTable = () => {
    const currentSorting = useAppSelector(currentSortingSelector)
    const page = useAppSelector(pageSelector)
    const appDispatch = useAppDispatch()
    const [
        findTracksCollections,
        { data, isFetching, isSuccess, isLoading, error, isError },
    ] = useLazyFindTracksCollectionsQuery()
    const isResultsVisible = useRequestDebounce(
        isSuccess && !isFetching && !isLoading,
    )
    const isPreloaderVisible = !isResultsVisible && !isError

    const sortHandler: SortSign = (name, direction) => {
        appDispatch(changeCurrentSorting({ name, direction }))
    }

    const changePageHandler: ChangePageSign = (value) => {
        appDispatch(changePage(value))
    }

    useEffect(() => {
        findTracksCollections({
            sorting: currentSorting,
            page,
        })
    }, [currentSorting, page])

    useEffect(() => {
        const errorMessage = getRequestErrorMessage({ error })

        if (errorMessage !== null) {
            appDispatch(addToast({ message: errorMessage, toastType: 'error' }))

            return
        }
    }, [error])

    return (
        <Box>
            <TableHeader
                items={tableHeaderItems}
                currentTableSorting={currentSorting}
                onSort={sortHandler}
            />

            {isPreloaderVisible && (
                <SpinBox>
                    <Spin />
                </SpinBox>
            )}

            <RowsBox>
                {isResultsVisible &&
                    data.items.map((item) => (
                        <TracksCollectionsTableItem
                            key={item.id}
                            data={item}
                        />
                    ))}
            </RowsBox>

            {isResultsVisible && (
                <Pagination
                    onChange={changePageHandler}
                    page={page}
                    total={data.meta.total}
                />
            )}
        </Box>
    )
}

export default TracksCollectionsTable
