import React, { useEffect } from 'react'

import { TableHeader } from 'uikit'
import Box from './TracksCollectionsTable.styles'
import { useAppDispatch, useAppSelector, useRequestDebounce } from 'hooks'
import {
    changeCurrentSorting,
    currentSortingSelector,
} from 'store/slices/tracksCollectionsSlice'
import { addToast } from 'store/slices/toastsSlice'
import { SortHandlerSign } from 'common-types'
import { TracksCollectionsTableItem } from 'unique'
import { useLazyFindTracksCollectionsQuery } from 'api'
import { Spin } from 'app/components/uikit/Spinner/Spinner.styles'
import { SpinBox } from 'layouts'
import { getRequestErrorMessage } from 'app-utils'
import { tableHeaderItems } from './utils'


const TracksCollectionsTable = () => {
    const currentSorting = useAppSelector(currentSortingSelector)
    const appDispatch = useAppDispatch()
    const [
        findTracksCollections,
        { data, isFetching, isSuccess, isLoading, error, isError },
    ] = useLazyFindTracksCollectionsQuery()
    const isResultsVisible = useRequestDebounce(
        isSuccess && !isFetching && !isLoading,
    )
    const isPreloaderVisible = !isResultsVisible && !isError

    const sortHandler: SortHandlerSign = (name, direction) => {
        appDispatch(changeCurrentSorting({ name, direction }))
    }

    useEffect(() => {
        findTracksCollections({ sorting: currentSorting })
    }, [currentSorting])

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
