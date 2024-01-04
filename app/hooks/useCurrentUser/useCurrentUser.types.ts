export type CurrentUser = null | {
    id: string
    role: string
    expiredAt: string
}

export type GetInitialCurrentUserSignature = () => CurrentUser
export type TokenToCurrentUserSignature = (token: string) => CurrentUser
export type ValidateAuthTokenSignature = (token: string) => boolean
