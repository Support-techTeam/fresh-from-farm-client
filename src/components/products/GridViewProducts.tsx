/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import '../../styles/shop.css';
import { Link } from 'react-router-dom';
import BaseDirectories from '../../base_directory/BaseDirectory';
import moment from 'moment';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useCart } from '../../context/CartContext';

function FabRoundedTooltipsRight({ product }) {
  const { cart, addItem } = useCart();

  const handleAddItem = () => {
    const item = cart.find((item) => item.id === product.id);
    let availableTotal = product?.availiableQty;
    if (item) {
      availableTotal =
        product?.availiableQty -
          cart.find((cartItem) => cartItem.id === product.id)?.quantity || 0;
      if (product.name.trim() !== '' && availableTotal > 0) {
        addItem(product, 1);
      }
    } else {
      if (product.name.trim() !== '' && availableTotal > 0) {
        addItem(product, 1);
      }
    }
  };

  return (
    <>
      {/*<!-- Component: Right sided fab button with tooltips --> */}
      <div className="absolute bottom-6 right-0 bg-[#fff5dc] hover:rounded-tl-lg rounded-bl-lg rounded-tl-lg">
        <div className="group flex flex-col-reverse w-10 hover:rounded-tl-lg">
          <button
            className="group rounded-bl-lg rounded-tl-lg hover:rounded-tl-none relative z-50 inline-flex h-10 w-10 items-center justify-center gap-2 self-center whitespace-nowrap bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none base-orange"
            disabled={product?.availiableQty <= 0}
            onClick={handleAddItem}
          >
            <span className="relative transition duration-300 only:-mx-6">
              <span className="sr-only">Button description</span>
              <img
                src={`${BaseDirectories.LOGOS_DIR}/mini_cart.svg`}
                alt="cart"
              />
            </span>
          </button>
          <button
            className="group relative inline-flex h-0 w-0 translate-y-2 items-center justify-center gap-2 self-center justify-self-center overflow-hidden whitespace-nowrap rounded bg-emerald-50 px-6 text-sm font-medium tracking-wide text-emerald-500 opacity-0 transition duration-300 hover:overflow-visible hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none group-hover:h-12 group-hover:w-12 group-hover:translate-y-0 group-hover:opacity-100"
            aria-describedby="tooltip-fab01"
          >
            <span className="relative only:-mx-6">
              <img
                src={`${BaseDirectories.LOGOS_DIR}/look_icon.svg`}
                alt="look"
                className=""
              />
            </span>
          </button>
          <button
            className="group relative inline-flex h-0 w-0 translate-y-2 items-center justify-center gap-2 self-center justify-self-center overflow-hidden whitespace-nowrap rounded bg-emerald-50 px-6 text-sm font-medium tracking-wide text-emerald-500 opacity-0 transition duration-300 hover:overflow-visible hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none group-hover:h-12 group-hover:w-12 group-hover:translate-y-0 group-hover:opacity-100"
            aria-describedby="tooltip-fab01"
          >
            <span className="relative only:-mx-6">
              <img
                src={`${BaseDirectories.LOGOS_DIR}/like_icon.svg`}
                alt="look"
                className=""
              />
            </span>
          </button>
          <button
            className="group relative inline-flex h-0 w-0 translate-y-2 items-center justify-center gap-2 self-center justify-self-center overflow-hidden whitespace-nowrap rounded bg-emerald-50 px-6 text-sm font-medium tracking-wide text-emerald-500 opacity-0 transition duration-300 hover:overflow-visible hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none group-hover:h-12 group-hover:w-12 group-hover:translate-y-0 group-hover:opacity-100"
            aria-describedby="tooltip-fab01"
          >
            <span className="relative only:-mx-6">
              <img
                src={`${BaseDirectories.LOGOS_DIR}/share_icon.svg`}
                alt="look"
                className=""
              />
            </span>
          </button>
        </div>
      </div>
      {/*<!-- End Right sided fab button with tooltips --> */}
    </>
  );
}

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
        <div className="absolute top-6 right-2 bg-[#FF6069] rounded-sm">
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
          } right-2 bg-[#C0DA71] rounded-sm`}
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

const GridViewProducts = ({
  paginatedProducts,
  layout,
}: {
  paginatedProducts: any[];
  layout: string;
}) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div
      className={`grid gap-4 grid-cols-1 ${
        layout === 'two-column' && paginatedProducts.length > 0
          ? 'xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1'
          : layout === 'three-column' && paginatedProducts.length > 0
          ? 'xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1'
          : layout === 'four-column' && paginatedProducts.length > 0
          ? 'xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1'
          : 'sm:grid-cols-1'
      }`}
    >
      {paginatedProducts.length > 0 ? (
        paginatedProducts.map((product, index) => (
          <Item
            key={index}
            elevation={0}
            className="relative border border-gray-100 hover:border-[#C0DA71] hover:border-[0.28px] rounded-lg p-0"
          >
            <Link
              to={`/shop/product/${product.name}`}
              state={product}
              className="block cursor-pointer bg-white rounded-lg image-container"
            >
              <img
                alt=""
                src={product.imageSrc}
                className="h-full min-h-[208px] w-full object-cover object-center group-hover:opacity-75 rounded-t-lg"
              />

              <div className="px-2 py-2 flex justify-between bg-white rounded-b-lg">
                <dl>
                  <div className="my-4 item-name">
                    <dt className="sr-only">name</dt>
                    <dd className="font-medium cursor-default">
                      {product.name}
                    </dd>
                  </div>
                  <div className="my-4">
                    <dt className="sr-only">Price/Qty</dt>
                    <dd className="text-sm text-gray-500 cursor-default item-price-per-qty">
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
                    </dd>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div>
                      <dt className="sr-only">Price</dt>
                      <dd className="text-sm text-gray-500 cursor-default item-price">
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
                            }).format(Number(product.price))}
                      </dd>
                    </div>
                    <div>
                      <dt className="sr-only">Original Price</dt>
                      <dd className="text-xs text-gray-500 line-through cursor-default item-discount">
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
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </Link>
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
            <FabRoundedTooltipsRight product={product} />
          </Item>
        ))
      ) : (
        <div className="text-center text-gray-600 py-4">No products found.</div>
      )}
    </div>
  );
};

export default GridViewProducts;
