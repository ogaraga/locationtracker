import axios from "axios";
import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import mage from "../assets/arrow.png";
import { useContext } from "react";
import UserContextApi from "../context/userContext";
const Register = () => {
  const { user, setUser } = useContext(UserContextApi);
  const navigate = useNavigate();
  const handleChange = (ev) => {
    setUser({ ...user, [ev.target.name]: ev.target.value });
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();

    let result = async () => {
      const dValue = {
        userName: user.userName,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
        _id: user._id,
      };
      await axios
        .post("http://localhost:5000/register", dValue)
        .then((res) => res.json(res.data));
    };
    if (
      result() &&
      user.password == user.confirmPassword &&
      user.password.length >= 3
    ) {
      document.getElementById("lab").innerHTML =
        "Wait, creating your profile...";
      document.getElementById("lab").style.color = "green";
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } else {
      document.getElementById("lab").innerHTML = "Invalid input";
      document.getElementById("lab").style.color = "red";
      navigate("/register");
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
        <h1>Sign up here</h1>
        <form onSubmit={handleSubmit} className={styles.register}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="userName"
            placeholder="Enter your name"
            value={user.userName}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <br />
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <br />
          <label htmlFor="username">confirmPassword:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter your confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <br />
          <button type="submit" id="sign">
            Sign Up
          </button>
          <label id="lab"></label>
          <div className={styles.btn}>
            <p>Already have account</p>
            <img src={mage} alt="Arrow" className={styles.img} />
            <Link to="/login">
              <button type="button" className={styles.uniq}>
                login
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

export default Register;
