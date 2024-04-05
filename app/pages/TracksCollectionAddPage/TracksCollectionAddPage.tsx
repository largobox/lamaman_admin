import React from 'react'
import { useNavigate } from 'react-router-dom'

import { RightPanelLayout, FormLayout, FormHeader } from 'layouts'
import { TracksCollectionForm } from 'unique'
import { Typography } from 'uikit'
import logger from 'logger'
import { useCreateTracksCollectionMutation } from 'api'
import { useAppDispatch } from 'hooks'
import { getRequestErrorMessage } from 'app-utils'
import { addToast } from 'store/slices/toastsSlice'
import { TracksCollectionFormValues } from 'store/store.types'


const TracksCollectionAddPage = () => {
    const [сreate, { isLoading }] = useCreateTracksCollectionMutation()
    const appDispatch = useAppDispatch()
    const navigate = useNavigate()

    const closeHandler = () => {
        navigate('/tracks-collections')
    }

    const submitHandler = async (values: TracksCollectionFormValues) => {
        try {
            const result = await сreate(values)
            const errorMessage = getRequestErrorMessage(result)

            if (errorMessage !== null) {
                appDispatch(
                    addToast({ message: errorMessage, toastType: 'error' }),
                )

                return
            }

            if ('data' in result && result.data.id) {
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
