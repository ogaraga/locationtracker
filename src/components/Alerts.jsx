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
  const handleOk = async () => {
    await axios({
      url: "http://localhost:5000/profile/" + user,
      method: "delete",
    })
      .then((res) => {
        if (res.data) alert("data deleted");
        navigate("/login");
        setModal(!modal);
      })
      .catch((err) => alert(err.message));
    setModal(!modal);
  };

  return (
    <div className={styles.alert}>
      <p>
        Do you want to delete your account? <br />
        <button onClick={handleOk}>Ok</button>
        <button onClick={handleNo}>No</button>
      </p>
    </div>
  );
};

export default Alerts;
