import axios from 'axios';
import styles from './Alert.module.css';
import UserContextApi from '../context/userContext';
import { useContext } from 'react';
import {useNavigate } from 'react-router-dom';

const Alert = () => {
    const{user,id, modal, setModal} = useContext(UserContextApi);
    const navigate =useNavigate();

    const handleOk =async ()=>{
      await axios
      .delete("http://localhost:5000/profile/"+id, {data: user})
      .then((res) => {if(res.data){
        alert('data deleted')
        navigate('/login');        
      setModal(!modal)
      }else{
        alert('internal_error')
      }}).catch(err => alert(err.message));
      navigate(`*`)

    }
    const handleNo =()=>{
        setModal(!modal)
    }
  return (
    <div className={styles.alert} >
        <p>Do you want to delete your account?
        <button onClick={handleNo()}>No</button>
        <button onClick={handleOk}>Ok</button>
        </p>
    </div>
  )
}

export default Alert