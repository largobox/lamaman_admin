import React from 'react'
import { useNavigate } from 'react-router-dom'

import { RightPanelLayout, FormLayout, FormHeader } from 'layouts'
import { PerformerForm } from 'unique'
import { Typography } from 'uikit'
import { useAppDispatch, useAppSelector } from 'hooks'
import {
    createPerformer,
    formValuesSelector,
    isCreateLoadingSelector,
} from 'store/slices/performersSlice'
import { PerformerFormValues } from 'store/performers.types'


const PerformerAddPage = () => {
    const appDispatch = useAppDispatch()
    const navigate = useNavigate()
    const isLoading = useAppSelector(isCreateLoadingSelector)
    const initialValues = useAppSelector(formValuesSelector)

    const closeHandler = () => {
        navigate('/performers')
    }

    const submitHandler = async (values: PerformerFormValues) => {
        appDispatch(createPerformer({ data: values }))
    }

    return (
        <RightPanelLayout onClose={closeHandler}>
            <FormLayout>
                <FormHeader>
                    <Typography
                        size='h1'
                        text='Добавить исполнителя'
                    />
                </FormHeader>

                <PerformerForm
                    initialValues={initialValues}
                    onSubmit={submitHandler}
                    isLoading={isLoading}
                />
            </FormLayout>
        </RightPanelLayout>
    )
}

export default PerformerAddPage
