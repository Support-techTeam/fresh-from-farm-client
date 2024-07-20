/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IconButton, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Button, styled } from '@mui/material';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import WishList from '../../components/products/WishList';

const CartMain = () => {
  const { cart, updateItemQuantity, removeItem } = useCart();

  const handleIncrement = (item: any) => {
    if (item.availiableQty >= item.quantity + 1) {
      updateItemQuantity(item.id, 1);
    }
  };

  const handleDecrement = (item: any) => {
    if (item.quantity - 1 > 0) {
      updateItemQuantity(item.id, -1);
    }
  };

  const handleRemove = (item: any) => {
    removeItem(item.id);
  };

  // Calculate Total Before Discount
  const totalBeforeDiscount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  // Calculate Total Discount
  const totalDiscount = cart.reduce((sum, item) => {
    const itemDiscount =
      ((item.price * Number(item.discount)) / 100) * item.quantity;
    return sum + itemDiscount;
  }, 0);

  // Calculate Total Tax
  const totalTax = cart.reduce((sum, item) => {
    const taxTotal = ((item.price * Number(item.tax)) / 100) * item.quantity;
    return sum + taxTotal;
  }, 0);

  // Calculate Total After Discount
  const totalAfterDiscount = totalBeforeDiscount - totalDiscount;

  // Calculate Grand Total
  const grandTotal = totalAfterDiscount + totalTax;

  return (
    <div className="">
      <Helmet>
        <title>Product Details | Fresh From Farm Shopping Page!</title>
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <main className="flex min-h-screen w-screen flex-col bg-white mt-0">
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Cart ({cart.length} {cart.length > 1 ? 'items' : 'item'})
            </h2>

            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
              <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                <div className="space-y-6">
                  {/* Products in cart */}
                  {cart && cart.length > 0 ? (
                    cart.map((product: any) => (
                      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <Link
                            to={`/shop/product/${product.name}`}
                            state={product}
                            className="text-base font-bold text-gray-900"
                          >
                            <img
                              className="h-24 w-24 rounded-lg object-cover object-center"
                              src={product?.imageSrc}
                              alt={product?.imageAlt}
                            />
                          </Link>

                          <label htmlFor="counter-input" className="sr-only">
                            Choose quantity:
                          </label>
                          <div className="flex items-center justify-between md:order-3 md:justify-end">
                            <div className="flex items-center justify-between md:justify-end border-[0.5px] border-gray-300 rounded-[44.12px] px-2 py-1">
                              <div className="flex items-center">
                                <IconButton
                                  variant="text"
                                  size="sm"
                                  onClick={() => handleDecrement(product)}
                                  disabled={product.quantity === 1}
                                >
                                  <MinusIcon
                                    className="h-4 w-4 font-bold"
                                    color="black"
                                  />
                                </IconButton>
                                <input
                                  type="text"
                                  id="counter-input-2"
                                  data-input-counter
                                  className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                  placeholder=""
                                  value={product.quantity}
                                />
                                <IconButton
                                  variant="text"
                                  size="sm"
                                  onClick={() => handleIncrement(product)}
                                  disabled={
                                    product.availiableQty - product.quantity <=
                                    0
                                  }
                                >
                                  <PlusIcon
                                    className="h-4 w-4 font-bold"
                                    color="black"
                                  />
                                </IconButton>
                              </div>
                            </div>
                            <div className="text-end md:order-4 md:w-32">
                              <p className="text-base font-bold text-gray-900 dark:text-white">
                                {product?.price_qty && product?.quantity
                                  ? new Intl.NumberFormat('en-US', {
                                      style: 'currency',
                                      currency: 'GBP',
                                      maximumFractionDigits: 2,
                                      minimumFractionDigits: 2,
                                    }).format(
                                      Number(product.price * product.quantity),
                                    )
                                  : new Intl.NumberFormat('en-US', {
                                      style: 'currency',
                                      currency: 'GBP',
                                      maximumFractionDigits: 2,
                                      minimumFractionDigits: 2,
                                    }).format(0)}
                              </p>
                            </div>
                          </div>

                          <div className="w-full min-w-0 flex-1 space-y-1 md:order-2 md:max-w-md">
                            <p>
                              <Link
                                to={`/shop/product/${product.name}`}
                                state={product}
                                className="text-base font-bold text-gray-900"
                              >
                                {product.name}
                              </Link>
                            </p>
                            <Typography className="text-base text-gray-500 cursor-default">
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

                            <div className="flex flex-row text-left items-start justify-start px-0 py-1 -ml-3">
                              <Button
                                className="text-red-600 gap-1"
                                onClick={() => handleRemove(product)}
                              >
                                <TrashIcon className="h-4 w-4 text-red-600" />
                                <span className="text-red-600 capitalize">
                                  Remove
                                </span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>
                      <Typography className="text-xl text-gray-500 cursor-default text-center">
                        Cart is empty
                      </Typography>
                    </div>
                  )}

                  {/* End of Products in cart */}
                </div>
              </div>

              <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    Order summary
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Original price
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          {cart
                            ? new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'GBP',
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              }).format(totalBeforeDiscount)
                            : new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'GBP',
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              }).format(0)}
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Discount
                        </dt>
                        <dd className="text-base font-medium text-green-600">
                          {cart
                            ? new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'GBP',
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              }).format(totalDiscount)
                            : new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'GBP',
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              }).format(0)}
                        </dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                          Tax
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          {cart
                            ? new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'GBP',
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              }).format(totalTax)
                            : new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'GBP',
                                maximumFractionDigits: 2,
                                minimumFractionDigits: 2,
                              }).format(0)}
                        </dd>
                      </dl>
                    </div>

                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-base font-bold text-gray-900 dark:text-white">
                        Total
                      </dt>
                      <dd className="text-base font-bold text-gray-900 dark:text-white">
                        {cart
                          ? new Intl.NumberFormat('en-US', {
                              style: 'currency',
                              currency: 'GBP',
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            }).format(grandTotal)
                          : new Intl.NumberFormat('en-US', {
                              style: 'currency',
                              currency: 'GBP',
                              maximumFractionDigits: 2,
                              minimumFractionDigits: 2,
                            }).format(0)}
                      </dd>
                    </dl>
                  </div>
                  {cart && cart?.length > 0 && (
                    <BootstrapButton variant="contained" disableRipple>
                      Checkout{' '}
                      {cart
                        ? new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'GBP',
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          }).format(grandTotal)
                        : new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'GBP',
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          }).format(0)}
                    </BootstrapButton>
                  )}

                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {' '}
                      or{' '}
                    </span>
                    <Link
                      to="/shop"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                    >
                      Continue Shopping
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:mt-8 md:block container mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Wish List
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8">
              <WishList />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CartMain;

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  textAlign: 'center',
  padding: '10px 12px',
  width: '100%',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#BFC831',
  borderColor: '#BFC831',
  borderRadius: '44px',
  fontFamily: [
    'Jost',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#BFC831',
    borderColor: '#BFC831',
    boxShadow: 'none',
  },
  '&:active': {
    backgroundColor: '#BFC831',
    borderColor: '#BFC831',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
