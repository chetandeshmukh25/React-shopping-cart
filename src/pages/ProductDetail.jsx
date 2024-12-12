import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { shoppingCartContext } from '../context';

const ProductDetail = () => {
    const {id} = useParams();
    const{cartItems, setCartItems} = useContext(shoppingCartContext);
    // console.log(id);
    const[productData, setProdudctData] = useState(null);
    const[loading, setLoading] = useState(true);

    async function fetchSingleProduct(){
        try {
            const responseAPI = await fetch(`https://dummyjson.com/products/${id}`);
            if(!responseAPI.ok){
                throw new Error("HTTP error status : "+responseAPI.status)
            }
            const result = await responseAPI.json();
            // console.log(result);
            if(result){
                setProdudctData(result);
            }
        } catch (error) {
            console.log(error.message);            
        } finally{
            setLoading(false);
        }
    }

    const handleAddToCart = async() => {
        console.log('clicked add to cart.');
        const copyCartItems = [...cartItems];
        const currentPrd = productData;
        const findPrdIndex = copyCartItems.findIndex(item => item.id === currentPrd.id);

        if(findPrdIndex === -1){
            currentPrd.quantity = 1;
            currentPrd.total = currentPrd.price * currentPrd.quantity;
            copyCartItems.push(currentPrd);
        }else{
            copyCartItems.map(item => {
                if(item.id === currentPrd.id){
                    item.quantity = item.quantity + 1;
                    item.total = item.price * item.quantity;
                }
            })
        }
        
        // console.log(copyCartItems);
        setCartItems(copyCartItems);
        localStorage.setItem('cart-data', JSON.stringify(copyCartItems))
    }

    useEffect(() => {
        fetchSingleProduct();
    },[id])

    

    return(
        <>
            {loading ? <h2>Loading...</h2>
            :
            <div className='product_container'>
                <div className="prd_img_wrap">
                    <img src={productData.thumbnail} />
                </div>
                <div className='prd_info_wrap'>
                    <h1>{productData.title}</h1>
                    <p>{productData.price}</p>
                    <div className='prd_desc'>
                        {productData.description}
                    </div>
                    <button onClick={handleAddToCart}>Add To Cart</button>
                </div>
                
            </div>
            }
        </>
    )
}
export default ProductDetail;