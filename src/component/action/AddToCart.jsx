/* eslint-disable react/prop-types */
import { useState } from "react";
import { AddToCartForm } from "./components/AddToCartForm";
import { CartDisplay } from "./components/CartDisplay";
import { AddToCartFormUseFormState } from "./components/AddToCartFormUseFormState";

export default function AddToCart() {
  const [cart, setCart] = useState([]);

  const addToCart = async (formData, title) => {
    const id = String(formData.get("itemID"));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCart((prev) => [...prev, { id, title }]);
    return { id };
  };
  return (
    <>
      <CartDisplay cart={cart} />
      <AddToCartForm
        id={1}
        title={"Javascript: definitive way of adding to cart"}
        addToCart={addToCart}
      />
      <AddToCartForm
        id={2}
        title={"Python: Learn Django and Flask"}
        addToCart={addToCart}
      />
      <AddToCartFormUseFormState id={4} title={"Fruits: Apple"} />
      <AddToCartFormUseFormState id={3} title={"Eggs: Chicken"} />
    </>
  );
}
