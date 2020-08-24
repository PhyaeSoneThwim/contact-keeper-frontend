import React from "react";
import ListItem from '../list/listItem';
import Icon from '../form/icon';
import { FiPhoneCall, FiMail, FiMap, FiEdit, FiTrash } from "react-icons/fi";
const ContactCard = ({ gender, imgUrl, name, phone, email, address }) => {
  return (
    <div className="flex mt-2 border border-gray rounded-lg py-2 px-3 items-start">
      <img className="w-12 h-12 rounded-full" src={imgUrl} />
      <div className="flex-1 ml-4">
        <div className="flex items-center">
          <span className="text-lg font-semibold">{name}</span>
          <span class="px-2 ml-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800">
            {gender}
          </span>
        </div>
        <ListItem size="sm" label={phone} icon={<FiPhoneCall size={14} />} />
        <ListItem size="sm" label={email} icon={<FiMail size={14} />} />
        <ListItem size="sm" label={address} icon={<FiMap size={14} />} />
      </div>
      <div className="inline-flex items-center">
        <Icon icon={<FiEdit size={14} />} />
        <Icon icon={<FiTrash size={14} />} />
      </div>
    </div>
  );
};

export default ContactCard;
