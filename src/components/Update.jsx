import { useContext} from "react";
import UserContextApi from "../context/userContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const { id, user, setUser, modal, setModal } = useContext(UserContextApi);
  
  const value = `/profile/${id}`;

  const handleChange = (e) => {
    // e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put('http://localhost:5000/profile/'+id, user)
      .then((res) => res.json(res.data)
      )
      .catch((err) => console.log(err));
    setModal(!modal);
  };
  const navigate = useNavigate()
  const handleops =()=>{
    setModal(!modal)
navigate(`/profile/${id}`)
  }
  return (
    <div>
      <h1>Update your Records here</h1>
      {modal ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="UserName"
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
          />
          <br />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="enter your password"
            autoComplete="off"
            style={{ margin: "10px", padding: "10px" }}
            required
          />
          <br />
          <button type="submit" style={{ margin: "10px", padding: "10px" }}>
            Save
          </button>
        </form>
      ) :  <Link to= {value}>
        
      <button onClick={handleops}> Account now updated click here to go back</button>
      </Link>
      }
      <footer>
        <p>Zidio Development copyrights &copy; {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
};

export default Update;
