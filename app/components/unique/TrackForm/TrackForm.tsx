import React, { useEffect } from 'react'

import { Button, Form, Input, InputFile, InputSelect } from 'uikit'
import { trackFormSchema } from 'schemas'
import { Props } from './TrackForm.types'
import { useAppDispatch, useAppSelector } from 'hooks'
import { resetForm } from 'store/slices/tracksSlice'
import {
    findSelectablePerformers,
    findSelectableTracksCollections,
    isFindSelectablePerformersLoadedSelector,
    isFindSelectablePerformersLoadingSelector,
    isFindSelectableTracksCollectionsLoadedSelector,
    isFindSelectableTracksCollectionsLoadingSelector,
    selectablePerformersItemsSelector,
    selectableTracksCollectionsItemsSelector,
} from 'store/slices/selectablesSlice'


const TrackForm = (props: Props) => {
    const { initialValues, isLoading, onSubmit } = props
    const appDispatch = useAppDispatch()
    const isPerformersLoaded = useAppSelector(
        isFindSelectablePerformersLoadedSelector,
    )
    const isPerformersLoading = useAppSelector(
        isFindSelectablePerformersLoadingSelector,
    )
    const isTracksCollectionsLoaded = useAppSelector(
        isFindSelectableTracksCollectionsLoadedSelector,
    )
    const isTracksCollectionsLoading = useAppSelector(
        isFindSelectableTracksCollectionsLoadingSelector,
    )
    const tracksCollectionsItems = useAppSelector(
        selectableTracksCollectionsItemsSelector,
    )
    const performersItems = useAppSelector(selectablePerformersItemsSelector)

    useEffect(() => {
        if (!isTracksCollectionsLoaded) {
            appDispatch(findSelectableTracksCollections())
        }

        if (!isPerformersLoaded) {
            appDispatch(findSelectablePerformers())
        }

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
                label='Исполнитель'
                name='performerId'
                items={performersItems}
            />

            <InputSelect
                isLoading={isTracksCollectionsLoading}
                label='Коллекция'
                name='tracksCollectionId'
                items={tracksCollectionsItems}
            />

            <InputFile
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
