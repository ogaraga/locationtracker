import { useContext, useState } from "react";
// import MapContainers from "./MapContainers";
import Notification from "./Notification";
import UserContextApi from "../context/userContext";
import styles from "./Home.module.css";
import MapContainers from "./MapContainers";
import { Link } from "react-router-dom";
import style from "./MapContainers.module.css";




const Home = () => {
  const {user, modal, setModal } = useContext(UserContextApi);
 
  const value = `/profile/${user.userId}`
  window.addEventListener("load", () => {
    setModal(!modal);
  });
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const item =()=>{
    setModal(!modal);
  }
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h3>GEOLOCATION</h3>
          <p className={styles.username}>{user.userName || user.email}</p>
          <img
            src="https://api.dicebear.com/7.x/adventurer/svg"
            alt="Avatar"
            width="100"
            height="100" 
            className={styles.imgs}
          />
          <div className={styles.prof}>
            {!open && (
              <i
                className="fa-solid fa-ellipsis-vertical"
                onClick={handleOpen}
              ></i>
            )}
            {open && (
              <span
                className="fa-solid fa-xmark"
                onClick={handleClose}
                id={styles.myspan}
              >
                <div className={styles.divlink}>
                  <Link to={value}>
                    <p className={styles.span1} onClick={item} >
                      Profile
                    </p>
                  </Link>
                  <Link to="/login">
                    <p className={styles.span2}>LogOut</p>
                  </Link>
                </div>
              </span>
            )}
          </div>
        </nav>
      </header>
      <div className={style.container}>
        {!modal ? <Notification /> : <MapContainers />}
      </div>
      <footer>
        <p>Zidio Development copyrights &copy; {new Date().getFullYear()} </p>
      </footer>
    </>
  );
};

export default Home;
