import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Product from "../pages/Product"
import Login from "../pages/Login"
import Register from "../pages/Register"
const Main_routes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default Main_routes