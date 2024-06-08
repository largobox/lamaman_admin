import { FileMetaData } from 'common-types'


export type Props = {
    label: string
    name: string
    initialMetaData: FileMetaData | null

    error?: string
    onChange?: (value: File) => void
}
