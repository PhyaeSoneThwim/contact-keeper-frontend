import React from "react";
import { FiAlertOctagon } from "react-icons/fi";
import { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
const Dialog = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div className="w-full z-40 fixed inset-0 flex items-center justify-center">
      <div className="absolute w-full  min-h-screen bg-black opacity-50"></div>
      <div className="p-6 bg-white z-50 flex-col flex items-center justify-center rounded-lg">
        <span className="text-red-600">
          <FiAlertOctagon size={20} />
        </span>
        <span className="text-lg mt-2 text-red-600">Oops!</span>
        <span className="text-sm text-center mt-2 text-gray-600">
          Your account has been <br /> expired?
        </span>
        <button
          onClick={logout}
          className="text-xs bg-red-600 text-white rounded-full px-2 mt-4 py-1 hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dialog;
