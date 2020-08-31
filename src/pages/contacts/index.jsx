import React, { useState, useContext, useEffect } from "react";
import AddContact from "./addContact";
import EditContact from "./editContact";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import UntrashCard from "../../components/card/untrashCard";
import Header from "../../components/header";
import SearchBar from "./searchBar";
import Empty from "../../components/empty";
import ContactContext from "../../context/contacts/contactContext";
const Contacts = (props) => {
  const history = useHistory();
  const { isAuthenticated, isTokenExpired } = useContext(AuthContext);
  const { contacts, error, getContacts } = useContext(ContactContext);
  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/login");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    getContacts();
  }, []);
  const [editId, setEditId] = useState(null);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const toggleEditOpen = (id) => {
    if (editOpen) {
      setEditOpen(false);
      setEditId(null);
    } else {
      setEditId(id);
      setEditOpen(true);
    }
  };
  const toggleAddOpen = () => {
    setAddOpen(!addOpen);
  };

  return (
    <React.Fragment>
      <EditContact
        editId={editId}
        editOpen={editOpen}
        toggleEditOpen={toggleEditOpen}
      />
      <AddContact addOpen={addOpen} toggleAddOpen={toggleAddOpen} />
      <div className="w-full relative min-h-screen">
        <Header />
        <div className="w-full py-8">
          <div className="mx-auto w-3/5">
            <SearchBar toggleAddOpen={toggleAddOpen} />
            {contacts.length > 0 &&
              contacts.map((contact, index) => (
                <UntrashCard
                  key={index}
                  onEdit={toggleEditOpen}
                  id={contact._id}
                  address={contact.address}
                  email={contact.email}
                  phone={contact.phone}
                  imgUrl={contact.photo}
                  name={contact.name}
                />
              ))}
            {!contacts.length > 0 && (
              <div className="w-1/3 my-12 mx-auto">
                <Empty label="No contacts" />
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
