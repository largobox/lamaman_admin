import React from 'react'

import Box, {
    BottomBox,
    DescriptionBox,
    IconBox,
    TopBox,
} from './ProfileCard.styles'
import { IconButton, Typography } from 'uikit'
import { LogoutIcon, OutlinedHumanIcon } from 'icons'
import { useAppDispatch, useAppSelector } from 'hooks'
import {
    currentUserNameSelector,
    currentUserRoleSelector,
    signOut,
} from 'store/slices/authorizationSlice'


const ProfileCard = () => {
    const appDispatch = useAppDispatch()
    const name = useAppSelector(currentUserNameSelector)
    const role = useAppSelector(currentUserRoleSelector)

    const logoutHandler = () => {
        appDispatch(signOut())
    }

    return (
        <Box>
            <TopBox>
                <IconBox>
                    <OutlinedHumanIcon
                        size='max'
                        color='base'
                    />
                </IconBox>

                <DescriptionBox>
                    <Typography text={name} />

                    <Typography
                        text={role}
                        isBold
                        isCapitalized
                    />
                </DescriptionBox>
            </TopBox>

            <BottomBox>
                <IconButton
                    color='danger'
                    onClick={logoutHandler}
                    Icon={LogoutIcon}
                />
            </BottomBox>
        </Box>
    )
}

export default ProfileCard
