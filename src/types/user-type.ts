export interface UserAuthorizationData {
    email: string,
    password: string
}

export interface UserData extends UserAuthorizationData {
    authorization: boolean,
    error?: string,
    username?: string,
    telephone?: string
}