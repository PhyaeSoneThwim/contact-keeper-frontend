import React from "react";
import ListItem from "../list/listItem";
import Icon from "../form/icon";
import { FiPhoneCall, FiMail, FiMap, FiEdit, FiTrash } from "react-icons/fi";
const UntrashCard = ({ id, name, phone, email, address, onEdit, onUpdate }) => {
  const handleEdit = (event) => {
    event.preventDefault();
    onEdit(id);
  };
  return (
    <div className="flex mt-2 border border-gray rounded-lg py-2 px-3 items-start">
      <div className="flex-1">
        <span className="text-lg font-semibold">{name}</span>
        {phone && (
          <ListItem size="sm" label={phone} icon={<FiPhoneCall size={14} />} />
        )}
        {email && (
          <ListItem size="sm" label={email} icon={<FiMail size={14} />} />
        )}
        {address && (
          <ListItem size="sm" label={address} icon={<FiMap size={14} />} />
        )}
      </div>
      <div className="inline-flex items-center">
        <Icon onClick={handleEdit} icon={<FiEdit size={14} />} />
        <Icon
          onClick={() => onUpdate(id, { status: "trash" })}
          icon={<FiTrash size={14} />}
        />
      </div>
    </div>
  );
};

export default UntrashCard;
