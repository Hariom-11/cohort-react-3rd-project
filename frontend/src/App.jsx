import { useEffect } from "react";
import axios from "./api/AxiosConfig";
import Main_routes from "./routes/Main_routes";
import Nav from "./components/Nav";
import { asynccurrentuser } from "./store/actions/User_action";
import { useDispatch } from "react-redux";
import { asyncLoadProduct } from "./store/actions/Product_action";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(asyncLoadProduct())
    dispatch(asynccurrentuser())
  }, [])


  return (
    <div>
      <Nav />
      <Main_routes />
    </div>
  )
}


export default App