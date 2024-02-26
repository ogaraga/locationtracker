import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { useContext } from 'react';
import UserContextApi from '../context/userContext';
import Alert from './Alert';

const Dashboard = () => {
  const{_id, modal, setModal} = useContext(UserContextApi);
  const handleDelete = async()=>{
    setModal(!modal)
    
  }
  return (
    <>
    
    <h1> Dashboard</h1>
    <div className={styles.dash} >
        <Link to= {`/update/${_id}`}>
        <p>EDIT ACCOUNT</p>
        </Link>
        <Link to= '/hist'>
        <p>CHECK HISTORY</p>
        </Link>
        {modal? <p onClick={handleDelete}>DELETE ACCOUNT</p>:<Alert/>}
        <Link to= '/home'>
        <p>Back Home</p>  
         </Link>   
        </div>
        
        </>
  )
}

export default Dashboard