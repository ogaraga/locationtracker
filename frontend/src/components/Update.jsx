import { useContext } from "react";
import UserContextApi from "../context/userContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const {user, setUser, modal, setModal } = useContext(UserContextApi);

  const value = `/profile/${user.userId}`;

  const handleChange = (e) => {
    // e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
        try {
      await axios
      .put(`https://locationtracker-api.vercel.app/register/${user.userId}`, user)
      .then((res) => {
        if (res.data) {
          alert("Profile_Updated_successfully");
          navigate(`/update/${user.userId}`);
          setModal(!modal);
         }
      })
      .catch((err) => {
        if (err) {
          alert(err.message);
          navigate(`/profile/${user.userId}`);
          setModal(modal);
        }
      });
    } catch (error) {
      alert(error.message)
      navigate(`/profile/${user.userId}`);
      setModal(modal);
    
    }
    
  };
  const navigate = useNavigate();
  const handleops = () => {
    setModal(!modal);
    navigate(`/profile/${user.userId}`);
  };
  return (
    <div>
      <h1>Update your Records here</h1>
      {!modal ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="userName"
            value={user.userName}
            onChange={handleChange}
            placeholder="enter your username"
            autoComplete="off"
            style={{ margin: "10px", padding: "10px" }}
            required
          />
          <br />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="enter your email"
            autoComplete="off"
            style={{ margin: "10px", padding: "10px" }}
            required
          /> <br />
         
          <button type="submit" style={{ margin: "10px", padding: "10px" }}>
            Save
          </button>
        </form>
      ) : (
        <Link to={value}>
          <button onClick={handleops}>
            Dashboard
          </button>
        </Link>
      )}
      <footer>
        <p>Zidio Development copyrights &copy; {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
};

export default Update;
