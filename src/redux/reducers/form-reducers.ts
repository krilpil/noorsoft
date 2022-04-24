import {FORM_FETCH_LOGIN_FAILURE, FORM_FETCH_LOGIN_REQUEST, FORM_FETCH_LOGIN_SUCCESS} from "../constants/form";

const initialState = {
    request: false,
    user: {}
}

interface FormAction {
    type: string,
    payload?: any
}

const formReducer = (state = initialState, action: FormAction) => {
    switch (action.type) {
        case FORM_FETCH_LOGIN_REQUEST:
            return {
                ...state,
                request: true
            }
        case FORM_FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                request: false,
                user: action.payload
            }
        case FORM_FETCH_LOGIN_FAILURE:
            return {
                ...state,
                request: false,
                user: action.payload
            }
        default:
            return state
    }
}

export default formReducer