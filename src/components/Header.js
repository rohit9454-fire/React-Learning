import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [login, setLogin] = useState(true)


    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-item">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login-btn" onClick={() => setLogin(!login)}>{login ? 'Login' : 'Logout'}</button>
            </ul>
        </div>
    </div>)
}

export default Header;