import React from 'react'
import { useNavigate } from 'react-router-dom'

import { RightPanelLayout, FormLayout, FormHeader } from 'layouts'
import { TrackForm } from 'unique'
import { Typography } from 'uikit'
import { useAppDispatch, useAppSelector } from 'hooks'
import { createTrack, isCreateLoadingSelector } from 'store/slices/tracksSlice'
import { TrackFormValues } from 'store/tracks.types'


const TrackAddPage = () => {
    const appDispatch = useAppDispatch()
    const navigate = useNavigate()
    const isLoading = useAppSelector(isCreateLoadingSelector)

    const closeHandler = () => {
        navigate('/tracks')
    }

    const submitHandler = async (values: TrackFormValues) => {
        appDispatch(createTrack({ data: values }))
    }

    return (
        <RightPanelLayout onClose={closeHandler}>
            <FormLayout>
                <FormHeader>
                    <Typography
                        size='h1'
                        text='Добавить трэк'
                    />
                </FormHeader>

                <TrackForm
                    onSubmit={submitHandler}
                    isLoading={isLoading}
                />
            </FormLayout>
        </RightPanelLayout>
    )
}

export default TrackAddPage
