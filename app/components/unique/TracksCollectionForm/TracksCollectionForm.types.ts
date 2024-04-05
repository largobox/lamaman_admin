import { TracksCollectionFormValues } from 'store/store.types'


export type Props = {
    isLoading: boolean
    onSubmit: (values: TracksCollectionFormValues) => void

    initialValues?: TracksCollectionFormValues
}
