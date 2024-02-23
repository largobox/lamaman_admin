import React from 'react'

import Box, { TableSorting } from './TableSortings.styles'
import { IconButton, Typography } from 'uikit'
import { Props } from './TableSortings.types'
import { getColorBySortingDirection, getIconBySortingDirection } from './utils'


const TableSortings = (props: Props) => {
    const { items, onSort, currentTableSorting } = props

    const clickHandler = (sortingName: string) => () => {
        if (currentTableSorting.name !== sortingName) {
            onSort(sortingName, 'asc')

            return
        }

        if (currentTableSorting.direction === null) {
            onSort(sortingName, 'asc')

            return
        }

        if (currentTableSorting.direction === 'asc') {
            onSort(sortingName, 'desc')

            return
        }

        if (currentTableSorting.direction === 'desc') {
            onSort(sortingName, null)

            return
        }
    }

    return (
        <Box>
            {items.map((item) => (
                <TableSorting key={item.name}>
                    <Typography
                        text={item.label}
                        size='h2'
                        color='light'
                    />

                    <IconButton
                        Icon={getIconBySortingDirection(
                            item.name,
                            currentTableSorting,
                        )}
                        onClick={clickHandler(item.name)}
                        size='small'
                        color={getColorBySortingDirection(
                            item.name,
                            currentTableSorting,
                        )}
                    />
                </TableSorting>
            ))}
        </Box>
    )
}

export default TableSortings
