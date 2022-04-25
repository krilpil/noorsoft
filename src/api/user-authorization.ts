import {UserAuthorizationData, UserData} from "../types/user-type";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../config/firebase";

const initialization = initializeApp(firebaseConfig)

export const userAuthorization =
    async (userAuthorizationData: UserAuthorizationData): Promise<UserData> => {

        const auth = getAuth(initialization)

        const authorizationResponse = ({authorization, email, password, phoneNumber, displayName}:
                                           UserData): UserData => {

            return {
                authorization: authorization,
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
            .catch(() => {
                return authorizationResponse(
                    {
                        authorization: false,
                        email: '',
                        password: '',
                    }
                )
            })
    }