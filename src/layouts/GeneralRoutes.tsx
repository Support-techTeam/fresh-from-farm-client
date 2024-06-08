import React from 'react';
import { Route, Routes } from 'react-router';
import CartMain from '../pages/cart/CartMain';
import ProductDetails from '../pages/shop/ProductDetails';
import ShopMain from '../pages/shop/ShopMain';
import GeneralLayout from './GeneralLayouts';

const GeneralRoutes = () => {
  return (
    <Routes>
      <Route
        path="/shop"
        element={
          <GeneralLayout>
            <ShopMain />
          </GeneralLayout>
        }
      />
      <Route
        path="/shop/product/*"
        element={
          <GeneralLayout>
            <ProductDetails />
          </GeneralLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <GeneralLayout>
            <CartMain />
          </GeneralLayout>
        }
      />
    </Routes>
  );
};

export default GeneralRoutes;
