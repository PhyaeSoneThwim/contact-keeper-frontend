import React from "react";
import _empty from "../../assets/images/_empty.svg";
const Empty = ({ label }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={_empty} />
      <span className="mt-4 text-red-500 font-semibold">{label}</span>
    </div>
  );
};

export default Empty;
