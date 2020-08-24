import React from "react";
import { useLocation, Link } from "react-router-dom";
const NavLink = ({ label, icon, to }) => {
  const { pathname } = useLocation();
  return (
    <Link to={to}>
      <button
        className={`inline-flex focus:outline-none text-sm text-gray-700 font-semibold py-2 leading-5 border-b px-2 ${
          (pathname === to && "border-purple-500") || "border-transparent"
        }  items-center`}
      >
        {icon}
        <span className="ml-3">{label}</span>
      </button>
    </Link>
  );
};

export default NavLink;
