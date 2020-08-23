import React, { useRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import IconButton from "./iconButton";
const Input = ({
  label,
  id,
  error,
  type,
  name,
  value,
  onChange,
  onBlur,
  hint,
  startIcon,
}) => {
  const inputRef = useRef(null);
  const [isTextField, setIsTextField] = useState(false);

  //toggle password visibility
  const handleToggle = (event) => {
    event.preventDefault();
    if (inputRef.current.type === "password") {
      inputRef.current.type = "text";
      setIsTextField(true);
    } else {
      inputRef.current.type = "password";
      setIsTextField(false);
    }
  };
  return (
    <React.Fragment>
      {label && (
        <label
          htmlFor={id}
          className="block mb-1 text-sm text-gray-700 font-medium"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {startIcon && (
          <div className="absolute flex items-center justify-center inset-y-0 left-0 pl-2">
            {startIcon}
          </div>
        )}
        <input
          autoComplete="off"
          ref={inputRef}
          className={`border rounded-lg leading-5 py-2 ${
            (startIcon && "pl-8") || "pl-3"
          } pr-3 text-sm w-full block ${
            (error && "border-red-600") ||
            "border-gray-300 focus:border-purple-500"
          } duration-300 ease-out transition-all focus:outline-none placeholder-gray-600`}
          type={type}
          id={id}
          placeholder={hint}
          name={name && name}
          value={value && value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <div className="absolute flex items-center justify-center inset-y-0 right-0 pr-1">
          {type === "password" && (
            <IconButton onClick={handleToggle}>
              {(isTextField && (
                <FiEyeOff size={14} className="text-gray-600" />
              )) || <FiEye size={14} className="text-gray-600" />}
            </IconButton>
          )}
        </div>
      </div>
      {error && (
        <span className="text-red-600 mt-1 block text-xs">{error}</span>
      )}
    </React.Fragment>
  );
};

Input.defaultProps = {
  hint: "placeholder",
  type: "text",
  id: "input_id",
};
export default Input;
