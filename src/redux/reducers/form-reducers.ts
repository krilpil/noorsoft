import {
  FORM_FETCH_LOGIN_FAILURE,
  FORM_FETCH_LOGIN_REQUEST,
  FORM_FETCH_LOGIN_SUCCESS,
  FORM_FETCH_SIGNUP_FAILURE,
  FORM_FETCH_SIGNUP_REQUEST,
  FORM_FETCH_SIGNUP_SUCCESS,
} from '../constants/form-constants';

const initialState = {
  request: false,
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
    default:
      return state;
  }
};

export default formReducer;
