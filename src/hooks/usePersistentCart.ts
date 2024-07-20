import { useState, useEffect, useMemo } from 'react';

interface Product {
  id: number;
  name: string;
  price_qty: number;
  price: number;
  discount: string;
  unit: string;
  imageSrc: string;
  imageAlt: string;
  bestSeller: boolean;
  specialOffer: boolean;
  createdAt: string;
  updatedAt: string;
  size: string;
  origin: string;
  product_code: string;
  category: string;
  availiableQty: number;
  criticalQty: number;
  tax: number;
  reviews: {
    name: string;
    rating: number;
    createdAt: string;
    text: string;
  }[];
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

const usePersistentCart = () => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Get cart from localStorage or initialize with an empty array
    const savedCart = localStorage.getItem('f3_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('f3_cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (item: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateItemQuantity = (itemId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(0, item.quantity + quantity) }
          : item,
      ),
    );
  };

  const removeItem = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calculate the total quantity of items in the cart
  const totalQuantity = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  return {
    cart,
    totalQuantity,
    addItem,
    updateItemQuantity,
    removeItem,
    clearCart,
  };
};

export default usePersistentCart;
