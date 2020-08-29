import React from "react";
import {
  FiUsers,
  FiLogOut,
  FiTrash2,
  FiPhoneCall,
  FiMail,
} from "react-icons/fi";
import ListItem from "../components/list/listItem";
import IconButton from "../components/form/iconButton";
import NavLink from "../components/navigation/navLink";
const Header = ({ toggleAddOpen }) => {
  return (
    <div className="w-full sticky top-0 border-b border-gray-200 bg-gray-100">
      <div className="w-3/5 mx-auto">
        <div className="flex justify-between py-4 items-start">
          <div className="inline-flex flex-col">
            <span className="text-2xl block text-gray-700 font-bold">
              Daniel Garrett
            </span>
            <ListItem
              icon={<FiMail size={16} />}
              label="daniel.garrett@example.com"
            />
          </div>
          <div className="inline-flex space-x-2 items-center">
            <IconButton
              onClick={toggleAddOpen}
              icon={<FiUsers size={16} />}
              label="New Contacts"
            />
            <IconButton
              variant="danger"
              icon={<FiLogOut size={16} />}
              label="Logout"
            />
          </div>
        </div>
        <div className="inline-flex space-x-2 items-center">
          <NavLink
            to="/contacts"
            icon={<FiPhoneCall size={14} />}
            label="Contacts"
          />
          <NavLink to="/trash" icon={<FiTrash2 size={14} />} label="Trash" />
        </div>
      </div>
    </div>
  );
};

export default Header;
