import React, { useState, useContext, useEffect } from "react";
import AddContact from "./addContact";
import EditContact from "./editContact";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import UntrashCard from "../../components/card/untrashCard";
import Header from "../../components/header";
import SearchBar from "./searchBar";
const Contacts = (props) => {
  const history = useHistory();
  const { isAuthenticated, isTokenExpired } = useContext(AuthContext);
  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/login");
    }
  }, [isAuthenticated]);
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
            <UntrashCard
              onEdit={toggleEditOpen}
              id={1}
              address="88, Strand Road, Kyauktada Township, Yangon."
              email="daniel.garrett@example.com"
              phone="0912121212"
              gender="Male"
              imgUrl="https://randomuser.me/api/portraits/men/43.jpg"
              name="Daniel Garrett"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
