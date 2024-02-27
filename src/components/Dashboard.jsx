import { Link, useParams } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useContext } from "react";
import UserContextApi from "../context/userContext";
import Alert from "./Alert";
import axios from "axios";

const Dashboard = () => {
  const { id } = useParams();
  const { _id, modal, setModal } = useContext(UserContextApi);

  const handleDelete = async () => {
    await axios
      .delete("http://localhost:5000/profile" + id)
      .then((res) => res.json(res.data))
      .catch((err) => console.log(err));
    setModal(!modal);
  };
  return (
    <>
      <h1> Dashboard</h1>
      <div className={styles.dash}>
        <Link to={`/update/${_id}`}>
          <p>EDIT ACCOUNT</p>
        </Link>
        <Link to="/hist">
          <p>CHECK HISTORY</p>
        </Link>
        {modal ? <p onClick={handleDelete}>DELETE ACCOUNT</p> : <Alert />}
        <Link to="/home">
          <p>Back Home</p>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
