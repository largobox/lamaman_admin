import { TrackFormValues } from 'store/tracks.types'


export type Props = {
    isLoading: boolean
    onSubmit: (values: TrackFormValues) => void

    initialValues?: TrackFormValues
}
