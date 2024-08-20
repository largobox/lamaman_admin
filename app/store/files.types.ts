import { PayloadAction } from '@reduxjs/toolkit'


type FileRequestStatus = 'loading' | 'loaded' | 'error'

export type ChangeFileRequestStatusAction = PayloadAction<{
    id: string
    status: FileRequestStatus
}>

export type FileItem = {
    status: FileRequestStatus
    id: string
}

export type FilesState = {
    items: FileItem[]
}
