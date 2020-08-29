import React, { useState } from "react";
import SearchBar from "./searchBar";
import Header from "../../layouts/header";
import ContactCard from "../../components/card/contactCard";
import AddContact from "./addContact";
const Contacts = (props) => {
  const [addOpen, setAddOpen] = useState(false);
  const toggleAddOpen = () => {
    setAddOpen(!addOpen);
  };
  return (
    <React.Fragment>
      <AddContact addOpen={addOpen} toggleAddOpen={toggleAddOpen} />
      <div className="w-full relative min-h-screen">
        <Header toggleAddOpen={toggleAddOpen} />
        <div className="w-full py-8">
          <div className="mx-auto w-3/5">
            <SearchBar />
            <ContactCard
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
