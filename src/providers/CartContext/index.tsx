"use client";

import React, { useState, createContext, useContext } from "react";

import { Cart, ParentProps } from "@/types";

const useCartState = (initialCart: Cart) => useState<Cart>(() => initialCart);

const CartContext = createContext<ReturnType<typeof useCartState> | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);

  if (!ctx) {
    throw new Error("No context found. Check your provider's scope.");
  }

  return ctx;
};

interface IProps extends ParentProps {
  cart: Cart;
}

export const CartProvider = ({ cart, children }: IProps): JSX.Element => {
  const value = useCartState(cart);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
