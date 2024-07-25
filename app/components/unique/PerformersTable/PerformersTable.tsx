import React, { useEffect } from 'react'

import { TableHeader, Pagination, Typography } from 'uikit'
import Box from './PerformersTable.styles'
import { useAppDispatch, useAppSelector } from 'hooks'
import {
    changeSorting,
    changePage,
    sortingSelector,
    findPerformers,
    isFindLoadingSelector,
    isItemsLoadedSelector,
    itemsSelector,
    itemsTotalSelector,
    pageSelector,
} from 'store/slices/performers'
import { SortSign, ChangePageSign } from 'common-types'
import { PerformersTableItem } from 'unique'
import { Spin } from 'app/components/uikit/Spinner/Spinner.styles'
import { SpinBox, RowsBox } from 'layouts'
import { tableHeaderItems } from './utils'
import { PerformersSortings } from 'store/performers.types'


const PerformersTable = () => {
    const appDispatch = useAppDispatch()
    const isLoaded = useAppSelector(isItemsLoadedSelector)
    const isLoading = useAppSelector(isFindLoadingSelector)
    const items = useAppSelector(itemsSelector)
    const page = useAppSelector(pageSelector)
    const sorting = useAppSelector(sortingSelector)
    const total = useAppSelector(itemsTotalSelector)
    const isPaginationVisible = isLoaded && total > 0
    const isEmpty = isLoaded && total === 0

    const changePageHandler: ChangePageSign = (value) => {
        appDispatch(changePage(value))
    }

    const sortHandler: SortSign<PerformersSortings> = (name, direction) => {
        appDispatch(changeSorting({ name, direction }))
    }

    useEffect(() => {
        appDispatch(findPerformers())
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

            {isEmpty && (
                <Typography
                    text='Исполнителей не найдено'
                    align='center'
                />
            )}

            {isLoaded && (
                <RowsBox>
                    {items.map((item) => (
                        <PerformersTableItem
                            key={item.id}
                            data={item}
                        />
                    ))}
                </RowsBox>
            )}

            {isPaginationVisible && (
                <Pagination
                    onChange={changePageHandler}
                    page={page}
                    total={total}
                />
            )}
        </Box>
    )
}

export default PerformersTable
