import { useContext} from "react"
// import  MapContainers from "./MapContainers"
import UserContextApi from "../context/userContext";

import styles from './Profile.module.css';
import Dashboard from "./Dashboard";


const Profile = () => {
  
  const {user} = useContext(UserContextApi);  
    
  return (
    <>
    <header className= {styles.header}>
      <nav className={styles.nav} >
        <h3>GEOLOCATION</h3>
         <div style={{display:"flex", alignItems:"center", justifyContent:"center", margin:'auto'}}>
         <span>{user.userName ||user.email}</span>
         <img src="https://api.dicebear.com/7.x/adventurer/svg" alt="Avatar" width= '100'  height= '50'/>
        </div>        
      </nav>
    </header>    
    <Dashboard/>
    <footer>
            <p>Zidio Development copyrights &copy; {new Date().getFullYear()} </p>
    </footer>
    </>
  )
}

export default Profile