import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import { useContext, useEffect} from "react";
import UserContextApi from "../context/userContext";
import Alert from "./Alert";
import axios from "axios";

const Dashboard = () => {
  
  const {user,setUser, modal, setModal } = useContext(UserContextApi);

  const  id = user._id;
  const handleDelete = async () => {
    setModal(!modal);
  };
  const handles = () => {
    setModal(!modal);
  };
  const handleEdit = async () => {
    axios
      .get("http://localhost:5000/profile" + id)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(()=>{
    handleEdit()
  },[])
  const value = `/update/${id}`
  return (
    <>
      <h1> Dashboard</h1>
      <div className={styles.dash}>
        <Link to={value}>
          <p onClick={handleEdit}>EDIT ACCOUNT</p>
        </Link>
        <Link to="/hist">
          <p>CHECK HISTORY</p>
        </Link>
        {!modal ? <p onClick={handleDelete}>DELETE ACCOUNT</p> : <Alert />}
        <Link to="/home">
          <p onClick={handles}>Back Home</p>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
