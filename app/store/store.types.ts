import store from './store'


export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

// toasts
type ToastType = 'error' | 'info' | 'warning'

export type Toast = {
    message: string
    toastType: ToastType
}

export type ToastsState = {
    items: Toast[]
}

// api
export type LoginArgs = {
    login: string
    password: string
}

export type LoginReturn = string
