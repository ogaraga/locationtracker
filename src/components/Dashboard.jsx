import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useContext, useEffect } from "react";
import UserContextApi from "../context/userContext";
import Alerts from "./Alerts";
import axios from "axios";

const Dashboard = () => {
  const { user, setUser, modal, setModal } = useContext(UserContextApi);
window.addEventListener('load',()=>{
  setModal(!modal)
})
  const handleDelete = () => {
    setModal(!modal);
  };
  const handles = () => {
    setModal(modal);
  };

  const handleEdit = async () => {
    // e.preventDefault();
    setModal(!modal);
    await axios
      .get(`http://localhost:5000/register/${user.userId}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
     
  };
  useEffect(() => {
    handleEdit();
  }, []);
  const value = `/update/${user.userId}`;

  return (
    <>
      <h1> Dashboard</h1>
      <div className={styles.dash}>
        <Link to={value}>
          <button type="button" onClick={handleEdit}>
            EDIT ACCOUNT
          </button>
        </Link>{" "}
        <Link to="/hist">
          <button type="button">CHECK YOUR LOCATION HISTORY</button>
        </Link>
        {modal ? (
          <button type="button" onClick={handleDelete}>
            DELETE ACCOUNT
          </button>
        ) : (
          <Alerts />
        )}
        <Link to={`/home/${user.userId}`}>
          <button type="button" onClick={handles}>
            Back Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
