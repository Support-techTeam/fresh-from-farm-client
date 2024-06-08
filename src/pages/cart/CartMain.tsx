import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumbs } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import BaseDirectories from '../../base_directory/BaseDirectory';

const CartMain = () => {
  return (
    <div className="">
      <Helmet>
        <title>Product Details | Fresh From Farm Shopping Page!</title>
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <main className="flex min-h-screen w-screen flex-col bg-white mt-0">
        <div
          className="flex flex-col w-screen items-center justify-center h-[189px]"
          style={{
            backgroundImage: `url(${BaseDirectories.IMAGES_DIR}/page_banner.png)`,
            backgroundSize: `${window.innerWidth >= 960 ? 'cover' : 'auto'}`,
            backgroundPosition: `${window.innerWidth >= 960 ? 'center' : ''}`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h1 className="breadcrumb-h1">Shop</h1>
          <Breadcrumbs>
            <Link to="/" className="opacity-60">
              Home
            </Link>
            <Link to="/shop" className="opacity-60">
              Shop
            </Link>
            <Link to="/cart" className="opacity-60">
              Cart
            </Link>
          </Breadcrumbs>
        </div>
        ProductDetails
      </main>
    </div>
  );
};

export default CartMain;
