import React from "react";
import Search from "../../layouts/search";
const SearchBar = (props) => {
  return (
    <div className="flex py-2 items-center justify-between">
      <span className="font-semibold text-gray-700">Contact Lists</span>
      <div className="w-2/5">
        <Search />
      </div>
    </div>
  );
};

export default SearchBar;
