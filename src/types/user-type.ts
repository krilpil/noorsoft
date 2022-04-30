export interface UserFormData {
    email: string,
    password: string
}

export interface UserData {
    authorization: boolean,
    email?: string | null,
    displayName?: string | null,
    phoneNumber?: string | null
}
