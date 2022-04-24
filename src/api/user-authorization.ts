import {UserAuthorizationData, UserData} from "../types/user-type";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../constants/firebase";

const initialization = initializeApp(firebaseConfig)

const errorMessageSwitch = (errorAuthorization: string | null | undefined) => {
    switch (errorAuthorization) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
            return 'Invalid email or password.'
        case undefined:
            return null
        default:
            return 'Whoops, something went wrong...'
    }
}

export const userAuthorization =
    async (userAuthorizationData: UserAuthorizationData): Promise<UserData> => {

        const auth = getAuth(initialization)

        const authorizationResponse = ({authorization, email, password, errorAuthorization, phoneNumber, displayName}:
                                           UserData): UserData => {

            return {
                authorization: authorization,
                errorAuthorization: errorMessageSwitch(errorAuthorization),
                email: email,
                password: password,
                displayName: displayName,
                phoneNumber: phoneNumber,
            }
        }

        return signInWithEmailAndPassword(auth, userAuthorizationData.email, userAuthorizationData.password)
            .then((userCredential) => {
                const {user} = userCredential

                return authorizationResponse(
                    {
                        authorization: true,
                        phoneNumber: user.phoneNumber,
                        email: userAuthorizationData.email,
                        password: userAuthorizationData.password,
                        displayName: user.displayName
                    }
                )
            })
            .catch((error) => {
                return authorizationResponse(
                    {
                        authorization: false,
                        errorAuthorization: error.code,
                        email: '',
                        password: '',
                    }
                )
            })
    }