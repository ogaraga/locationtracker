import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContextApi from "../context/userContext";

const History = () => {
  const [location, setLocation] = useState(null);

  const success = (position) => {
    setLocation([position.coords.latitude + ",  " + position.coords.longitude]);
  };
  const error = (error) => {
    setLocation(error.message);
  };
  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("The location is not available currently");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);
  const date = new Date().toLocaleTimeString();
  const { user, modal, setModal } = useContext(UserContextApi);
  const value = `/profile/${user.userId}`;
  const item =()=>{
    setModal(!modal);
  }
  return (
    <>
      <h1>LOCATION HISTORY</h1>
      <span style={{color: "gray", textAlign: "center"}}>userName: {user.userName}; </span>
      <span style={{color:"gray",textAlign: "center"}}>email: {user.email} </span>
      <br />
      <p>User`s postion at this time, {date}, was : </p>
      <span style={{ color: "black", textAlign: "center" }}>{[location]} </span>
      <br />
      <br />
      <Link to={value}>
        <button onClick={item}>Dashboard</button>
      </Link>
    </>
  );
};
export default History;
