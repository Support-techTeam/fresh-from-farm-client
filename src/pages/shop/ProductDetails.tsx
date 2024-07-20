/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Breadcrumbs,
  Button,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import BaseDirectories from '../../base_directory/BaseDirectory';
import moment from 'moment';
import NumberInput from '../../components/common/NumberInput';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { XCircleIcon } from '@heroicons/react/20/solid';

function FabRoundedTooltipsTopRight({
  discount,
  productPost,
}: {
  discount: number;
  productPost: boolean;
}) {
  return (
    <>
      {/*<!-- Component: Top Right sided fab button with tooltips --> */}
      {discount > 0 && (
        <div className="absolute top-6 right-2 md:right-8 bg-[#FF6069] rounded-sm">
          <div className="group flex justify-center items-center w-full h-8 p-1 hover:rounded-tl-lg">
            <p className="discount-tooltip text-sm">-{discount}%</p>
          </div>
        </div>
      )}
      {}
      {productPost && (
        <div
          className={`absolute ${
            discount > 0 ? 'top-16' : 'top-6'
          } right-2 md:right-8 bg-[#C0DA71] rounded-sm`}
        >
          <div className="group flex justify-center items-center w-full h-8 p-1 hover:rounded-tl-lg">
            <p className="discount-tooltip text-sm">NEW</p>
          </div>
        </div>
      )}

      {/*<!-- End Right sided fab button with tooltips --> */}
    </>
  );
}

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state || {};
  const [open, setOpen] = useState('description');

  const handleTabOpen = (tabCategory: any) => {
    setOpen(tabCategory);
  };

  const TabContentDescription = ({
    open,
    tabCategory,
    details,
    prodImg,
  }: any) => {
    return (
      <div>
        <div
          className={`p-6 text-base leading-relaxed text-body-color justify-center items-center flex flex-col gap-4 ${
            open === tabCategory ? 'block' : 'hidden'
          } `}
        >
          {details}
          {prodImg && (
            <img
              alt=""
              src={prodImg}
              className="w-[60%] h-[60%] object-contain object-center md:px-4 mb-4 rounded-xl"
            />
          )}
        </div>
      </div>
    );
  };

  const TabContentReview = ({ open, tabCategory, details }: any) => {
    return (
      <div>
        <div
          className={`p-6 text-base leading-relaxed text-body-color dark:text-dark-6 ${
            open === tabCategory ? 'block' : 'hidden'
          } `}
        >
          {details}
        </div>
      </div>
    );
  };

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
          <Breadcrumbs className="flex flex-wrap">
            <Link to="/" className="opacity-60">
              Home
            </Link>
            <Link to="/shop" className="opacity-60">
              Shop
            </Link>
            <Link to="/shop/product" className="opacity-60">
              {product.name}
            </Link>
          </Breadcrumbs>
        </div>
        <section className="py-10 px-8">
          <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
            <div className="relative border border-white rounded-lg p-0">
              <img
                alt=""
                src={product.imageSrc}
                className="max-h-[466px] h-[256px] md:h-[320px] lg:h-[420px]  w-[100%] object-fit object-center md:px-4 mb-4 rounded-xl"
              />

              <FabRoundedTooltipsTopRight
                discount={
                  product?.discount && Number(product?.discount) > 0
                    ? Number(product?.discount)
                    : 0
                }
                productPost={
                  product?.updatedAt &&
                  moment(moment(new Date()).format('YYYY-MM-DD')).diff(
                    moment(moment(product?.updatedAt).format('YYYY-MM-DD')),
                    'days',
                  ) > 4
                    ? false
                    : true
                }
              />
            </div>
            <div>
              <Typography className="mb-4" variant="h3">
                {product.name}
              </Typography>
              <div className="my-2">
                <dt className="sr-only">Price/Qty</dt>
                <Typography className="text-md text-gray-500 cursor-default">
                  {product.price_qty
                    ? new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'GBP',
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      }).format(Number(product.price_qty))
                    : new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'GBP',
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      }).format(0)}{' '}
                  / {product.unit}
                </Typography>
              </div>

              <div className="my-2 flex items-center gap-2">
                {/* <Rating value={4} className="text-amber-500" /> */}
                <Typography className="!text-sm font-normal !text-gray-700">
                  <span className="font-bold">
                    {Math.ceil(Math.random() * 40)}
                  </span>{' '}
                  Customer reviews | Sold:
                  <span className="font-bold">
                    {' '}
                    {Math.ceil(Math.random() * 40)}
                  </span>
                </Typography>
              </div>
              <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
                {product.description}
              </Typography>
              {product.availiableQty > 0 ? (
                <div className="flex items-center align-middle gap-2 my-2">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <Typography className="font-normal text-base leading-[27px] !text-green-500">
                    In Stock
                  </Typography>
                </div>
              ) : (
                <div className="flex items-center align-middle gap-2 my-2">
                  <XCircleIcon className="h-6 w-6 text-red-500" />
                  <Typography className="font-normal text-base leading-[27px] !text-red-500">
                    Out of Stock
                  </Typography>
                </div>
              )}
              <div className="flex gap-4 items-center my-2">
                <div className="flex flex-wrap gap-4 items-center my-2">
                  <div>
                    <dt className="sr-only">Price</dt>
                    <Typography className="text-sm text-gray-500 cursor-default item-price">
                      {product.discount && product.price
                        ? Number(product.discount) > 0
                          ? new Intl.NumberFormat('en-US', {
                              style: 'currency',
                              currency: 'GBP',
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            }).format(
                              Number(product.price) -
                                (Number(product.price) *
                                  Number(product.discount)) /
                                  100,
                            )
                          : new Intl.NumberFormat('en-US', {
                              style: 'currency',
                              currency: 'GBP',
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            }).format(Number(product.price))
                        : new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'GBP',
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          }).format(0)}
                    </Typography>
                  </div>
                  <div>
                    <dt className="sr-only">Original Price</dt>
                    <Typography className="text-xs text-gray-500 line-through cursor-default item-discount">
                      {product.price &&
                      product.discount &&
                      Number(product.discount) > 0
                        ? new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'GBP',
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          }).format(Number(product.price))
                        : null}
                    </Typography>
                  </div>
                  |{/* <!-- shipping notice - start --> */}
                  <div className="flex items-center gap-1 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                      />
                    </svg>

                    <span className="text-xs">Free delivery from £100</span>
                  </div>
                  {/* <!-- shipping notice - end --> */}
                </div>
              </div>
              <div className="mb-4 flex flex-wrap w-full items-center gap-3">
                <NumberInput min={1} max={product?.availiableQty} />
                <Button
                  className="bg-[#A4BC46] rounded-[44.12px] flex items-center gap-2 w-auto"
                  disabled={product?.availiableQty <= 0}
                >
                  {/* <ShoppingCartIcon className="h-6 w-6" /> */}
                  <img
                    src={`${BaseDirectories.LOGOS_DIR}/mini_cart.svg`}
                    alt="cart"
                  />
                  Add to Cart
                </Button>
                <IconButton color="gray" variant="text" className="shrink-0">
                  <HeartIcon className="h-6 w-6" />
                </IconButton>
              </div>
              <div className="flex flex-col my-6 gap-6">
                <div className="flex flex-row w-full items-center gap-6 md:gap-1">
                  <Typography className="sr-only">Size</Typography>
                  <p className="text-sm text-gray-500 cursor-default item-price-per-qty">
                    Size: <span className="text-gray-700">{product.size}</span>
                  </p>
                </div>
                <div className="flex flex-row w-full items-center gap-6 md:gap-1">
                  <Typography className="sr-only">Origin</Typography>
                  <p className="text-sm text-gray-500 cursor-default item-price-per-qty">
                    Origin:{' '}
                    <span className="text-gray-700">{product.origin}</span>
                  </p>
                </div>
                <div className="flex flex-row w-full items-center gap-6 md:gap-1">
                  <Typography className="sr-only">Product Code</Typography>
                  <p className="text-sm text-gray-500 cursor-default item-price-per-qty">
                    Product Code:{' '}
                    <span className="text-gray-700">
                      {product.product_code}
                    </span>
                  </p>
                </div>
                <div className="flex flex-row w-full items-center gap-6 md:gap-1">
                  <Typography className="sr-only">Product Code</Typography>
                  <p className="text-sm text-gray-500 cursor-default item-price-per-qty">
                    Tag:{' '}
                    <span className="text-gray-700">{product.category}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <>
          <section className="mx-auto w-full px-8">
            <div className="mx-auto container ">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                  <div className="mb-14 w-full">
                    <div className="flex flex-col justify-evenly items-center gap-4 text-center rounded-lg border border-[#E4E4E4] px-4 py-3 dark:border-dark-3 sm:flex-row">
                      <a
                        onClick={() => handleTabOpen('description')}
                        className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 w-full text-gray-500 ${
                          open === 'description'
                            ? 'bg-[#BFC831] text-white'
                            : 'text-body-color hover:bg-white hover:text-[#BFC831]'
                        }`}
                      >
                        DESCRIPTION
                      </a>
                      <a
                        onClick={() => handleTabOpen('reviews')}
                        className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 w-full text-gray-500  ${
                          open === 'reviews'
                            ? 'bg-[#BFC831] text-white'
                            : 'text-body-color hover:bg-white hover:text-[#BFC831]'
                        }`}
                      >
                        REVIEWS
                      </a>
                    </div>
                    <TabContentDescription
                      details={product.description}
                      prodImg={product.imageSrc}
                      tabCategory="description"
                      open={open}
                    />
                    <TabContentReview
                      details=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! "
                      tabCategory="reviews"
                      open={open}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </main>
    </div>
  );
};

export default ProductDetails;
