import React, { useState, useEffect } from "react";
import axios from "axios";
import SideDrawer from "../../components/drawer/sideDrawer";
import Button from "../../components/form/button";
import Input from "../../components/form/input";
import Alert from "../../components/alert";
import ContactContext from "../../context/contacts/contactContext";
import { useContext } from "react";
import { FiAlertCircle } from "react-icons/fi";
const EditContact = ({ editOpen, toggleEditOpen, editId }) => {
  const { formError, updateContact } = useContext(ContactContext);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  useEffect(() => {
    if (editId) {
      axios
        .get(`/api/contacts/${editId}`)
        .then((res) => {
          return res.data.data;
        })
        .then((result) => {
          const { name, email, phone, address } = result.contact;
          setContactData({ ...contactData, name, email, phone, address });
        });
    }
  }, [editId]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactData({ ...contactData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    updateContact(editId, contactData);
  };
  const { name, email, address, phone } = contactData;

  return (
    <SideDrawer maxWidth="md" open={editOpen} onClose={toggleEditOpen}>
      <div className="px-6">
        <span className="font-semibold text-gray-700">
          Edit contact information
        </span>
        {formError && (
          <Alert
            type="error"
            label={formError}
            icon={<FiAlertCircle size={16} />}
          />
        )}
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <Input
              id="edit_name"
              onChange={handleChange}
              hint="Mg/Ma"
              label="Name"
              name="name"
              value={(name && name) || ""}
              type="text"
            />
          </div>
          <div className="mt-4">
            <Input
              id="edit_phone_number"
              value={(phone && phone) || ""}
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
              value={(email && email) || ""}
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
              value={(address && address) || ""}
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
