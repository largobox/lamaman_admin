import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { RightPanelLayout, FormLayout, FormHeader } from 'layouts'
import { TracksCollectionForm } from 'unique'
import { Typography } from 'uikit'
import { useAppDispatch, useAppSelector } from 'hooks'
import {
    formValuesSelector,
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
    const initialValues = useAppSelector(formValuesSelector)

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
                        size='h1'
                        text='Редактировать коллекцию'
                    />
                </FormHeader>

                <TracksCollectionForm
                    initialValues={initialValues}
                    isLoading={isLoading}
                    onSubmit={submitHandler}
                />
            </FormLayout>
        </RightPanelLayout>
    )
}

export default TracksCollectionEditPage