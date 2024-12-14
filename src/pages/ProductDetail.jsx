import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { shoppingCartContext } from '../context';

const ProductDetail = () => {
    const {id} = useParams();
    const{cartItems, productAddToCart} = useContext(shoppingCartContext);
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
        const copyCart = cartItems;
        console.log("copy cart : ",copyCart);
        const copyCartItems = [...copyCart.items];
        const currentPrd = productData;
        let findPrdIndex = null;
        if(copyCartItems.length > 0){
            findPrdIndex = copyCartItems?.findIndex(item => item.id === currentPrd.id);
        }
        console.log("findPrdIndex : ",findPrdIndex);
        if(copyCartItems.length == 0 || findPrdIndex === -1){
            currentPrd.quantity = 1;
            currentPrd.total = currentPrd.price * currentPrd.quantity;
            copyCartItems.push(currentPrd);
            copyCart.total_price = copyCart.total_price + currentPrd.price;
            copyCart.item_count = copyCart.item_count + currentPrd.quantity;
        }else{
            
            copyCartItems.map(item => {
                if(item.id === currentPrd.id){
                    item.quantity = item.quantity + 1;
                    item.total = item.price * item.quantity;
                    copyCart.item_count = copyCart.item_count + 1;
                    copyCart.total_price = copyCart.total_price + item.price;
                }
            })
        }
        copyCart.items = copyCartItems;
        console.log("updated cart copy : ",copyCart);
        productAddToCart(copyCart);
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