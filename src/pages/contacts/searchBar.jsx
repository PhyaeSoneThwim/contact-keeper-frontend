import React from "react";
import Search from "./search";
import IconButton from "../../components/form/iconButton";
import { FiUserPlus } from "react-icons/fi";
const SearchBar = ({ toggleAddOpen }) => {
  return (
    <div className="flex py-2 items-center justify-between">
      <div className="w-2/5">
        <Search />
      </div>
      <IconButton
        onClick={toggleAddOpen}
        icon={<FiUserPlus size={14} />}
        label="New contacts"
      />
    </div>
  );
};

export default SearchBar;
