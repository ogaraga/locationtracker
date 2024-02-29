/* eslint-disable react/prop-types */
import {useState } from "react";
import UserContextApi from "./userContext";
// import { useParams } from "react-router-dom";

const UserContextProvider = ({ children }) => {
  
  
  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    id: '65d60569e4b104a0d6ed840c'
  });
  
  const [modal, setModal] = useState(false);
  console.log(user)
console.log(user)
  return (
    <UserContextApi.Provider
      value={{ modal, setModal, user, setUser}}
    >
      {children}
    </UserContextApi.Provider>
  );
};
export default UserContextProvider;
