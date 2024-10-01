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
  const handleOk = async (userId) => {
    try {
      await axios
        .delete(`https://locationtracker-api.vercel.app/register/${userId}`)
        .then((res) => res.json(res.data)).catch(err =>console.log(err.message));       
        await user.filter(item => item.userId !== userId)
        alert('profile deleted')
       navigate(`/profile/${user.userId}`);
      setModal(!modal);
    } catch (error) {
      alert(error.message);
      setModal(!modal);
      navigate(`/profile/${user.userId}`);
    }
  };

  return (
    <div className={styles.alert}>
      <p>
        Do you want to delete your account? <br />
        <button type="submit" onClick={() => handleOk(user.userId)}>
          Ok
        </button>
        <button onClick={handleNo}>No</button>
      </p>
    </div>
  );
};

export default Alerts;
