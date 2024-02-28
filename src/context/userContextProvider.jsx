/* eslint-disable react/prop-types */
import {useState } from "react";
import UserContextApi from "./userContext";
import { useParams } from "react-router-dom";

const UserContextProvider = ({ children }) => {
  
  const { _id } = useParams();
  const [user, setUser] = useState("");
  
  const [modal, setModal] = useState(false);

  return (
    <UserContextApi.Provider
      value={{ modal, setModal, user, setUser,_id}}
    >
      {children}
    </UserContextApi.Provider>
  );
};
export default UserContextProvider;
