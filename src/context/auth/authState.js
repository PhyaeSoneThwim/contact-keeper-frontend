import React, { useReducer, useEffect } from "react";
import jwtDecode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAIL,
  LOAD_USER,
  SET_ERROR,
  SIGNUP_SUCCESS,
  SET_LOGIN,
  CLEAR_SUCCESS,
  CLEAR_ERROR,
  SET_EXPIRE,
} from "./authTypes";
import axios from "axios";
const AuthState = ({ children }) => {
  const initialState = {
    token: null,
    user: null,
    isAuthenticated: false,
    isTokenExpired: true,
    error: "",
    success: "",
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decode = jwtDecode(token);
      const currentTime = Math.floor(new Date().getTime() / 1000) + 5;
      const expiredIn = decode.exp - currentTime;
      setAuthToken(token);
      dispatch({
        type: SET_LOGIN,
        payload: { token },
      });
      setTimeout(() => {
        dispatch({
          type: SET_EXPIRE,
        });
      }, expiredIn);
    } else {
      dispatch({ type: LOGOUT });
    }
  }, []);

  useEffect(() => {
    let errorTimeOut;
    let successTimeOut;
    if (state.error) {
      errorTimeOut = setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 2000);
    }
    if (state.success) {
      successTimeOut = setTimeout(() => {
        dispatch({
          type: CLEAR_SUCCESS,
        });
      }, 2000);
    }
    return () => {
      clearTimeout(successTimeOut);
      clearTimeout(errorTimeOut);
    };
  }, [state.success, state.error]);

  const loadUser = async () => {
    try {
      const response = await axios.get("/api/users/get-me");
      const { data } = await response.data;
      dispatch({
        type: LOAD_USER,
        payload: {
          user: data.user,
        },
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: { error: error.response.data.message },
      });
    }
  };
  const login = async (formData) => {
    try {
      const response = await axios.post("/api/users/login", formData);
      const { data, token } = await response.data;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token, user: data.user },
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: { error: error.response.data.message },
      });
    }
  };
  const register = async (formData) => {
    try {
      const response = await axios.post("/api/users/register", formData);
      const { status } = await response.data;
      console.log(response);
      if (status === "success") {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: {
            success: "Register success",
          },
        });
      }
    } catch (error) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: { error: error.response.data.message },
      });
    }
  };
  const logout = () => {
    dispatch({ type: LOGOUT });
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        loadUser,
        error: state.error,
        success: state.success,
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        isTokenExpired: state.isTokenExpired,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
