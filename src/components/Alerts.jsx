import { useContext } from "react";
import UserContextApi from "../context/userContext";
import styles from "./Alerts.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Alerts = () => {
  const navigate = useNavigate();
  const { user, modal, setModal } = useContext(UserContextApi);
  const handleNo = () => {
    setModal(!modal);
  };
  window.addEventListener("load", () => {
    setModal(!modal);
  });
  const handleOk = async (id) => {
    try {
      await axios
        .delete(`http://localhost:5000/register/${id}`)
        .then((res) => res.json(res.data));
        alert('profile deleted')
      navigate(`/profile/${user.id}`);
      setModal(!modal);
    } catch (error) {
      alert(error.message);
      setModal(!modal);
      navigate(`/profile/${user.id}`);
    }
  };

  return (
    <div className={styles.alert}>
      <p>
        Do you want to delete your account? <br />
        <button type="submit" onClick={() => handleOk(user.id)}>
          Ok
        </button>
        <button onClick={handleNo}>No</button>
      </p>
    </div>
  );
};

export default Alerts;
