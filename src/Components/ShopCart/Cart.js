import React, { useContext } from "react";
import { shorten } from "./../helpers/functions";
import { CartContext } from "./../context/CartContextProvider";
import "./Cart.css";

const Cart = (props) => {
  const { dispatch } = useContext(CartContext);

  const { image, title, price, quantity } = props.data;
  console.log(title);

  return (
    <div className=" cart-basket-container ">
      <img src={image} alt="product" className="productImage " />
      <div className="data">
        <h6>{shorten(title)}</h6>
        <div className="buttonContainer-cart">
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
          >
            +
          </button>
          <span className="quantity">{quantity}</span>
          {quantity > 1 ? (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: props.data })
              }
            >
              -
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: props.data })
              }
            >
              <i className="fa fa-trash"></i>
            </button>
          )}
        </div>
      </div>
      <p className="price-cart-shop">{price.toLocaleString()} تومان</p>
    </div>
  );
};

export default Cart;
