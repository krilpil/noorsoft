export interface UserAuthorizationData {
    email: string,
    password: string
}

export interface UserData extends UserAuthorizationData {
    authorization: boolean,
    errorAuthorization?: string | null,
    displayName?: string | null,
    phoneNumber?: string | null
}