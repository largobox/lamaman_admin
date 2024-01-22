import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCurrentUser } from 'hooks'
import { Props } from './ProtectedRoute.types'


const ProtectedRoute = (props: Props) => {
    const { children } = props
    const currentUser = useCurrentUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (!currentUser.isAuthorized) {
            navigate('/login')
        }
    }, [])

    if (!currentUser.isAuthorized) {
        return null
    }

    return children
}

export default ProtectedRoute
