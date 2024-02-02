import { useEffect, PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCurrentUser } from 'hooks'


const ProtectedRoute = (props: PropsWithChildren) => {
    const { children } = props
    const currentUser = useCurrentUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (!currentUser.isAuthorized) {
            navigate('/login')
        }
    }, [currentUser.isAuthorized])

    if (!currentUser.isAuthorized) {
        return null
    }

    return children
}

export default ProtectedRoute
