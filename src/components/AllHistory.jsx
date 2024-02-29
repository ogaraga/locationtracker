import { useContext, useEffect} from "react";
import UserContextApi from "../context/userContext";
import axios from "axios";
import { Link } from "react-router-dom";

const AllHistory = () => {
  const { user, setUser } = useContext(UserContextApi);
  
  const dValue =[{
    userName: user.userName,
    email: user.email,
    password: user.password,
    id: user.id
  }]
  useEffect(() => {
     axios
      .get("http://localhost:5000/login")
      .then((res) => setUser(JSON.stringify(res.data)))
      .catch((err) => console.log(err.message));
    }, []);
  const value = `/profile/${user.id}`;

  return (
    <div style={{ width: "100vw", maxHeight: "200vh", textAlign: "center", overflowY:"visible" }}>
      <h1>All Users LOGIN</h1>
            {dValue && dValue.map((users,idx)=>{
                <div key={idx}>
                    <span>{users}</span>
                </div>
            })}
         <div>
            <Link to={value}>
            <button>Profile</button>
            </Link>

          </div>
    </div>
  );
};

export default AllHistory;
