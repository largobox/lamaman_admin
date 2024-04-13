import React from 'react'

import Box, { LabelCont } from './Pagination.styles'
import { Props } from './Pagination.types'
import { IconButton, Typography } from 'uikit'
import { OutlinedChevronLeftIcon, OutlinedChevronRightIcon } from 'icons'
import { PAGINATION_LIMIT } from 'consts'


const Pagination = (props: Props) => {
    const { page, onChange, total } = props
    const isPrevControlDisabled = page === 1
    const maxPage = Math.ceil(total / PAGINATION_LIMIT)
    const isNextControlDisabled = page === maxPage

    const prevClickHandler = () => {
        onChange(page - 1)
    }

    const nextClickHandler = () => {
        onChange(page + 1)
    }

    return (
        <Box>
            <IconButton
                isDisabled={isPrevControlDisabled}
                onClick={prevClickHandler}
                Icon={OutlinedChevronLeftIcon}
                color='neutral'
            />

            <LabelCont>
                <Typography
                    text={page}
                    size='h2'
                />
            </LabelCont>

            <IconButton
                isDisabled={isNextControlDisabled}
                color='neutral'
                onClick={nextClickHandler}
                Icon={OutlinedChevronRightIcon}
            />
        </Box>
    )
}

export default Pagination
