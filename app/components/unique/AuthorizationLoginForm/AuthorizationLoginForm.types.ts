import { AuthorizationLoginFormValues } from 'store/authorization.types'


export type Props = {
    isLoading: boolean
    onSubmit: (values: AuthorizationLoginFormValues) => void

    initialValues?: AuthorizationLoginFormValues
}
