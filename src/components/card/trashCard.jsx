import React from "react";
import ListItem from "../list/listItem";
import Icon from "../form/icon";
import {
  FiPhoneCall,
  FiMail,
  FiMap,
  FiEdit,
  FiTrash,
  FiCornerUpLeft,
} from "react-icons/fi";
import { useContext } from "react";
import ContactContext from "../../context/contacts/contactContext";
const TrashCard = ({ id, name, phone, email, address }) => {
  const { deleteContact, updateContact } = useContext(ContactContext);
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
        <Icon
          onClick={() => updateContact(id, { status: "untrash" })}
          icon={<FiCornerUpLeft size={14} />}
        />
        <Icon onClick={() => deleteContact(id)} icon={<FiTrash size={14} />} />
      </div>
    </div>
  );
};

export default TrashCard;
