import axios from 'axios';
import styles from './Alert.module.css';
import UserContextApi from '../context/userContext';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
const Alert = () => {
  const {_id} = useParams();
    const{modal, setModal} = useContext(UserContextApi);

    const handleOk =async ()=>{
      await axios
      .delete("http://localhost:5000/profile" + _id)
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