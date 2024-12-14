import { createContext, useEffect, useState } from "react";

export const shoppingCartContext = createContext(null);

const ShoppingCartProvider = ({children}) => {
    const[name, setName] = useState('Chetan');
    const[productList, setProductList] = useState(null);
    const[loading, setLoading] = useState(true);
    const[cartItems, setCartItems] = useState({
        item_count: 0,
        total_price: 0,
        items: []
    });
    // const[cartValue, setCartValue] = useState([]);
    console.log(cartItems);

    const fetchProductList = async() => {
        
        try {
            const responseAPI = await fetch('https://dummyjson.com/products');
            // console.log(responseAPI)
            if(!responseAPI.ok){
                throw new Error(`HTTPS error ${responseAPI.status}`);
            }
            const result = await responseAPI.json();
            // console.log(result);

            if(result && result?.products?.length > 0){
                setProductList(result.products);
            }
        } catch (error) {
            console.log(error.message);
        }finally{
            setLoading(false);
        }
        
    }
    const productAddToCart = (cart_data) => {
        console.log("get cart data : ", cart_data);
        setCartItems(cart_data);
        localStorage.setItem('cart-data', JSON.stringify(cart_data))
    }
    useEffect(() => {
        // console.log("1");
        fetchProductList();
        let getCartData = localStorage.getItem('cart-data');
        getCartData = JSON.parse(getCartData);
        console.log("2 : ", getCartData);
        if(getCartData != null){
            setCartItems(getCartData);
        }
        return (() => {})
    },[]);

    return <shoppingCartContext.Provider value={{
            name,
            productList, 
            loading, 
            cartItems, 
            productAddToCart
        }}>
        {children}
    </shoppingCartContext.Provider>
}
export default ShoppingCartProvider;