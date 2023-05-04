import React from "react";
import "./Cart.css";

function Cart(props) {
  const { cart } = props;
  let total = 0;
  for (const product of cart) {
    total = total + product.price;
  }

  const Shipping = 15;
  const tax = (total + Shipping) * 10;
  const grandTotal = total + Shipping + tax;
  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Items Ordered:{props.cart.length} </h5>
      <br />
      <p>Total: {total.toFixed(2)} $ </p>
      <p>Shipping: {Shipping} $ </p>
      <p>Tax: {tax.toFixed(2)} $ </p>
      <h4 className="GT">Grand Total: {grandTotal.toFixed(2)} $ </h4>
    </div>
  );
}

export default Cart;
