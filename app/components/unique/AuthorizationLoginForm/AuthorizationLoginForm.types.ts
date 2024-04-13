import { AuthorizationLoginFormValues } from 'store/store.types'


export type Props = {
    isLoading: boolean
    onSubmit: (values: AuthorizationLoginFormValues) => void

    initialValues?: AuthorizationLoginFormValues
}
