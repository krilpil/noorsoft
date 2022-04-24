import {UserAuthorizationData, UserData} from "../types/user-type";

export const userAuthorization =
    async (userAuthorizationData: UserAuthorizationData): Promise<UserData> => {

        // Server emulator
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Server error response
        // return {
        //     authorization: false,
        //     error: 'Server response with an error',
        //     email: userAuthorizationData.email,
        //     password: userAuthorizationData.password,
        // }

        // Server success response
        return {
            authorization: true,
            email: userAuthorizationData.email,
            password: userAuthorizationData.password,
            username: 'username_from_the_server',
            telephone: 'telephone_from_the_server'
        }
    }