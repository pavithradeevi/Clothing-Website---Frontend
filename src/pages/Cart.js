// import React from 'react';
// import "./cart.css";
// import Checkout from '../components/Checkout';
// import { addToCart,deleteFromCart } from '../actions/cartActions';
// import { useDispatch, useSelector } from 'react-redux';

// export default function Cart() {
//   const cartstate = useSelector((state) => state.cartReducer);
//   const cartItems = cartstate.cartItems;
//   var subtotal = cartItems.reduce((x, item) => x + item.price, 0);

//   const dispatch = useDispatch();

//   return (
//     <div>
//       <div className="row justify-content-center p-2" data-aos="fade-down">
//       <div className="col-md-6">
//       <h2 style={{ fontSize: "40px"}}>
//         My Cart
//       </h2>
//       <hr/>
//       {cartItems.map((item)=>{
//         return(

//       <div className="flex-container">
//       <div className="text-left m-1 w-100">
//       <h1 style={{color:"red",fontSize:"20px"}}> 
//       {item.title}[{item.size}]</h1>
//       <h1>
//         Price:{item.quantity}*{item.prices[0][item.size]}={" "}
//       </h1>
//       <h1 style={{ display: "inline" }}>Quantity</h1>
//       <i 
//         className="fa fa-minus"
//         aria-hidden="true"
//         onClick={() => {
//                       dispatch(
//                         addToCart(item, item.quantity - 1, item.varient)
//                       );
//                     }}
//       />
//       <b>{item.quantity}</b>
//       <i 
//         className="fa fa-plus"
//         aria-hidden="true"
//         onClick={() => {
//                       dispatch(
//                         addToCart(item, item.quantity + 1, item.varient)
//                       );
//                     }}
//       />
//       <hr/>

//       </div>
//       <div className="m-1 w-100">
//       <img style={{height: "150px",width:"150px" }} 
//       src={item.img}
    
//       />

//       </div>
//       <div className="m-1 w-100">
//       <i className="fa fa-trash mt-5"
//         aria-hidden="true"

//         onClick={() => {
//                       dispatch(deleteFromCart(item));
//                     }}
//         />

//       </div>

//       </div>
//         );
//       })}
      

//       </div>
//       <div className="col-md-4 text-right">
//       <h2 style={{ fontSize: "30px" }}>Total Amount:{subtotal}</h2>
//       <Checkout subtotal={subtotal}/>
      

//       </div>

//       </div>
//     </div>
//   )
// }


import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";

export default function Cartscreen() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.price, 0);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="row justify-content-center p-2" data-aos="fade-down">
        <div className="col-md-6">
          <h2 style={{ fontSize: "40px"}}>My Cart</h2>
          <hr />
          {cartItems.map((item) => {
            return (
              <div className="flex-container">
                <div className="text-left m-1 w-100">
                  <h1>
                    {item.title} [{item.size}]
                  </h1>
                  <h1>
                    Price : {item.quantity} * {item.prices[0][item.size]} ={" "}
                    {item.price}
                  </h1>
                  <h1 style={{ display: "inline" }}>Quantity : </h1>
                  <i
                    className="fa fa-minus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity - 1, item.size)
                      );
                    }}
                  ></i>
                  <b>{item.quantity}</b>
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity + 1, item.size)
                      );
                    }}
                  ></i>
                  <hr />
                </div>
                <div className="m-1 w-100">
                  <img
                    src={item.img}
                    style={{height: "130px",width:"130px" }}
                  />
                </div>
                <div className="m-1 w-100">
                  <i
                    className="fa fa-trash mt-5"
                    aria-hidden="true"
                    onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4 text-right">
          <h2 style={{ fontSize: "30px" }}>Total Amount : {subtotal} /-</h2>
          <Checkout subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
}