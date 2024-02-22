import React, { useState } from 'react'

import Box from './TableSorting.styles'
import { IconButton, Typography } from 'uikit'
import { Props, SortingDirection } from './TableSorting.types'
import { getColorBySortingDirection, getIconBySortingDirection } from './utils'


const TableSorting = (props: Props) => {
    const [sortingDirection, setSortingDirection] =
        useState<SortingDirection>(null)
    const { name, label, onChange } = props
    const Icon = getIconBySortingDirection(sortingDirection)
    const color = getColorBySortingDirection(sortingDirection)

    const changeHadler = () => {
        if (sortingDirection === null) {
            onChange(name, 'asc')
            setSortingDirection('asc')
        }

        if (sortingDirection === 'asc') {
            onChange(name, 'desc')
            setSortingDirection('desc')
        }

        if (sortingDirection === 'desc') {
            onChange(name, null)
            setSortingDirection(null)
        }
    }

    return (
        <Box>
            <Typography
                text={label}
                size='h2'
            />

            <IconButton
                Icon={Icon}
                onClick={changeHadler}
                size='small'
                color={color}
            />
        </Box>
    )
}

export default TableSorting
