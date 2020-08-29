import React from "react";
const TextArea = ({
  label,
  rows,
  id,
  error,
  name,
  value,
  onChangeText,
  hint,
}) => {
  const handleChangeText = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    onChangeText(name, value);
  };
  return (
    <React.Fragment>
      {label && (
        <label
          htmlFor={id}
          className="block mb-1 text-xs text-gray-700 font-medium"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          autoComplete="off"
          rows={rows}
          className={`border rounded-md resize-none border py-2 pl-3 pr-3 text-xs xl:text-sm w-full block ${
            (error && "border-red-500") || "border-gray-200"
          } duration-300 ease-out transition-all focus:outline-none focus:border-indigo-500 placeholder-gray-600`}
          name={name}
          id={id}
          value={value}
          onChange={handleChangeText}
          placeholder={hint}
        />
      </div>
      {error && (
        <span className="text-red-600 mt-1 block text-xs">{error}</span>
      )}
    </React.Fragment>
  );
};

TextArea.defaultProps = {
  rows: 3,
};
export default TextArea;
