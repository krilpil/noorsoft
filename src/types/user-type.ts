export interface UserAuthorizationData {
    email: string,
    password: string
}

export interface UserData extends UserAuthorizationData {
    authorization: boolean,
    displayName?: string | null,
    phoneNumber?: string | null
}