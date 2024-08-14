import { PayloadAction } from '@reduxjs/toolkit'


type FileRequestStatus = 'loading' | 'loaded' | 'error'

export type DonwloadFileSuccessAction = PayloadAction<{
    id: string
    data: Blob
}>

export type ChangeFileRequestStatusAction = PayloadAction<{
    id: string
    status: FileRequestStatus
}>

export type FileItem = {
    status: FileRequestStatus
    id: string
    data: Blob | null
}

export type FilesState = {
    items: FileItem[]
}
