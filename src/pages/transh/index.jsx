import React, { useContext, useEffect } from "react";
import Header from "../../layouts/header";
import { useHistory } from "react-router-dom";
const DeletedContacts = (props) => {
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
