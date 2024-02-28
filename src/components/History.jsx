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
  const { user } = useContext(UserContextApi);
  const value = `/profile/${user._id}`;
  return (
    <>
      <h1>LOCATION HISTORY</h1>
      <p>The coordinates at this time, {date}, is : </p>
      <span style={{ color: "black", textAlign: "center" }}>{[location]} </span>
      <br />
      <br />
      <Link to={value}>
        <button>Profile</button>
      </Link>
    </>
  );
};
export default History;
