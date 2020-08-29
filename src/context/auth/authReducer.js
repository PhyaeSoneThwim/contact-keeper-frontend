const {
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_FAIL,
  CLEAR_ERROR,
  CLEAR_SUCCESS,
  SET_LOADING,
  SET_ERROR,
  SET_SUCCESS,
  LOAD_USER,
  SET_EXPIRES,
  LOGOUT,
} = require("./authTypes");

const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const payload = action.payload;
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        isAuthenticated: true,
        isLoading: false,
        isTokenExpired: false,
      };
      break;
    case LOAD_USER:
      const { user, token } = action.payload;
      return {
        isAuthenticated: true,
        isTokenExpired: false,
        user,
        token,
      };
      break;
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload.error,
        isLoading: false,
      };
      break;
    case SET_SUCCESS:
      return {
        ...state,
        success: action.payload.message,
      };
      break;

    case CLEAR_SUCCESS:
      return {
        ...state,
        success: null,
      };
      break;
    case SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
      break;
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
      break;
    case SET_EXPIRES:
      return {
        ...state,
        isTokenExpired: true,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isTokenExpired: true,
      };
    default:
      return state;
  }
};
export default AuthReducer;
