import React, { useEffect } from 'react'

import { Button, Form, Input, InputFile, InputSelect } from 'uikit'
import { trackFormSchema } from 'schemas'
import { Props } from './TrackForm.types'
import { useAppDispatch, useAppSelector } from 'hooks'
import {
    formInitialMetaDataSelector,
    formInitialValuesSelector,
    resetForm,
} from 'store/slices/tracksSlice'
import {
    findSelectablePerformers,
    findSelectableTracksCollections,
    isFindSelectablePerformersLoadingSelector,
    isFindSelectableTracksCollectionsLoadingSelector,
    selectablePerformersItemsSelector,
    selectableTracksCollectionsItemsSelector,
} from 'store/slices/selectablesSlice'


const TrackForm = (props: Props) => {
    const { isLoading, onSubmit } = props
    const appDispatch = useAppDispatch()
    const initialValues = useAppSelector(formInitialValuesSelector)
    const initialMetaData = useAppSelector(formInitialMetaDataSelector)

    const isPerformersLoading = useAppSelector(
        isFindSelectablePerformersLoadingSelector,
    )
    const isTracksCollectionsLoading = useAppSelector(
        isFindSelectableTracksCollectionsLoadingSelector,
    )
    const tracksCollectionsItems = useAppSelector(
        selectableTracksCollectionsItemsSelector,
    )
    const performersItems = useAppSelector(selectablePerformersItemsSelector)

    useEffect(() => {
        appDispatch(findSelectableTracksCollections())
        appDispatch(findSelectablePerformers())

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

            <InputSelect
                isLoading={isPerformersLoading}
                initialMetaData={initialMetaData.performer}
                label='Исполнитель'
                name='performerId'
                items={performersItems}
            />

            <InputSelect
                isLoading={isTracksCollectionsLoading}
                initialMetaData={initialMetaData.tracksCollections}
                label='Коллекция'
                name='tracksCollectionId'
                items={tracksCollectionsItems}
            />

            <InputFile
                initialMetaData={initialMetaData.file}
                label='Файл'
                name='file'
            />

            <Button
                fullWidth
                label='Отправить'
            />
        </Form>
    )
}

export default TrackForm
