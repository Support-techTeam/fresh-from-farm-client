import React from 'react';
import { Route, Routes } from 'react-router';
import CartMain from '../pages/cart/CartMain';
import ProductDetails from '../pages/shop/ProductDetails';
import ShopMain from '../pages/shop/ShopMain';
import GeneralLayout from './GeneralLayouts';
import ProtectedRoute from './ProtectedRoute';

const GeneralRoutes = () => {
  return (
    <Routes>
      <Route
        path="/shop"
        element={
          <ProtectedRoute>
            <GeneralLayout>
              <ShopMain />
            </GeneralLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/shop/product/*"
        element={
          <ProtectedRoute>
            <GeneralLayout>
              <ProductDetails />
            </GeneralLayout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <GeneralLayout>
              <CartMain />
            </GeneralLayout>
          </ProtectedRoute>
        }
      />
      {/* <Route
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
      /> */}
    </Routes>
  );
};

export default GeneralRoutes;
