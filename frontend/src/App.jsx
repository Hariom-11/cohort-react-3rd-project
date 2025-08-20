import { useEffect } from "react";
import axios from "./api/instance";

const App = () => {
  const getproduct = async()=>{
try{
 const res=await axios.get('/Products')
 console.log(red)
}
catch(error){
console.log(error);

  }
  useEffect(()=>{
    getproduct()
  },[])
  return (
    <div>App</div>
  )
}
}

export default App