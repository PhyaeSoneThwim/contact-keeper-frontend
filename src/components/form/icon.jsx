import React from "react";

const Icon = ({ icon, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="focus:outline-none inline-block hover:bg-gray-100 p-2 hover:text-purple-500 rounded-full items-center justify-center"
    >
      {(icon !== null && icon) || children}
    </button>
  );
};

export default Icon;
