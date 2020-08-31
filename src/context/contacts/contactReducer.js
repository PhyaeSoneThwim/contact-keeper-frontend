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
  SEARCH_CONTACTS,
} from "./contactTypes";
const ContextReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS:
      const { contacts } = payload;
      return {
        ...state,
        contacts: contacts,
        error: "",
      };
    case GET_UNTRASH_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.status === "untrash"
        ),
      };
    case SEARCH_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => {
          const regex = new RegExp(`${payload.search}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case GET_TRASH_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.status === "trash"
        ),
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
    case SET_FORM_ERROR:
      return {
        ...state,
        formError: payload.error,
      };
    case CLEAR_FORM_ERROR:
      return {
        ...state,
        formError: "",
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id === payload.contact._id ? payload.contact : contact
        ),
      };
    case DELETE_CONTACT:
      const { contactId } = payload;
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact._id !== contactId),
      };
    default:
      return state;
  }
};
export default ContextReducer;
