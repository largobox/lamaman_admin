import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { RightPanelLayout, FormLayout, FormHeader } from 'layouts'
import { TracksCollectionForm } from 'unique'
import { Typography } from 'uikit'
import { useAppDispatch, useAppSelector } from 'hooks'
import {
    getTracksCollection,
    isEditLoadingSelector,
    updateTracksCollection,
} from 'store/slices/tracksCollectionsSlice'
import { TracksCollectionFormValues } from 'store/tracksCollections.types'


const TracksCollectionEditPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const appDispatch = useAppDispatch()
    const isLoading = useAppSelector(isEditLoadingSelector)

    useEffect(() => {
        appDispatch(getTracksCollection(params.id))
    }, [])

    const closeHandler = () => {
        navigate('/tracks-collections')
    }

    const submitHandler = async (values: TracksCollectionFormValues) => {
        appDispatch(updateTracksCollection({ id: params.id, data: values }))
    }

    return (
        <RightPanelLayout onClose={closeHandler}>
            <FormLayout>
                <FormHeader>
                    <Typography
                        variant='h1'
                        text='Редактировать коллекцию'
                    />
                </FormHeader>

                <TracksCollectionForm
                    isLoading={isLoading}
                    onSubmit={submitHandler}
                />
            </FormLayout>
        </RightPanelLayout>
    )
}

export default TracksCollectionEditPage
