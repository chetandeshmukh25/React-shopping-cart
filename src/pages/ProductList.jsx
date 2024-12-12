import { useContext } from "react";
import { shoppingCartContext } from "../context";
import ProductCard from '../component/product-card';


const ProductList = () => {
    const{productList, loading} = useContext(shoppingCartContext);
    // if(loading) return <h2>Loading product data...</h2>
    // console.log(productList);
    return(
        <>
        <h1 className="text-center mt-10">Product List page</h1>
        <div className="product_list_wrap mt-5">
        {
           loading ?  <h2>Loading product data...</h2>
        :
            productList && productList?.length>0 
            ? 
            productList.map(productItem => {
                return(
                    <div key={productItem.id} className="product_card_wrap">
                        <ProductCard product={productItem} />
                    </div>
                )
            })
            : <p>No Products!</p>
        }
        </div>
        </>
    )
}
export default ProductList;