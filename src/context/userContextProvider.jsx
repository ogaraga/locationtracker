/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import UserContextApi from "./userContext";

const UserContextProvider = ({ children }) => {
  let cid = Date.now();
  const userId = useRef(cid);
  const [user, setUser] = useState("");
  const id = userId.current;
  
  const [modal, setModal] = useState("");
  
  return (
    <UserContextApi.Provider
      value={{ modal, setModal, user, setUser,  id }}
    >
      {children}
    </UserContextApi.Provider>
  );
};
export default UserContextProvider;
