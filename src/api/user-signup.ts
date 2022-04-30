import {UserData, UserFormData} from "../types/user-type";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../config/firebase";

const initialization = initializeApp(firebaseConfig)

export const userSignup = async (userSignupData: UserFormData) => {
    const auth = getAuth(initialization)

    const signupResponse = ({email, authorization, displayName, phoneNumber}: UserData): UserData => {
        return {
            authorization: authorization,
            email: email,
            displayName: displayName,
            phoneNumber: phoneNumber
        }
    }

    return createUserWithEmailAndPassword(auth, userSignupData.email, userSignupData.password)
        .then((userCredential) => {
            const {user} = userCredential

            return signupResponse({
                authorization: true,
                email: user.email,
                displayName: user.displayName,
                phoneNumber: user.phoneNumber
            })
        })
        .catch((error) => {
            console.log(error.message)

            return signupResponse({
                authorization: false
            })
        })
}