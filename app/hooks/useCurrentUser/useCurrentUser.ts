import React from 'react'

import CurrentUserContext from './CurrentUserContext'


const useCurrentUser = () => {
    const currentUser = React.useContext(CurrentUserContext)

    return currentUser
}

export default useCurrentUser
