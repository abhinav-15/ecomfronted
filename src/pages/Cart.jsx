import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from '../components/CartItem'
import { useEffect, useState } from "react";

const Cart = () => {

  const {cart}=useSelector((state)=>state);
  const [totalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price ,0));
  },[cart])
  return (
    <div  className="max-w-[830px] w-11/12 mx-auto ">
    
        {
            cart.length>0 ?
            (
              <div className="flex flex-row justify-between gap-11">
                  <div>
                    {
                      cart.map((item,index)=>{
                        return <CartItem key={item.id} item={item} itemIndex={index}/>
                      })
                    }
                  </div>
                  <div className="flex flex-col justify-between my-6">
                  <div>
                  <div className="text-green-500 text-xl font-semibold">Your Cart</div>
                    <div className="text-green-500 text-6xl font-semibold">Summary</div>
                    <p className="mt-6 font-medium text-lg">
                      <span>Total Items: {cart.length}</span>
                    </p>
                  </div>
                    
                    <div>
                    <p className="text-md">Total Amount:<span className="font-bold">${totalAmount}</span></p>
                    <button
                    className="w-full bg-green-600 rounded-full py-2 mt-4"
                    >Checkout Now</button>
                  </div>
                  </div>
                 
                 
              </div>
            ):
            (<div>
              <h2>Cart Empty</h2>
              <Link to='/'>
              <button>Shop Now</button>
              </Link>
             
            </div>)
        }
    </div>
  );
};

export default Cart;
