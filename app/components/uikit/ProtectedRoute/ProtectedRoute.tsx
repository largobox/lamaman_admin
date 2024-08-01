import { useEffect, PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from 'hooks'
import { isAuthorizedSelector } from 'store/slices/authorization'


const ProtectedRoute = (props: PropsWithChildren) => {
    const { children } = props
    const navigate = useNavigate()
    const isAuthorized = useAppSelector(isAuthorizedSelector)

    useEffect(() => {
        if (!isAuthorized) {
            navigate('authorization/login')
        }
    }, [isAuthorized])

    if (!isAuthorized) {
        return null
    }

    return children
}

export default ProtectedRoute
