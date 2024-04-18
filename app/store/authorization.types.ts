import { PayloadAction } from '@reduxjs/toolkit'
import { RequestStatus } from './store.types'
import { CurrentUser } from 'system/utils/utils.types'


export type AuthorizationLoginFormValues = {
    login: string
    password: string
}

export type AuthorizationLoginActionPayload = {
    data: AuthorizationLoginFormValues
}

export type AuthorizationLoginAction =
    PayloadAction<AuthorizationLoginActionPayload>

export type AuthorizationSignInAction = PayloadAction<string>

type AuthorizationRequests = {
    login: RequestStatus
}

type AuthorizationRequestNames = keyof AuthorizationRequests

export type ChangeAuthorizationRequestStatusAction = PayloadAction<{
    name: AuthorizationRequestNames
    status: RequestStatus
}>

export type AuthorizationState = {
    currentUser: null | CurrentUser
    formValues: AuthorizationLoginFormValues
    requests: AuthorizationRequests
}
