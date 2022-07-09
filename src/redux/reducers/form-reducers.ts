import {
  FORM_FETCH_LOGIN_FAILURE,
  FORM_FETCH_LOGIN_REQUEST,
  FORM_FETCH_LOGIN_SUCCESS,
  FORM_FETCH_FORGOT_FAILURE,
  FORM_FETCH_FORGOT_REQUEST,
  FORM_FETCH_FORGOT_SUCCESS,
  FORM_FETCH_SIGNUP_FAILURE,
  FORM_FETCH_SIGNUP_REQUEST,
  FORM_FETCH_SIGNUP_SUCCESS,
  FORM_FETCH_RESET_REQUEST,
  FORM_FETCH_RESET_SUCCESS,
  FORM_FETCH_RESET_FAILURE,
} from '../constants/form-constants';

const initialState = {
  request: false,
  error: false,
  user: {
    authorization: false,
  },
};

interface FormAction {
  type: string;
  payload?: any;
}

const formReducer = (state = initialState, action: FormAction) => {
  switch (action.type) {
    //User login
    case FORM_FETCH_LOGIN_REQUEST:
      return {
        ...state,
        request: true,
      };
    case FORM_FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        request: false,
        user: action.payload,
      };
    case FORM_FETCH_LOGIN_FAILURE:
      return {
        ...state,
        request: false,
        user: action.payload,
      };
    //User signup
    case FORM_FETCH_SIGNUP_REQUEST:
      return {
        ...state,
        request: true,
      };
    case FORM_FETCH_SIGNUP_SUCCESS:
      return {
        ...state,
        request: false,
        user: action.payload,
      };
    case FORM_FETCH_SIGNUP_FAILURE:
      return {
        ...state,
        request: false,
        user: action.payload,
      };
    //User forgot password
    case FORM_FETCH_FORGOT_REQUEST:
      return {
        ...state,
        request: true,
      };
    case FORM_FETCH_FORGOT_SUCCESS:
      return {
        ...state,
        request: false,
        user: action.payload,
      };
    case FORM_FETCH_FORGOT_FAILURE:
      return {
        ...state,
        request: false,
        user: action.payload,
      };
    //User reset password
    case FORM_FETCH_RESET_REQUEST:
      return {
        ...state,
        request: true,
      };
    case FORM_FETCH_RESET_SUCCESS:
      return {
        ...state,
        request: false,
        error: false,
      };
    case FORM_FETCH_RESET_FAILURE:
      return {
        ...state,
        request: false,
        error: true,
      };
    default:
      return state;
  }
};

export default formReducer;
