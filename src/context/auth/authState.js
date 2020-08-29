import React, { useReducer, useEffect } from "react";
import axios from "axios";
import {
  SET_ERROR,
  SET_EXPIRES,
  SIGNUP_FAIL,
  SET_SUCCESS,
  LOGOUT,
  CLEAR_ERROR,
  CLEAR_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOAD_USER,
} from "./authTypes";
import jwtDecode from "jwt-decode";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";
const AuthState = ({ children }) => {
  const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isTokenExpired: true,
    isLoading: false,
    error: null,
    success: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const loadUser = async (token) => {
    try {
      const res = await axios.get("api/users/get-me");
      const { user } = await res.data.data;
      dispatch({
        type: LOAD_USER,
        payload: {
          user,
          token,
        },
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: { error: error.response.data.message },
      });
    }
  };
  useEffect(() => {
    let timeOut;
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      setAuthToken(token);
      loadUser(token);
      const expiresIn = decoded.exp - (Date.now() / 1000 + 5000);
      timeOut = setTimeout(() => {
        dispatch({ type: SET_EXPIRES });
      }, expiresIn);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [state.token]);

  useEffect(() => {
    let timeOut;
    if (state.error) {
      timeOut = setTimeout(() => {
        dispatch({ type: CLEAR_ERROR });
      }, 2000);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [state.error]);

  useEffect(() => {
    let timeOut;
    if (state.success) {
      timeOut = setTimeout(() => {
        dispatch({ type: CLEAR_SUCCESS });
      }, 2000);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [state.success]);
  const login = async (formData) => {
    try {
      const res = await axios.post("/api/users/login", formData);
      const { token, data } = await res.data;
      setAuthToken(token);
      dispatch({ type: LOGIN_SUCCESS, payload: { token, user: data.user } });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: { error: error.response.data.message },
      });
    }
  };
  const register = async (formData) => {
    try {
      const res = await axios.post("/api/users/register", formData);
      const { status } = await res.data;
      if (status === "success") {
        console.log("successfully register");
        dispatch({
          type: SET_SUCCESS,
          payload: { message: "Successfully registerd" },
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
        register,
        logout,
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        error: state.error,
        success: state.success,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
