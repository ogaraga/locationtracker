import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useContext, useEffect} from "react";
import UserContextApi from "../context/userContext";
import Alert from "./Alert";
import axios from "axios";

const Dashboard = () => {
  const { id, setUser, modal, setModal } = useContext(UserContextApi);

  const handleDelete = () => {
    setModal(!modal);
    
  };
  const handles = () => {
    setModal(modal);
  };
  const handleEdit = async () => {
    await axios
      .get("http://localhost:5000/profile" + id)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    handleEdit();
  }, []);
  const value = `/update/${id}`;
  return (
    <>
      <h1> Dashboard</h1>
      <div className={styles.dash}>
        <Link to={value}>
          <button type="button" onClick={handleEdit}>EDIT ACCOUNT</button>
        </Link>
        <Link to="/hist">
          <button type="button">CHECK HISTORY</button>
        </Link>
        {modal ? <button type="button" onClick={handleDelete}>DELETE ACCOUNT</button> : <Alert />}
        <Link to="/home">
          <button type="button" onClick={handles}>Back Home</button>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
