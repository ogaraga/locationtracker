import styles from "./Login.module.css";
import mage from "../assets/arrow.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext} from "react";
import axios from "axios";
import UserContextApi from "../context/userContext";

const Login = () => {
  const {user, setUser } = useContext(UserContextApi);

  const handleChange = (ev) => {
    setUser({ ...user, [ev.target.name]: ev.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await axios
      .post("https://locationtracker-api.vercel.app/login", user)
      .then(res => {
        if (res.data) {
          document.getElementById("lab").innerHTML = "Checking credentials...";
          setTimeout(() => {
            document.getElementById("lab").innerHTML = "Credentials verified!";
          }, 4000);
          setTimeout(() => {
            document.getElementById("lab").innerHTML = "Logging in ...";
          }, 7000);          
          document.getElementById("lab").style.color = "green";
          setTimeout(() => {
            navigate(`/home/${user.userId}`);
          }, 10000);
        }
        else{
         alert('internal/network error');
        }
      }).catch((err) =>{if(err)
        document.getElementById("lab").innerHTML = "Invalid Value(s) || Database unreachable";
        document.getElementById("lab").style.color = "red";
         
    } )
  };
  return (
    <>
      <nav>
        <h3>GEOLOCATION</h3>
      </nav>
      <div>
        <div>
          <h2>User location tracking cyberSpace</h2>
        </div>
        <h1>login here</h1>
        <form onSubmit={handleSubmit} className={styles.login} method="post">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleChange}
          />
          <br />
          <button type="submit" id="sign">
            login
          </button>
          <label id="lab"></label>
          <div className={styles.btn}>
            <p>Don`t have account</p>
            <img src={mage} alt="Arrow" className={styles.img} />
            <Link to="/">
              <button type="button" className={styles.uniq}>
                sign up
              </button>
            </Link>
          </div>
        </form>
        <footer>
          <p>Zidio Development copyrights &copy; {new Date().getFullYear()} </p>
        </footer>
      </div>
    </>
  );
};

export default Login;
