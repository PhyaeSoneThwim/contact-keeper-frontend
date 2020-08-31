import React, { useReducer } from "react";
import axios from "axios";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import { GET_CONTACTS, SET_ERRORS, ADD_CONTACT } from "./contactTypes";
const ContactState = ({ children }) => {
  const initialState = {
    contacts: [],
    error: "",
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);
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
      console.log(error.response.data.message);
    }
  };
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        error: state.error,
        addContact,
        getContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
