import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import logger from 'logger'
import { RightPanelLayout, FormLayout, FormHeader } from 'layouts'
import { TracksCollectionForm } from 'unique'
import { Typography } from 'uikit'
import {
    useLazyGetTracksCollectionQuery,
    useUpdateTracksCollectionMutation,
} from 'api'
import { getRequestErrorMessage } from 'app-utils'
import { useAppDispatch } from 'hooks'
import { addToast } from 'store/slices/toastsSlice'
import { TracksCollectionFormValues } from 'store/store.types'


const TracksCollectionEditPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const appDispatch = useAppDispatch()
    const [
        getTracksCollections,
        { data, error: getError, isLoading: isGetLoading },
    ] = useLazyGetTracksCollectionQuery()
    const [update, { isLoading: isUpdateLoading, error: updateError }] =
        useUpdateTracksCollectionMutation()
    const isLoading = isUpdateLoading || isGetLoading
    const error = getError || updateError

    useEffect(() => {
        getTracksCollections(params.id)
    }, [])

    useEffect(() => {
        const errorMessage = getRequestErrorMessage({ error })

        if (errorMessage !== null) {
            appDispatch(addToast({ message: errorMessage, toastType: 'error' }))

            return
        }
    }, [error])

    const closeHandler = () => {
        navigate('/tracks-collections')
    }

    const submitHandler = async (values: TracksCollectionFormValues) => {
        try {
            const result = await update({ id: params.id, data: values })
            const errorMessage = getRequestErrorMessage(result)

            if (errorMessage !== null) {
                appDispatch(
                    addToast({ message: errorMessage, toastType: 'error' }),
                )

                return
            }

            if ('data' in result && result.data === true) {
                navigate('/')
            }
        } catch (err) {
            logger.error(err)
        }
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
                    initialValues={data}
                    isLoading={isLoading}
                    onSubmit={submitHandler}
                />
            </FormLayout>
        </RightPanelLayout>
    )
}

export default TracksCollectionEditPage
