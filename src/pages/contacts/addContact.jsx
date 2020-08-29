import React, { useState } from "react";
import SideDrawer from "../../components/drawer/sideDrawer";
import Input from "../../components/form/input";
import ImagePicker from "../../components/form/imagePicker";
import Button from "../../components/form/button";
import { FiUser } from "react-icons/fi";
const AddContact = ({ addOpen, toggleAddOpen }) => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    photo: null,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactData({ ...contactData, [name]: value });
  };
  const onChangeFile = (name, value) => {
    setContactData({
      ...contactData,
      [name]: value,
    });
  };
  const onClearFile = (name) => {
    setContactData({
      ...contactData,
      [name]: null,
    });
  };
  return (
    <SideDrawer maxWidth="2xl" open={addOpen} onClose={toggleAddOpen}>
      <div className="px-6">
        <span className="font-semibold text-gray-700">
          Add Contact Information
        </span>
        <div className="flex items-start">
          <div className="w-1/2">
            <div className="mt-4">
              <Input
                id="name"
                onChange={handleChange}
                hint="Mg/Ma"
                label="Name"
                name="name"
                type="text"
              />
            </div>
            <div className="mt-4">
              <Input
                id="phone_number"
                onChange={handleChange}
                hint="()-()"
                label="Phone Number"
                name="phone"
                type="text"
              />
            </div>
            <div className="mt-4">
              <Input
                id="email_address"
                onChange={handleChange}
                hint="@email"
                label="Email address"
                name="email"
                type="text"
              />
            </div>
            <div className="mt-4">
              <Input
                id="address"
                onChange={handleChange}
                hint="Enter address.."
                label="Address"
                name="address"
                type="text"
              />
            </div>
            <div className="mt-4">
              <Button label="Submit" type="submit" />
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-1/2 mx-auto">
              <ImagePicker
                label="Photo"
                onChangeFile={onChangeFile}
                name="photo"
                onClearFile={onClearFile}
                icon={<FiUser size={18} />}
                roundedFull
              />
            </div>
          </div>
        </div>
      </div>
    </SideDrawer>
  );
};

export default AddContact;
