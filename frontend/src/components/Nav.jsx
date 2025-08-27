import { NavLink } from "react-router-dom"

NavLink

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/login">Login</NavLink>
        </nav>
    )
}

export default Nav