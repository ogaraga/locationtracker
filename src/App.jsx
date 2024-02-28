import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Notification from './components/Notification';
import Alert from './components/Alert';
import Profile from './components/Profile';
import Dash from './components/Dashboard';
import History from './components/History';
import './App.css'
import Update from './components/Update';
import PageNotFound from './components/PageNotFound';
import { useContext } from 'react';
import UserContextApi from './context/userContext';
function App() {
  const {id} = useContext(UserContextApi)
  return (
    
<BrowserRouter>
    <Routes>      
      <Route path='/' element ={<Register/>} />
      <Route path='/home' element ={<Home/>} />
      <Route path='/register' index element ={<Register/>} />
      <Route path='/login'  element ={<Login/>} />
      <Route path={`/profile/${id}`} element ={<Profile/>} />
      
      <Route path='/alert'  element ={<Alert/>} />
      <Route path='/notification'  element ={<Notification/>} />
      <Route path='/dash'  element ={<Dash/>} />
      <Route path='/hist'  element ={<History/>} />
      <Route path={`/update/${id}`}  element ={<Update
      />} />
      <Route path='*'  element ={<PageNotFound/>} />
    </Routes>
</BrowserRouter>
  )
}

export default App
