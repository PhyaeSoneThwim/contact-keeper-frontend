import React from "react";
import {
  FiUsers,
  FiLogOut,
  FiTrash2,
  FiPhoneCall,
  FiEdit,
  FiMail,
} from "react-icons/fi";
import ListItem from "../components/list/listItem";
import IconButton from "../components/form/iconButton";
import NavLink from "../components/navigation/navLink";
const Header = (props) => {
  return (
    <div className="w-full sticky top-0 border-b border-gray-200 bg-gray-100">
      <div className="w-3/5 mx-auto">
        <div className="flex py-4 items-start">
          <img
            className="w-32 h-32 rounded-full "
            src="https://randomuser.me/api/portraits/men/43.jpg"
          />
          <div className="flex-1 ml-10">
            <span className="text-2xl text-gray-700 font-bold">
              Daniel Garrett
            </span>
            <ListItem
              icon={<FiMail size={16} />}
              label="daniel.garrett@example.com"
            />
            <div className="mt-2">
              <IconButton icon={<FiEdit size={16} />} label="Edit Profile" />
            </div>
          </div>
          <div className="inline-flex space-x-2 items-center">
            <IconButton icon={<FiUsers size={16} />} label="New Contacts" />
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
