import React, { useContext, useEffect, useState } from "react";
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
import AuthContext from "../context/auth/authContext";
const Header = ({ toggleAddOpen }) => {
  const auth = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  useEffect(() => {
    if (auth.user) {
      setUser({ ...user, name: auth.user.name, email: auth.user.email });
    }
  }, [auth.user]);
  return (
    <div className="w-full sticky top-0 border-b border-gray-200 bg-gray-100">
      <div className="w-3/5 mx-auto">
        <div className="flex justify-between py-4 items-start">
          <div className="inline-flex flex-col">
            <span className="text-2xl block text-gray-700 font-bold">
              {user.name}
            </span>
            <ListItem icon={<FiMail size={16} />} label={user.email} />
          </div>
          <div className="inline-flex space-x-2 items-center">
            <IconButton
              onClick={toggleAddOpen}
              icon={<FiUsers size={16} />}
              label="New Contacts"
            />
            <IconButton
              variant="danger"
              onClick={auth.logout}
              icon={<FiLogOut size={16} />}
              label="Logout"
            />
          </div>
        </div>
        <div className="inline-flex space-x-2 items-center">
          <NavLink to="/" icon={<FiPhoneCall size={14} />} label="Contacts" />
          <NavLink to="/trash" icon={<FiTrash2 size={14} />} label="Trash" />
        </div>
      </div>
    </div>
  );
};

export default Header;
