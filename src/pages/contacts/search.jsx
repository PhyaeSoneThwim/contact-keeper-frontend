import React from "react";
import { FiSearch } from "react-icons/fi";
const Search = (props) => {
  return (
    <div className="relative rounded-lg">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch size={16} />
      </div>
      <input
        className="form-input pl-8 rounded-full focus:border-purple-500 focus:outline-none focus:shadow-none block w-full sm:text-sm sm:leading-5"
        placeholder="Search here"
        autoComplete="off"
      />
    </div>
  );
};

export default Search;
