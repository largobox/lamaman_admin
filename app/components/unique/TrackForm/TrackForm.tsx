import React, { useEffect } from 'react'

import { Button, Form, Input, Select } from 'uikit'
import { trackFormSchema } from 'schemas'
import { Props } from './TrackForm.types'
import { useAppDispatch, useAppSelector } from 'hooks'
import { resetForm } from 'store/slices/tracksSlice'
import {
    findSelectableTracksCollections,
    isFindSelectableTracksCollectionsLoadingSelector,
    selectableTracksCollectionsItemsSelector,
} from 'store/slices/selectablesSlice'


const TrackForm = (props: Props) => {
    const { initialValues, isLoading, onSubmit } = props
    const appDispatch = useAppDispatch()
    const isFindSelectableTracksCollectionsLoading = useAppSelector(
        isFindSelectableTracksCollectionsLoadingSelector,
    )
    const selectableTracksCollectionsItems = useAppSelector(
        selectableTracksCollectionsItemsSelector,
    )

    useEffect(() => {
        appDispatch(findSelectableTracksCollections())

        return () => {
            appDispatch(resetForm())
        }
    }, [])

    return (
        <Form
            initialValues={initialValues}
            schema={trackFormSchema}
            onSubmit={onSubmit}
            isLoading={isLoading}
        >
            <Input
                label='Наименование'
                name='name'
            />

            <Select
                isLoading={isFindSelectableTracksCollectionsLoading}
                label='Коллекция'
                name='tracksCollectionId'
                items={selectableTracksCollectionsItems}
            />

            <Button
                fullWidth
                label='Отправить'
            />
        </Form>
    )
}

export default TrackForm
