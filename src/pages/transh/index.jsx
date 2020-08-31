import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import Header from "../../components/header";
import TrashCard from "../../components/card/trashCard";
import ContactContext from "../../context/contacts/contactContext";
import Empty from "../../components/empty";
const DeletedContacts = (props) => {
  const history = useHistory();
  const { isAuthenticated, isTokenExpired } = useContext(AuthContext);
  const { contacts, getContacts, updateContact } = useContext(ContactContext);
  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/login");
    }
  }, [isAuthenticated]);
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div className="w-full min-h-screen">
      <Header />
      <div className="w-full py-8">
        <div className="mx-auto w-3/5">
          {contacts.length > 0 &&
            contacts.map((contact, index) => {
              if (contact.status === "trash") {
                return (
                  <TrashCard
                    key={index}
                    id={contact._id}
                    address={contact.address}
                    email={contact.email}
                    phone={contact.phone}
                    name={contact.name}
                  />
                );
              }
            })}
          {!contacts.filter((contact) => contact.status === "trash").length && (
            <div className="w-1/3 my-12 mx-auto">
              <Empty label="No contacts" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeletedContacts;
