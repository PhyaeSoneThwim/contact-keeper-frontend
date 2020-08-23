import React from "react";
const Button = ({ label, type, onClick, block, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick && onClick}
      className={`py-2 text-sm hover:bg-purple-600 focus:outline-none rounded-lg font-semibold leading-5 bg-purple-500 text-white ${
        block && "w-full"
      } ${disabled && "cursor-not-allowed"}`}
    >
      {label}
    </button>
  );
};
Button.defaultProps = {
  type: "button",
};
export default Button;
