import React, { useContext, useEffect } from "react";
import Header from "../../layouts/header";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
const DeletedContacts = (props) => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  useEffect(() => {
    if (!auth.isAuthenticated) {
      history.push("/login");
    }
  }, [auth.isAuthenticated]);
  return (
    <div className="w-full min-h-screen">
      <Header />
      <div className="w-full py-8">
        <div className="mx-auto w-3/5"></div>
      </div>
    </div>
  );
};

export default DeletedContacts;
