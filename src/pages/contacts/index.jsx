import React from "react";
import {
  FiMail,
  FiMap,
  FiEdit,
  FiTrash,
  FiChevronDown,
  FiPhoneCall,
} from "react-icons/fi";
import SearchBar from "./searchBar";
import Header from "../../layouts/header";
import ListItem from "../../components/list/listItem";
import Icon from "../../components/form/icon";
const Contacts = (props) => {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <div className="w-full py-8">
        <div className="mx-auto w-3/5">
          <SearchBar />
          <div className="flex mt-2 border border-gray rounded-lg py-2 px-3 items-start">
            <img
              className="w-12 h-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/43.jpg"
            />
            <div className="flex-1 ml-4">
              <div className="flex items-center">
                <span className="text-lg font-semibold">Daniel Garrett</span>
                <span class="px-2 ml-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800">
                  Male
                </span>
              </div>
              <ListItem
                size="sm"
                label="0912121212"
                icon={<FiPhoneCall size={14} />}
              />
              <ListItem
                size="sm"
                label="daniel.garrett@example.com"
                icon={<FiMail size={14} />}
              />
              <ListItem
                size="sm"
                label="88, Strand Road, Kyauktada Township, Yangon."
                icon={<FiMap size={14} />}
              />
            </div>
            <div className="inline-flex items-center">
              <Icon icon={<FiEdit size={14} />} />
              <Icon icon={<FiTrash size={14} />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
