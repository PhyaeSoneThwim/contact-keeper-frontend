import { GET_CONTACTS, SET_ERRORS, ADD_CONTACT } from "./contactTypes";
const ContextReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS:
      const { contacts } = payload;
      return {
        ...state,
        contacts: contacts,
        error: "",
      };
    case SET_ERRORS:
      const { error } = payload;
      return {
        ...state,
        error,
      };
    case ADD_CONTACT:
      const { contact } = payload;
      return {
        ...state,
        contacts: [...state.contacts, contact],
      };
    default:
      return state;
  }
};
export default ContextReducer;
