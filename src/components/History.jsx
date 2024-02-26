import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContextApi from "../context/userContext";


const History = () => {
  const [location, setLocation] = useState([]);
  
  const success = (position) => {
    setLocation([position.coords.latitude +',  '+
    position.coords.longitude])
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
  setInterval(() => {
    get;
    save;
    date;
  }, 9000);
  const get = localStorage.getItem('location', [location])
  const save = localStorage.setItem('location', [location])
  const date = new Date().toLocaleTimeString()
  const{_id} = useContext(UserContextApi)
  return (
    <>
      <h1>LOCATION HISTORY</h1>
      <p>The coordinates at this time visited: {date}  is : </p>
      <span style={{ color: "black", textAlign: "center"}}>{[get, save]} </span><br /><br />
      <Link to= {`/profile/${_id}`}>
      <button>Profile</button>
      </Link>
    </>
  );
};
export default History;
