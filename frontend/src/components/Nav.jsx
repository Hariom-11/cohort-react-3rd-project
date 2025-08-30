import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

NavLink

const Nav = () => {
    const user = useSelector((state)=>state.userReducer.user)
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            {user?<>
            <NavLink to="/admin/create-product">Create Product</NavLink>
            </>:<>
            <NavLink to="/login">Login</NavLink>
            </>}
            
            
        </nav>
    )
}

export default Nav