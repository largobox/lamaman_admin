import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { RightPanelLayout, FormLayout, FormHeader } from 'layouts'
import { TrackForm } from 'unique'
import { Typography } from 'uikit'
import { useAppDispatch, useAppSelector } from 'hooks'
import {
    getTrack,
    isEditLoadingSelector,
    updateTrack,
} from 'store/slices/tracksSlice'
import { TrackFormValues } from 'store/tracks.types'


const TrackEditPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const appDispatch = useAppDispatch()
    const isLoading = useAppSelector(isEditLoadingSelector)

    useEffect(() => {
        appDispatch(getTrack(params.id))
    }, [])

    const closeHandler = () => {
        navigate('/tracks')
    }

    const submitHandler = async (values: TrackFormValues) => {
        appDispatch(updateTrack({ id: params.id, data: values }))
    }

    return (
        <RightPanelLayout onClose={closeHandler}>
            <FormLayout>
                <FormHeader>
                    <Typography
                        variant='h1'
                        text='Редактировать трэк'
                    />
                </FormHeader>

                <TrackForm
                    isLoading={isLoading}
                    onSubmit={submitHandler}
                />
            </FormLayout>
        </RightPanelLayout>
    )
}

export default TrackEditPage
