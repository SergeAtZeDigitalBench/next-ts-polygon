"use client";

import { useCart } from "@/providers/CartContext";
import { type Cart } from "@/types";

interface Props {
  addToCartAction: () => Promise<Cart>;
}

const AddToCart = ({ addToCartAction }: Props) => {
  const [_, setCart] = useCart();

  return (
    <button
      className="mt-6 px-8 py-2 text-lg font-bold text-white bg-blue-800 rounded-lg"
      onClick={async () => {
        const updatedCart = await addToCartAction();
        setCart(updatedCart);
      }}
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;
