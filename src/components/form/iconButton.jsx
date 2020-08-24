import React from "react";
const IconButton = ({ label, icon, variant, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick && onClick}
      className={`focus:outline-none text-xs font-semibold text-white px-3 py-2 leading-4 rounded-full inline-flex items-center ${
        (variant === "primary" && "bg-purple-500 hover:bg-purple-600") ||
        "bg-red-500 hover:bg-red-600"
      }`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
};
IconButton.defaultProps = {
  variant: "primary",
};
export default IconButton;
