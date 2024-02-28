import { useContext } from "react";
import UserContextApi from "../context/userContext";
import styles from "./Alerts.module.css";
import { useNavigate} from "react-router-dom";
import axios from "axios";

const Alerts = () => {
  const navigate = useNavigate();
  const {user, modal, setModal } = useContext(UserContextApi);
  const handleNo = () => {
    setModal(!modal);
  };
  const handleOk = async () => {
    await axios
      .delete(`http://localhost:5000/register/${user._id}`,{data: user})
      .then((res) => res.json(res.data))
      .catch((err) => console.log(err.message));
    if (user._id === null || undefined) {
      alert("Profile deleted");
      navigate("/");
      setModal(!modal);
    } else {
      alert("Profile not deleted");
      setModal(!modal);
      navigate(`/profile/${user._id}`);
    }
  };

  return (
    <div className={styles.alert}>
      <p>
        Do you want to delete your account? <br />
        <button type="submit" onClick={handleOk}>
          Ok
        </button>
        <button onClick={handleNo}>No</button>
      </p>
    </div>
  );
};

export default Alerts;
