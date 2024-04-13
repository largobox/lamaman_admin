export type CurrentUser = null | {
    expiredAt: string
    id: string
    login: string
    role: string
}

export type GetInitialCurrentUserSignature = () => CurrentUser
export type TokenToCurrentUserSignature = (token: string) => CurrentUser
export type ValidateAuthTokenSignature = (token: string) => boolean
