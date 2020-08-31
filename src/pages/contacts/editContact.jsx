import React, { useState } from "react";
import SideDrawer from "../../components/drawer/sideDrawer";
import ImagePicker from "../../components/form/imagePicker";
import { FiUser } from "react-icons/fi";
import Button from "../../components/form/button";
import Input from "../../components/form/input";
const EditContact = ({ editOpen, toggleEditOpen, editId }) => {
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
    <SideDrawer maxWidth="md" open={editOpen} onClose={toggleEditOpen}>
      <div className="px-6">
        <span className="font-semibold text-gray-700">
          Edit contact information
        </span>
        <form>
          <div className="mt-4">
            <Input
              id="edit_name"
              onChange={handleChange}
              hint="Mg/Ma"
              label="Name"
              name="name"
              type="text"
            />
          </div>
          <div className="mt-4">
            <Input
              id="edit_phone_number"
              onChange={handleChange}
              hint="()-()"
              label="Phone Number"
              name="phone"
              type="text"
            />
          </div>
          <div className="mt-4">
            <Input
              id="edit_email_address"
              onChange={handleChange}
              hint="@email"
              label="Email address"
              name="email"
              type="text"
            />
          </div>
          <div className="mt-4">
            <Input
              id="edit_address"
              onChange={handleChange}
              hint="Enter address.."
              label="Address"
              name="address"
              type="text"
            />
          </div>
          <div className="mt-4">
            <Button label="Update" type="submit" />
          </div>
        </form>
      </div>
    </SideDrawer>
  );
};

export default EditContact;
