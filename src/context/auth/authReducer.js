const {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGOUT,
  LOAD_USER,
  SET_LOGIN,
  CLEAR_ERROR,
  CLEAR_SUCCESS,
} = require("./authTypes");
const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      const { user, token } = payload;
      localStorage.setItem("token", token);
      return {
        ...state,
        user,
        token,
        isAuthenticated: true,
        isTokenExpired: false,
      };
    case LOAD_USER:
      return {
        ...state,
        user: payload.user,
      };
    case SET_LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        isTokenExpired: false,
        token: payload.token,
      };
    case SIGNUP_SUCCESS:
      const { success } = payload;
      return {
        ...state,
        success,
      };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
      const { error } = payload;
      return {
        ...state,
        error,
        isAuthenticated: false,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        success: "",
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
