import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <div className="header_wrapper">
                <div className="logo_wrap">
                    <h4>Logo</h4>
                </div>
                <div className="nav_wrap">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/all-products">All Product</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="header_icons_wrap">
                    <span><Link to="/cart">Cart</Link></span>
                </div>
            </div>
        </header>
    )
}
export default Header;