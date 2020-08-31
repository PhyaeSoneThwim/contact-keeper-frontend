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
const TrashCard = ({ id, imgUrl, name, phone, email, address }) => {
  return (
    <div className="flex mt-2 border border-gray rounded-lg py-2 px-3 items-start">
      <div className="flex-1">
        <span className="text-lg font-semibold">{name}</span>
        <ListItem size="sm" label={phone} icon={<FiPhoneCall size={14} />} />
        <ListItem size="sm" label={email} icon={<FiMail size={14} />} />
        <ListItem size="sm" label={address} icon={<FiMap size={14} />} />
      </div>
      <div className="inline-flex items-center">
        <Icon icon={<FiCornerUpLeft size={14} />} />
        <Icon icon={<FiTrash size={14} />} />
      </div>
    </div>
  );
};

export default TrashCard;
