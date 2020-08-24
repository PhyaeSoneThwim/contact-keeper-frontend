import React from "react";
const ListItem = ({ label, icon, size }) => {
  return (
    <div className={`flex text-${size} text-gray-700 items-center`}>
      {icon}
      <span className="ml-2">{label}</span>
    </div>
  );
};
ListItem.defaultProps = {
  size: "base",
};
export default ListItem;
