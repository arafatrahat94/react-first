import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  let total = 0;
  let quantitya = 0;
  for (let product of cart) {
    product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    quantitya = quantitya + product.quantity;
    // console.log(total);
  }
  let totalShipping = 0;
  for (let Shipping of cart) {
    totalShipping = totalShipping + Shipping.shipping;
    // console.log(totalShipping);
  }
  const tax = ((total * 7) / 100).toFixed(2);
  const grandTotal = (total + parseFloat(tax) + totalShipping).toFixed(2);
  console.log(props.cart);
  return (
    <div className="">
      <div className="w-9/12 mx-auto ">
        <h4 className="text-3xl font-medium my-6 text-center uppercase">
          order summery
        </h4>
        <h1 className="font-medium mt-28 text-2xl">
          Selected Items: {quantitya}
        </h1>
        <h1 className="font-medium mt-2 text-2xl">Total Price: ${total}</h1>
        <h1 className="font-medium mt-2 text-2xl">
          Total Shipping Charge: ${totalShipping}
        </h1>
        <h1 className="font-medium mt-2 text-2xl">Tax: ${tax}</h1>
        <h1 className="font-semibold mt-2 text-3xl">
          Grand Total: ${grandTotal}
        </h1>
      </div>
    </div>
  );
};

export default Cart;
<div className="w-9/12 mx-auto ">
  <h4 className="text-3xl font-medium my-6 text-center uppercase">
    order summery
  </h4>
  <h1 className="font-medium mt-28 text-2xl">Selected Items: </h1>
  <h1 className="font-medium mt-2 text-2xl">Total Price: $</h1>
  <h1 className="font-medium mt-2 text-2xl">Total Shipping Charge: $</h1>
  <h1 className="font-medium mt-2 text-2xl">Tax: $</h1>
  <h1 className="font-semibold mt-2 text-3xl">Grand Total: $</h1>
</div>;
