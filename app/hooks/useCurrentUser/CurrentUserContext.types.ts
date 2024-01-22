export type CurrentUserContextValue = null | {
    isAuthorized: boolean

    signIn: (token: string) => void
    signOut: () => void
}
