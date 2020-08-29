import React from "react";
const Alert = ({ label, icon, type }) => {
  return (
    <div
      className={`${
        (type === "error" && "bg-red-100 border-red-400 text-red-700") ||
        "bg-green-100 text-green-700 border-green-400"
      } mb-4 border px-4 py-3 rounded relative`}
      role="alert"
    >
      <strong className="font-bold">
        {(type === "error" && "Error") || "Success"}
      </strong>
      <span className="inline-block ml-2">{label}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">{icon}</span>
    </div>
  );
};

export default Alert;
