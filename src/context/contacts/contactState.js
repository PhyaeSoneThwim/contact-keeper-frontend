import React, { useReducer, useEffect } from "react";
import axios from "axios";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  GET_CONTACTS,
  SET_ERRORS,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  GET_TRASH_CONTACTS,
  GET_UNTRASH_CONTACTS,
  SET_FORM_ERROR,
  CLEAR_FORM_ERROR,
} from "./contactTypes";
const ContactState = ({ children }) => {
  const initialState = {
    contacts: [],
    error: "",
    formError: "",
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);
  useEffect(() => {
    let errorTimeOut;
    if (state.formError) {
      errorTimeOut = setTimeout(() => {
        dispatch({
          type: CLEAR_FORM_ERROR,
        });
      }, 2000);
    }
    return () => {
      clearTimeout(errorTimeOut);
    };
  }, [state.formError]);

  const getContacts = async () => {
    try {
      const response = await axios.get("/api/contacts");
      const { data } = await response.data;
      const { contacts } = await data;
      dispatch({
        type: GET_CONTACTS,
        payload: {
          contacts,
        },
      });
    } catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: {
          error: error.response.data.message,
        },
      });
    }
  };
  const addContact = async (contact) => {
    try {
      const response = await axios.post("/api/contacts", contact);
      const { data } = await response.data;
      dispatch({ type: ADD_CONTACT, payload: { contact: data.contact } });
    } catch (error) {
      dispatch({
        type: SET_FORM_ERROR,
        payload: {
          error: error.response.data.message,
        },
      });
    }
  };
  const deleteContact = async (contactId) => {
    try {
      const response = await axios.delete(`/api/contacts/${contactId}`);
      const { status } = await response.data;
      if (status === "success") {
        dispatch({
          type: DELETE_CONTACT,
          payload: { contactId },
        });
      }
    } catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: { error: error.response.data.message },
      });
    }
  };

  const updateContact = async (contactId, updateData) => {
    try {
      const response = await axios.patch(
        `/api/contacts/${contactId}`,
        updateData
      );
      const { data } = await response.data;
      dispatch({
        type: UPDATE_CONTACT,
        payload: {
          contact: data.contact,
        },
      });
    } catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: { error: error.response.data.message },
      });
    }
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        error: state.error,
        formError: state.formError,
        addContact,
        deleteContact,
        updateContact,
        getContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
