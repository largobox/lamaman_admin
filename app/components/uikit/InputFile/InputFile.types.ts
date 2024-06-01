import { FileMetaData } from 'common-types'


export type Props = {
    label: string
    name: string

    initialValue?: null | FileMetaData
    error?: string
    onChange?: (value: File) => void
}
