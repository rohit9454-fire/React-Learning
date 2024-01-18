import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {
    const [login, setLogin] = useState(true);
    const onlineStatus = useOnlineStatus();

    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-item">
            <ul>
                <li>
                    Online Status:{onlineStatus ? "🟢" : "🔴"}
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li>Cart</li>
                <button className="login-btn" onClick={() => setLogin(!login)}>{login ? 'Login' : 'Logout'}</button>
            </ul>
        </div>
    </div>)
}

export default Header;