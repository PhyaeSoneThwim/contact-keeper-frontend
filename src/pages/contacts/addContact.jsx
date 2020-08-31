import React, { useState, useEffect, useContext } from "react";
import SideDrawer from "../../components/drawer/sideDrawer";
import Input from "../../components/form/input";
import Button from "../../components/form/button";
import Alert from "../../components/alert";
import ContactContext from "../../context/contacts/contactContext";
import { FiAlertCircle } from "react-icons/fi";
const AddContact = ({ addOpen, toggleAddOpen }) => {
  const { addContact, formError } = useContext(ContactContext);
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
  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(contactData);
  };

  return (
    <SideDrawer maxWidth="md" open={addOpen} onClose={toggleAddOpen}>
      <div className="px-6">
        <span className="font-semibold text-gray-700">
          Add Contact Information
        </span>
        {formError && (
          <div className="my-2">
            <Alert
              type="error"
              label={formError}
              icon={<FiAlertCircle size={16} />}
            />
          </div>
        )}
        <form onSubmit={handleSubmit}>
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
        </form>
      </div>
    </SideDrawer>
  );
};

export default AddContact;
