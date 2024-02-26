import styles from "./Login.module.css";
import mage from "../assets/arrow.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext} from "react";
import axios from "axios";
import UserContextApi from "../context/userContext";
import Users from "../../backend/User";

const Login = () => {
  
    const {user, setUser} = useContext(UserContextApi);
    
  const handleChange = (ev) => {
     setUser({ ...user, [ev.target.name]: ev.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const fetchData = async () => {
      await axios
        .post("http://localhost:5000/login",user)
        .then(res => setUser(res.data)).catch(err=>console.log(err));
    };
    
    
    let myData = [];
    myData.push(Users);
    myData.map((item, idx) => {<span key={idx}>
      <p>{item.email} </p>
      <p>{item.password} </p>
    </span>});
    
    if (fetchData() && myData.email ===user.email && myData.password === user.password) {
      
      document.getElementById("lab").innerHTML = "internal error occurred!";
      document.getElementById("lab").style.color = "red";
      navigate("/home");
    } else if (fetchData() && myData.email !== undefined && myData.password !== undefined) {
      document.getElementById("lab").innerHTML = "Invalid user";
      document.getElementById("lab").style.color = "red";
      navigate("/home");
    } else {
      document.getElementById("lab").innerHTML = "Wait, loging in ...";
      document.getElementById("lab").style.color = "green";
      setTimeout(() => {
        navigate("/home");
      }, 5000);
    }
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
        <form onSubmit={handleSubmit} className={styles.login}>
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
            <img src={mage} alt="Arrow" className ={styles.img} />
            <Link to="/register">
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
