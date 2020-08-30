import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import Header from "../../components/header";
import TrashCard from "../../components/card/trashCard";
const DeletedContacts = (props) => {
  const history = useHistory();
  const { isAuthenticated, isTokenExpired } = useContext(AuthContext);
  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/login");
    }
  }, [isAuthenticated]);
  return (
    <div className="w-full min-h-screen">
      <Header />
      <div className="w-full py-8">
        <div className="mx-auto w-3/5">
          <TrashCard
            id={1}
            address="88, Strand Road, Kyauktada Township, Yangon."
            email="daniel.garrett@example.com"
            phone="0912121212"
            gender="Male"
            imgUrl="https://randomuser.me/api/portraits/men/43.jpg"
            name="Daniel Garrett"
          />
        </div>
      </div>
    </div>
  );
};

export default DeletedContacts;
