import React from "react";

const IconButton = ({ icon, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="focus:outline-none transition-all ease-in-out duration-300 inline-block hover:bg-gray-100 p-2 rounded-full items-center justify-center"
    >
      {(icon !== null && icon) || children}
    </button>
  );
};

export default IconButton;
