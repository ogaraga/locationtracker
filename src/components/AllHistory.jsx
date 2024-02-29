import { useContext} from "react";
import UserContextApi from "../context/userContext";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AllHistory = () => {
  const { user, setUser, modal, setModal } = useContext(UserContextApi);
  
  useEffect(()=>{
    axios
    .get("http://localhost:5000/login")
    .then((res) => setUser(JSON.stringify(res.data)))
    .catch((err) => console.log(err.message));
  },[user])
      
  const value = `/profile/${user.id}`;
  const dValues = [{
    userName: user.userName,
    email: user.email,
  }]
    const allUsers = [];
    allUsers.push(dValues)
    window.addEventListener('load',()=>{
        setModal(modal)
      })
      
  return (
    <div style={{ width: "100vw", maxHeight: "200vh", textAlign: "center", overflowY:"visible" }}> 
    <div>
            <Link to={value}>
            <button>Dashboard</button>
            </Link>

          </div><br /><br />   
      <h1>Current logger</h1><br />
       <p>{user.userName || user.email}</p> <br /><br />
      <h1>All Users LOGIN</h1><br /><br />
            {allUsers && allUsers.map((users,idx)=>{
                <div key={idx}>
                    <span>{users}</span>
                </div>
            })}
         
    </div>
  );
};

export default AllHistory;
