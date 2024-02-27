import { useContext, useEffect } from "react";
import UserContextApi from "../context/userContext";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Update = () => {
    const {_id} =useParams();
  const { user, setUser, modal, setModal } = useContext(UserContextApi);
  
  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(()=>{
    axios.get('http://localhost:5000/profile/'+_id).then(res=>setUser(res.data)).catch(err=>console.log(err))
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put('http://localhost:5000/profile/'+_id, user)
      .then((res) => res.json(res.data)
      )
      .catch((err) => console.log(err));
    setModal(!modal);
  };
  const handleops =()=>{
    setModal(!modal)
  }
  return (
    <div>
      <h1>Update your Records here</h1>
      {!modal ? (
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
      ) :  <Link to= {`/profile/`+_id}>
        
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
