import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { RightPanelLayout, FormLayout, FormHeader } from 'layouts'
import { PerformerForm } from 'unique'
import { Typography } from 'uikit'
import { useAppDispatch, useAppSelector } from 'hooks'
import {
    formValuesSelector,
    getPerformer,
    isEditLoadingSelector,
    updatePerformer,
} from 'store/slices/performersSlice'
import { PerformerFormValues } from 'store/performers.types'


const PerformerEditPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const appDispatch = useAppDispatch()
    const isLoading = useAppSelector(isEditLoadingSelector)
    const initialValues = useAppSelector(formValuesSelector)

    useEffect(() => {
        appDispatch(getPerformer(params.id))
    }, [])

    const closeHandler = () => {
        navigate('/performers')
    }

    const submitHandler = async (values: PerformerFormValues) => {
        appDispatch(updatePerformer({ id: params.id, data: values }))
    }

    return (
        <RightPanelLayout onClose={closeHandler}>
            <FormLayout>
                <FormHeader>
                    <Typography
                        size='h1'
                        text='Редактировать исполнителя'
                    />
                </FormHeader>

                <PerformerForm
                    initialValues={initialValues}
                    isLoading={isLoading}
                    onSubmit={submitHandler}
                />
            </FormLayout>
        </RightPanelLayout>
    )
}

export default PerformerEditPage
