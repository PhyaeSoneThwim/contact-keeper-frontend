import React, { useRef, useContext, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import ContactContext from "../../context/contacts/contactContext";
import { useState } from "react";
const Search = (props) => {
  const { getContacts, searchContacts } = useContext(ContactContext);
  const [query, setQuery] = useState({
    search: "",
  });
  useEffect(() => {
    if (query.search !== "") {
      searchContacts(query.search);
    } else {
      getContacts();
    }
  }, [query.search]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQuery({ ...query, [name]: value });
  };
  return (
    <div className="relative rounded-lg">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch size={16} />
      </div>
      <input
        name="search"
        onChange={handleChange}
        value={query.search}
        className="form-input pl-8 rounded-full focus:border-purple-500 focus:outline-none focus:shadow-none block w-full sm:text-sm sm:leading-5"
        placeholder="Search here"
        autoComplete="off"
      />
    </div>
  );
};

export default Search;
