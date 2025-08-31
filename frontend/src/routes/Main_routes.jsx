import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Product from "../pages/Product"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Create_product from "../pages/admin/Create_product"
import Product_details from "../pages/admin/Product_details"
const Main_routes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<Product_details />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/create-product" element={<Create_product />} />
        </Routes>
    )
}

export default Main_routes