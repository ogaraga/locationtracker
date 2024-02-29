import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useContext } from "react";
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
    await axios
      .get(`http://localhost:5000/register/${user.id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };
  // useEffect(() => {
  //   handleEdit();
  // }, []);
  const value = `/update/${user.id}`;

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
        <Link to="/hist_all">
          <button type="button">CHECK ALL LOGIN USERS</button>
        </Link>
        {modal ? (
          <button type="button" onClick={handleDelete}>
            DELETE ACCOUNT
          </button>
        ) : (
          <Alerts />
        )}
        <Link to="/home">
          <button type="button" onClick={handles}>
            Back Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
