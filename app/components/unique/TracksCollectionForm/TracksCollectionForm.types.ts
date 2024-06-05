import { TracksCollectionFormValues } from 'store/tracksCollections.types'


export type Props = {
    isLoading: boolean
    onSubmit: (values: TracksCollectionFormValues) => void
}
