import { createContext, useEffect, useState } from "react";

export const shoppingCartContext = createContext(null);

const ShoppingCartProvider = ({children}) => {
    const[name, setName] = useState('Chetan');
    const[productList, setProductList] = useState(null);
    const[loading, setLoading] = useState(true);
    const[cartItems, setCartItems] = useState([]);
    // console.log(cartItems);

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
        
        
        // const resultAPI = ''; 
        // fetch('https://dummyjson.com/productsa')
        // .then((res) => {
        //     console.log(res);
        //     if(!res.ok){
        //         throw new Error('HTTP error status : '+ res.status)
        //     }else{
        //         return res.json();
        //     }
        // })
        // .then((result) => console.log(result))
        // .catch((err) => console.log(err.message))
    }
    useEffect(() => {
        // console.log("1");
        fetchProductList();
        let getCartData = localStorage.getItem('cart-data');
        getCartData = JSON.parse(getCartData);
        setCartItems(getCartData);
        console.log("2 : ", getCartData);
        return (() => {})
    },[]);

    return <shoppingCartContext.Provider value={{
            name,
            productList, 
            loading, 
            cartItems, 
            setCartItems
        }}>
        {children}
    </shoppingCartContext.Provider>
}
export default ShoppingCartProvider;