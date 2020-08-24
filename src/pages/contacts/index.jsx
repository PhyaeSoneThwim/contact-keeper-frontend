import React from "react";
import SearchBar from "./searchBar";
import Header from "../../layouts/header";
import ContactCard from "../../components/card/contactCard";
const Contacts = (props) => {
  return (
    <div className="w-full min-h-screen">
      <Header />
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
  );
};

export default Contacts;
