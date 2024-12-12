import { useContext } from 'react';
import { shoppingCartContext } from "../context";

const Cart = () => {
    const {cartItems} = useContext(shoppingCartContext);
    console.log(cartItems);
    let subtotal = 0;
    if(cartItems.length>0){
     cartItems?.map((val) => {
        subtotal = subtotal + val.total;
     });
    }

    return(
        <div className="cart_page container mx-auto">
            <h2 className='text-center text-2xl p-5'>Cart Page</h2>
            <div className="cart_wrapper">
                <div className="cart_data_wrap">
                <div className="cart_data_list">
                    {cartItems?.length > 0 ? 
                        
                            cartItems.map((item,key) => {
                                return(
                                    <div key={key} className='cart_item'>
                                        <div className='cart_item_img'>
                                            <img src={item.thumbnail} />
                                        </div>
                                        <div className='cart_item_info'>
                                            <h4 className='font-bold'>{item.title}</h4>
                                            <p>{item.price}</p>
                                        </div>
                                        <div className='cart_item_action'>
                                            <p>{item.total}</p>
                                            <span>Delete</span>
                                        </div>
                                    </div>
                                )
                            })
                        
                    : 
                        <p>No Products</p>
                    }
                    </div>
                </div>
                <div className="cart_info_wrap">
                    <h4>Subtotal : <span>{subtotal}</span></h4>
                </div>
            </div>
        </div>
    )
}
export default Cart;