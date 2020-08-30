import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import _login from "../../assets/images/_login.svg";
import Input from "../../components/form/input";
import Button from "../../components/form/button";
import Alert from "../../components/alert";
import AuthContext from "../../context/auth/authContext";

const Login = () => {
  const history = useHistory();
  const { isAuthenticated, login, error } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated]);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Password is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is Required"),
    }),
    onSubmit: (values) => {
      login({
        email: values.email,
        password: values.password,
      });
    },
  });
  return (
    <div className="w-full min-h-screen flex">
      <div className="md:hidden lg:flex flex-col items-center justify-center  lg:w-3/5 min-h-screen bg-purple-100">
        <img src={_login} alt="illustrations" className="w-1/2" />
        <span className="mt-10 font-semibold text-lg block text-purple-500">
          Let's keep your contacts
        </span>
      </div>
      <div className="md:w-full lg:w-2/5 min-h-screen flex items-center justify-center">
        <div className="sm:max-w-sm w-full md:max-w-xs">
          {error && <Alert type="error" label={error} />}
          <span className="text-gray-700 block mt-4 font-semibold">
            Welcome from
            <span className="ml-1 text-purple-500 font-semibold">
              Contact keeper
            </span>
          </span>
          <span className="text-xl font-medium mt-1 text-gray-700">
            Login to continue
          </span>
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-6">
              <Input
                name="email"
                id="user_email"
                value={formik.values.email}
                label="Email address"
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
              <Button
                disabled={formik.errors.email || formik.errors.password}
                label="Login now"
                type="submit"
                block
              />
              <div className="mt-2 flex items-center justify-center">
                <span className="text-sm font-semibold text-gray-700">
                  Don't have an account?
                </span>
                <Link to="/register">
                  <span className="text-purple-500 text-sm hover:underline cursor-pointer font-medium ml-2">
                    Register
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

export default Login;
