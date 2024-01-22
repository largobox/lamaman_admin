import React from 'react'
import { CurrentUserContextValue } from './CurrentUserContext.types'


const AuthContext = React.createContext<CurrentUserContextValue>(null)

export default AuthContext
