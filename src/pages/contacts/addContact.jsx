import React, { useState, useEffect, useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import SideDrawer from "../../components/drawer/sideDrawer";
import Input from "../../components/form/input";
import Button from "../../components/form/button";
import Alert from "../../components/alert";
import ContactContext from "../../context/contacts/contactContext";
import { FiAlertCircle } from "react-icons/fi";
const AddContact = ({ addOpen, toggleAddOpen }) => {
  const { addContact, formError } = useContext(ContactContext);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Email is not correct")
        .required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      address: Yup.string().required("Address password is required"),
    }),
    onSubmit: (values) => {
      addContact({
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: values.address,
      });
    },
  });
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
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-4">
            <Input
              id="name"
              hint="Mg/Ma"
              label="Name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              error={formik.errors.name}
            />
          </div>
          <div className="mt-4">
            <Input
              id="phone_number"
              hint="()-()"
              label="Phone Number"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              error={formik.errors.phone}
            />
          </div>
          <div className="mt-4">
            <Input
              id="email_address"
              hint="@email"
              label="Email address"
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.errors.email}
            />
          </div>
          <div className="mt-4">
            <Input
              id="address"
              hint="Enter address.."
              label="Address"
              name="address"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              error={formik.errors.address}
            />
          </div>
          <div className="mt-4">
            <Button
              disabled={
                formik.errors.name ||
                formik.errors.phone ||
                formik.errors.email ||
                formik.errors.address
              }
              label="Submit"
              type="submit"
            />
          </div>
        </form>
      </div>
    </SideDrawer>
  );
};

export default AddContact;
