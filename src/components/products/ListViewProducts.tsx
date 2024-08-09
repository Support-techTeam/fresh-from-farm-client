/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button, IconButton, Typography } from '@material-tailwind/react';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import NumberInput from '../common/NumberInput';
import BaseDirectories from '../../base_directory/BaseDirectory';
import { useCart } from '../../context/CartContext';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
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
        <div className="absolute top-6 md:top-16 lg:top-6 right-2 md:right-4 lg:right-4 bg-[#FF6069] rounded-sm">
          <div className="group flex justify-center items-center w-full h-8 p-1 hover:rounded-tl-lg">
            <p className="discount-tooltip text-sm">-{discount}%</p>
          </div>
        </div>
      )}
      {}
      {productPost && (
        <div
          className={`absolute ${
            discount > 0 ? 'top-16 md:top-28 lg:top-16' : 'top-16 lg:top-6'
          } right-2 md:right-4 bg-[#C0DA71] rounded-sm`}
        >
          <div className="group flex justify-center items-center w-full h-8 p-1 hover:rounded-tl-lg">
            <p className="discount-tooltip text-sm">NEW</p>
          </div>
        </div>
      )}
    </>
  );
}

const ListViewProducts = ({
  paginatedProducts,
  layout,
}: {
  paginatedProducts: any[];
  layout: string;
}) => {
  const theme = useTheme();

  const {
    cart,
    totalQuantity,
    addItem,
    updateItemQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const [quantity, setQuantity] = useState(1);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.primary,
  }));

  const handleIncrement = (value: any) => {
    const item = cart.find((item) => item.id === value.id);
    const availableTotal = value?.availiableQty;

    if (item) {
      const totalAvailableQuantity = value.availiableQty - item.quantity;

      if (totalAvailableQuantity > quantity) {
        setQuantity((prevQuantity) => prevQuantity + 1);
      }
    } else {
      if (availableTotal > quantity) {
        setQuantity((prevQuantity) => prevQuantity + 1);
      }
    }
  };

  const handleDecrement = (value: any) => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
    }

    const item = cart.find((item) => item.id === value.id);
    const availableTotal = value?.availiableQty;

    if (item) {
      if (item.quantity > 1) {
        setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
      }
    } else {
      if (quantity > 1) {
        setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
      }
    }
  };

  const handleAddItem = (newProduct: any) => {
    const item = cart.find((item) => item.id === newProduct.id);
    const availableTotal = newProduct?.availiableQty;
    if (item) {
      const totalAvailableQuantity = newProduct.availiableQty - item.quantity;
      if (totalAvailableQuantity > quantity) {
        addItem(newProduct, quantity);
      }
    } else {
      if (availableTotal > quantity) {
        addItem(newProduct, quantity);
      }
    }
  };

  return (
    <>
      {paginatedProducts.length > 0 ? (
        paginatedProducts.map((product, index) => (
          <Box
            display="flex"
            alignItems="center"
            justifyContent={'center'}
            className="w-full h-auto"
            key={index}
            component="section"
            my={1}
          >
            <Item
              elevation={0}
              className="border-gray-200 hover:border-[#C0DA71] hover:border-[0.28px] md:mx-2 px-0 py-2 h-full"
            >
              <div className="mx-auto flex flex-wrap md:flex-nowrap px-2 gap-4">
                <Link
                  to={`/shop/product/${product.name}`}
                  state={product}
                  className="block cursor-pointer"
                >
                  <div className="flex items-center mx-auto relative">
                    <img
                      alt="product-image"
                      className="max-h-[340px] min-h-[240px] md:h-3/5 lg:h-[340px] w-auto object-fit object-center rounded-lg py-2"
                      src={product.imageSrc}
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
                          moment(
                            moment(product?.updatedAt).format('YYYY-MM-DD'),
                          ),
                          'days',
                        ) > 4
                          ? false
                          : true
                      }
                    />
                  </div>
                </Link>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-0 mt-0 lg:mt-0">
                  <div>
                    <Link
                      to={`/shop/product/${product.name}`}
                      state={product}
                      className="block cursor-pointer"
                    >
                      <div className="my-4 item-name">
                        <dt className="sr-only">name</dt>
                        <dd className="font-medium cursor-default">
                          {product.name}
                        </dd>
                      </div>
                    </Link>
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

                    <div className="flex gap-4 items-center my-2">
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
                              }).format(product.price)}
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
                    </div>
                    <Typography className="!mt-4 text-sm font-normal leading-[27px] !text-gray-500 ">
                      {product.description}
                    </Typography>
                    <div className="flex md:flex-row flex-col my-6 gap-6 md:gap-0">
                      <div className="flex flex-row w-full items-center gap-6 md:gap-1">
                        <Typography className="sr-only">Size</Typography>
                        <p className="text-sm text-gray-500 cursor-default item-price-per-qty">
                          Size:{' '}
                          <span className="text-gray-700">{product.size}</span>
                        </p>
                      </div>
                      <div className="flex flex-row w-full items-center gap-6 md:gap-1">
                        <Typography className="sr-only">Origin</Typography>
                        <p className="text-sm text-gray-500 cursor-default item-price-per-qty">
                          Origin:{' '}
                          <span className="text-gray-700">
                            {product.origin}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-row w-full items-center gap-6 md:gap-1">
                        <Typography className="sr-only">
                          Product Code
                        </Typography>
                        <p className="text-sm text-gray-500 cursor-default item-price-per-qty">
                          Product Code:{' '}
                          <span className="text-gray-700">
                            {product.product_code}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 flex flex-wrap w-full items-center gap-3">
                      <div className="flex items-center justify-between md:justify-end border-[0.5px] border-gray-300 rounded-[44.12px] px-2 py-1">
                        <div className="flex items-center">
                          <IconButton
                            variant="text"
                            size="sm"
                            onClick={() => handleDecrement(product)}
                            disabled={quantity === 1}
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
                            defaultValue={1}
                            value={quantity}
                          />
                          <IconButton
                            variant="text"
                            size="sm"
                            onClick={() => handleIncrement(product)}
                            // disabled={availableTotal <= 0}
                          >
                            <PlusIcon
                              className="h-4 w-4 font-bold"
                              color="black"
                            />
                          </IconButton>
                        </div>
                      </div>
                      <Button
                        className={`${
                          product?.availiableQty > 0
                            ? 'bg-[#A4BC46]'
                            : 'bg-gray-300'
                        } rounded-[44.12px] flex items-center gap-2 w-auto`}
                        disabled={product?.availiableQty <= 0}
                        onClick={() => handleAddItem(product)}
                      >
                        <img
                          src={`${BaseDirectories.LOGOS_DIR}/mini_cart.svg`}
                          alt="cart"
                        />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {paginatedProducts.length - 1 !== index && (
                <hr className="mx-10 my-4 flex justify-center items-center" />
              )}
            </Item>
          </Box>
        ))
      ) : (
        <>
          <div className="text-center text-gray-600 py-4">
            No products found.
          </div>
        </>
      )}
    </>
  );
};

export default ListViewProducts;
