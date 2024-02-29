import { useContext } from "react"
import UserContextApi from "../context/userContext"

const PageNotFound = () => {
  const {user} = useContext(UserContextApi);
  return (
    <div style={{textAlign:"center"}}>
        <h2>Page could not be found or {user.userName || user.email || user.id} may have been deleted!</h2>
        <p>Error 404</p>

    </div>
  )
}

export default PageNotFound