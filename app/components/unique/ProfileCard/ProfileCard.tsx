import React from 'react'

import Box, { BottomBox, DescriptionBox, TopBox } from './ProfileCard.styles'
import { IconButton, Typography } from 'uikit'
import { LogoutIcon, OutlinedHumanIcon, PencilIcon } from 'icons'
import { useCurrentUser } from 'hooks'


const ProfileCard = () => {
    const { name, role, signOut } = useCurrentUser()

    const editHandler = () => {
        console.log('Edit')
    }

    const logoutHandler = () => {
        signOut()
    }

    return (
        <Box>
            <TopBox>
                <OutlinedHumanIcon
                    size='big'
                    color='base'
                />

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
                    onClick={editHandler}
                    Icon={PencilIcon}
                />

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
