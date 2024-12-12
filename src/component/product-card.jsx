import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
    const navigate = useNavigate();

    return (
        
            <div className="product_card">
                <img loading="lazy" src={product.thumbnail} />
                <div className="product_info">
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <button className="text-white" onClick={() => navigate(`/product-detail/${product.id}`)}>View Detail</button>
                </div>
            </div>
    )
}
export default ProductCard;