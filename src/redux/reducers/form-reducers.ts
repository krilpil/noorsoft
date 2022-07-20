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
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAILURE,
} from '../constants/form-constants';

const initialState = {
  isLoading: false,
  isError: false,
  user: {
    isAuth: false,
    email: null,
    token: null,
    id: null,
  },
};

interface FormAction {
  type: string;
  payload?: any;
}

const formReducer = (state = initialState, action: FormAction) => {
  switch (action.type) {
    // User login
    case FORM_FETCH_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FORM_FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case FORM_FETCH_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    // User signup
    case FORM_FETCH_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FORM_FETCH_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case FORM_FETCH_SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    // User forgot password
    case FORM_FETCH_FORGOT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FORM_FETCH_FORGOT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case FORM_FETCH_FORGOT_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    // User reset password
    case FORM_FETCH_RESET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FORM_FETCH_RESET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case FORM_FETCH_RESET_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case CHECK_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: {
          ...state.user,
          isAuth: true,
        },
      };
    case CHECK_AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: {
          ...state.user,
          isAuth: false,
          email: null,
          token: null,
          id: null,
        },
      };
    default:
      return state;
  }
};

export default formReducer;
