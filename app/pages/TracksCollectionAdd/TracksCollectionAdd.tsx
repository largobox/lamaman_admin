import React from 'react'
import { useNavigate } from 'react-router-dom'

import { RightPanelLayout, FormLayout, FormHeader } from 'layouts'
import { TracksCollectionForm } from 'unique'
import { Typography } from 'uikit'
import { useAppDispatch, useAppSelector } from 'hooks'
import {
    createTracksCollection,
    isCreateLoadingSelector,
} from 'store/slices/tracksCollections'
import { TracksCollectionFormValues } from 'store/tracksCollections.types'


const TracksCollectionAddPage = () => {
    const appDispatch = useAppDispatch()
    const navigate = useNavigate()
    const isLoading = useAppSelector(isCreateLoadingSelector)

    const closeHandler = () => {
        navigate('/tracks-collections')
    }

    const submitHandler = async (values: TracksCollectionFormValues) => {
        appDispatch(createTracksCollection({ data: values }))
    }

    return (
        <RightPanelLayout onClose={closeHandler}>
            <FormLayout>
                <FormHeader>
                    <Typography
                        variant='h1'
                        text='Добавить коллекцию'
                    />
                </FormHeader>

                <TracksCollectionForm
                    onSubmit={submitHandler}
                    isLoading={isLoading}
                />
            </FormLayout>
        </RightPanelLayout>
    )
}

export default TracksCollectionAddPage
