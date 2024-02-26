import { useContext } from "react"
import UserContextApi from "../context/userContext"
import styles from './Notification.module.css'
// import MapContainers from "./MapContainers";
const Notification = () => {
 const {user,modal, setModal} = useContext(UserContextApi);
 const closeMe =()=>{
    setModal(!modal)
 }
  return (
    <div className={styles.notify} >
      <p className={styles.notp} >You are logged in as <input type="text" name="userName" value={JSON.stringify(user).slice(54, 60)}  readOnly style={{textAlign: "center", width: 'auto'}}/></p>
      <span>click Ok and then click on the map.</span>
      <button type="button" onClick={closeMe} className={styles.btn} >Ok</button>
    </div>
  )
}

export default Notification