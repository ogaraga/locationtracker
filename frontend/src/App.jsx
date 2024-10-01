import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Notification from './components/Notification';
import Alerts from './components/Alerts';
import Profile from './components/Profile';
import Dash from './components/Dashboard';
import History from './components/History';
import './App.css'
import Update from './components/Update';
import PageNotFound from './components/PageNotFound';
import { useContext } from 'react';
import UserContextApi from './context/userContext';



function App() {
  const {user} = useContext(UserContextApi)

   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Register />} />
         <Route path={`/home/${user.userId}`} element={<Home />} />
         <Route path="/register" index element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path={`/profile/${user.userId}`} element={<Profile />} />
         <Route path="/alerts" element={<Alerts />} />
         <Route path="/notification" element={<Notification />} />
         <Route path="/dash" element={<Dash />} />
         <Route path="/hist" element={<History />} />
         <Route path={`/update/${user.userId}`} element={<Update />} />
         <Route path="*" element={<PageNotFound />} />
       </Routes>
     </BrowserRouter>
   );
}

export default App
