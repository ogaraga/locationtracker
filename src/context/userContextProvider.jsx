/* eslint-disable react/prop-types */
import { useState } from "react";
import UserContextApi from "./userContext";

const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: '',
    _id: ''
  });
 
  const _id = JSON.stringify(user).slice(17,39).toString();
 const [modal, setModal] = useState("");
console.log(user)
  return (
    <UserContextApi.Provider value={{modal, setModal, user, setUser, _id}}>
      {children}
    </UserContextApi.Provider>
  );
};
export default UserContextProvider;
