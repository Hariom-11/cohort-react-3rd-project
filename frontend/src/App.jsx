import { useEffect } from "react";
import axios from "./api/AxiosConfig";
import Main_routes from "./routes/Main_routes";
import Nav from "./components/Nav";


const App = () => {
  console.log(data)
  useEffect(() => {

  }, [])


  return (
    <div>
      <Nav/>
      <Main_routes/>
    </div>
  )
}


export default App