import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import _signup from "../../assets/images/_signup.svg";
import Input from "../../components/form/input";
import Button from "../../components/form/button";
import Alert from "../../components/alert";

import AuthContext from "../../context/auth/authContext";
const Register = () => {
  const history = useHistory();
  const { register, error, success, isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Password is required"),
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Email is not correct")
        .required("Email is required"),
      confirmPassword: Yup.string()
        .required("Confirm password is required")
        .test("", "Passwords mismatched", function (value) {
          return this.parent.password === value;
        }),
    }),
    onSubmit: (values) => {
      register({
        name: values.name,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      });
    },
  });
  return (
    <div className="w-full min-h-screen flex">
      <div className="md:hidden lg:flex flex-col items-center justify-center  lg:w-3/5 min-h-screen bg-purple-100">
        <img alt="illustrations_1" src={_signup} className="w-1/2" />
        <span className="mt-10 font-semibold text-lg block text-purple-500">
          Let's keep your contacts
        </span>
      </div>
      <div className="md:w-full py-20 lg:w-2/5 min-h-screen flex items-center justify-center">
        <div className="sm:max-w-sm w-full md:max-w-xs">
          {error && <Alert type="error" label={error} />}
          {success && <Alert type="success" label={success} />}
          <span className="text-gray-700 mt-4 block font-semibold">
            Welcome from
            <span className="ml-1 text-purple-500 font-semibold">
              Contact keeper
            </span>
          </span>
          <span className="text-xl font-medium mt-1 text-gray-700">
            Register your account?
          </span>
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-6">
              <Input
                name="name"
                hint="Enter username"
                value={formik.values.email}
                label="Name"
                type="text"
                id="user_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                error={formik.errors.name}
              />
            </div>
            <div className="mt-4">
              <Input
                name="email"
                value={formik.values.email}
                label="Email address"
                id="user_email"
                hint="user@gmail.com"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.errors.email}
              />
            </div>
            <div className="mt-4">
              <Input
                id="user_password"
                name="password"
                type="password"
                label="Password"
                hint="*******"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={formik.errors.password}
              />
            </div>
            <div className="mt-4">
              <Input
                id="user_confirm_password"
                name="confirmPassword"
                type="password"
                label="Confirm password"
                hint="*******"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                error={formik.errors.confirmPassword}
              />
            </div>
            <div className="mt-4">
              <Button
                disabled={
                  formik.errors.name ||
                  formik.errors.email ||
                  formik.errors.password ||
                  formik.errors.confirmPassword
                }
                label="Register now"
                type="submit"
                block
              />
              <div className="mt-2 flex items-center justify-center">
                <span className="text-sm font-semibold">
                  Already have an account?
                </span>
                <Link to="/login">
                  <span className="text-purple-500 hover:underline cursor-pointer text-sm ml-2 font-semibold">
                    Login
                  </span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
