import React from 'react'

import Box, { TableHeaderItem } from './TableHeader.styles'
import { IconButton, Typography } from 'uikit'
import { Props } from './TableHeader.types'
import { getColorBySortingDirection, getIconBySortingDirection } from './utils'


const TableHeader = (props: Props) => {
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
                <TableHeaderItem key={item.name}>
                    <Typography
                        text={item.label}
                        size='h2'
                        color='light'
                    />

                    {item.isSortable && (
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
                    )}
                </TableHeaderItem>
            ))}
        </Box>
    )
}

export default TableHeader
