import React, { useState, PropsWithChildren } from 'react'
import CurrentUserContext from './CurrentUserContext'
import {
    getInitialCurrentUser,
    tokenToCurrentUser,
    validateAuthToken,
} from './utils'
import { LOCAL_STORAGE_AUTH_TOKEN } from 'consts'


const rolesMap = new Map()

rolesMap.set('admin', 'администратор')
rolesMap.set('listener', 'слушатель')

const CurrentUserProvider = (props: PropsWithChildren) => {
    const { children } = props
    /*
        TS failed. Не показывает, что currentUser может быть null,
        при том что сигнатура функции getInitialCurrentUser указана
    */
    const [currentUser, setCurrentUser] = useState(getInitialCurrentUser())
    // ToDo
    const name = 'Данилов Сергей'
    const role = currentUser !== null ? rolesMap.get(currentUser.role) : ''
    const isAdmin = currentUser !== null ? currentUser.role === 'admin' : false
    const isAuthorized = currentUser !== null

    const signIn = (token: string) => {
        const isValid = validateAuthToken(token)

        if (!isValid) return

        localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, token)

        setCurrentUser(tokenToCurrentUser(token))
    }

    const signOut = () => {
        setCurrentUser(null)

        localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN)
    }

    const currentUserProviderValue = {
        name,
        role,
        isAdmin,
        isAuthorized,

        signIn,
        signOut,
    }

    return (
        <CurrentUserContext.Provider value={currentUserProviderValue}>
            {children}
        </CurrentUserContext.Provider>
    )
}

export default CurrentUserProvider
