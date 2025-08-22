import { useEffect } from "react";
import axios from "./api/AxiosConfig";
import { asyncgetuser } from "./store/User_action";

const App = () => {

  
  useEffect(() => {
    asyncgetuser()
  }, [])


  return (
    <div>App</div>
  )
}


export default App