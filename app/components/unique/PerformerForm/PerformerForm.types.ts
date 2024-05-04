import { PerformerFormValues } from 'store/performers.types'


export type Props = {
    isLoading: boolean
    onSubmit: (values: PerformerFormValues) => void

    initialValues?: PerformerFormValues
}
