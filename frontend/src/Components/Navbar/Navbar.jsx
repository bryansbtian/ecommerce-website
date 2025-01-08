import React, {useContext, useRef, useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {

    const [menu,setMenu] = useState("home");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <Link to='/' style={{textDecoration: 'none'}}><div className="nav-logo">
                <img src={logo} alt="" />
                <p>pasarbunga</p>
            </div></Link>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("fresh")}}><Link style={{textDecoration: 'none'}} to='/fresh'>Fresh Flowers</Link>{menu==="fresh"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("artificial")}}><Link style={{textDecoration: 'none'}} to='/artificial'>Artificial Flowers</Link>{menu==="artificial"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')?
                <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Log out</button>
                :<button><Link style={{textDecoration: 'none'}} to='/login'>Login</Link></button>}
                <Link style={{textDecoration: 'none'}} to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar