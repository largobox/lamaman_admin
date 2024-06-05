import { createSlice, createAction } from '@reduxjs/toolkit'
import Api from 'api'

import { AUTHORIZATION_LOGIN, LOCAL_STORAGE_AUTH_TOKEN } from 'consts'
import { getInitialCurrentUser, tokenToCurrentUser } from 'utils'
import {
    AuthorizationState,
    ChangeAuthorizationRequestStatusAction,
    AuthorizationLoginActionPayload,
    AuthorizationSignInAction,
} from 'store/authorization.types'
import { RootState } from 'store/store.types'


const initialState: AuthorizationState = {
    currentUser: getInitialCurrentUser(),
    formInitialValues: {
        login: '',
        password: '',
    },
    requests: {
        login: 'initial',
    },
}

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        changeRequestStatus(
            state,
            action: ChangeAuthorizationRequestStatusAction,
        ) {
            const { name, status } = action.payload

            state.requests[name] = status
        },

        signIn(state, action: AuthorizationSignInAction) {
            const token = action.payload

            Api.setToken(token)

            localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, token)

            state.currentUser = tokenToCurrentUser(action.payload)
        },

        signOut(state) {
            Api.setToken(null)

            localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN)

            state.currentUser = null
        },
    },
})

// Actions
export const { changeRequestStatus, signIn, signOut } =
    authorizationSlice.actions

// Custom actions
export const login =
    createAction<AuthorizationLoginActionPayload>(AUTHORIZATION_LOGIN)

// Selectors
export const formInitialValuesSelector = (state: RootState) => {
    return state.authorization.formInitialValues
}

export const isLoadingSelector = (state: RootState) => {
    return state.authorization.requests.login === 'loading'
}

export const isAuthorizedSelector = (state: RootState) => {
    if (state.authorization.currentUser === null) return false

    const isAuthorized =
        Date.now() < Number(state.authorization.currentUser.expiredAt)

    return isAuthorized
}

export const currentUserNameSelector = (state: RootState) => {
    return state.authorization.currentUser.login
}

export const currentUserRoleSelector = (state: RootState) => {
    return state.authorization.currentUser.role
}

export default authorizationSlice
