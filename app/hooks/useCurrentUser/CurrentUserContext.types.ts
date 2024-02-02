export type CurrentUserContextValue = null | {
    isAuthorized: boolean
    name: string
    role: string

    signIn: (token: string) => void
    signOut: () => void
}
