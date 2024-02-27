import axios from 'axios';
import styles from './Alert.module.css';
import UserContextApi from '../context/userContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const Alert = () => {
    const{user, modal, setModal} = useContext(UserContextApi);
const id = user._id
    const handleOk =async ()=>{
      await axios
      .delete("http://localhost:5000/profile" +id)
      .then((res) => res.json(res.data))
      .catch((err) => console.log(err));
      setModal(!modal)

    }
    const handleNo =()=>{
        setModal(!modal)
    }
  return (
    <div className={styles.alert} >
        <p>Do you want to delete your account?
        <button onClick={handleNo}>No</button>
        <Link to= '*'>
         <button onClick={handleOk}>Ok</button></Link>
        </p>
    </div>
  )
}

export default Alert