/* eslint-disable react/prop-types */
import { useState } from "react";
import UserContextApi from "./userContext";

const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState('');
 
 const [modal, setModal] = useState("");

  return (
    <UserContextApi.Provider value={{modal, setModal, user, setUser}}>
      {children}
    </UserContextApi.Provider>
  );
};
export default UserContextProvider;
