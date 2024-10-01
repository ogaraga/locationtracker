/* eslint-disable react/prop-types */
import {useState } from "react";
import UserContextApi from "./userContext";

const UserContextProvider = ({ children }) => {
  const nums = [100, 101,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,2345,1003.1000002345210,700,600,500,30,200,99,89,1100,123,432.567,765,890,987,21,32,43,54,76,87,89,78,67,56,45,34,300001204, 10000003, 9034521,14328656]

  const rands = Math.floor(Math.random() * nums.length);
  const rand = nums[rands] 
   
 
  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userId: rand
    
  })
  
  const [modal, setModal] = useState(false);
  
  
  return (
    <UserContextApi.Provider
      value={{ modal, setModal, user, setUser}}
    >
      {children}
    </UserContextApi.Provider>
  );
};
export default UserContextProvider;
