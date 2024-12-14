import { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { shoppingCartContext } from "../context";

function Header(){
    const { cartItems } = useContext(shoppingCartContext);
    // const [itemCount, setItemCount] = useState(0);
    console.log("header console work!");
    useEffect(()=> {
        // let item_count = 0;
        // if(cartItems?.length > 0){
        //     console.log("one");
        //     for(let a=0;a<cartItems.length-1;a++){
        //         item_count = item_count + cartItems[a].quantity;
        //     }
        //     setItemCount(item_count);
        // }
        console.log("It worked!");
    },[cartItems])
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
                    <span><Link to="/cart">Cart<sup>{cartItems.item_count}</sup></Link></span>
                </div>
            </div>
        </header>
    )
}
export default Header;