import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button, IconButton, Typography } from '@material-tailwind/react';
import { HeartIcon } from '@heroicons/react/24/outline';
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.primary,
  }));

  return (
    <>
      {paginatedProducts.length > 0 ? (
        paginatedProducts.map((product, index) => (
          <Box
            display="flex"
            alignItems="center"
            justifyContent={'center'}
            className="w-full"
            key={index}
            component="section"
            my={1}
          >
            <Item
              elevation={0}
              className=" border-gray-200 hover:border-[#C0DA71] hover:border-[1.58px] md:mx-2 px-0 py-2"
            >
              <div className="mx-auto flex flex-wrap md:flex-nowrap px-2 gap-4">
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
                        moment(moment(product?.updatedAt).format('YYYY-MM-DD')),
                        'days',
                      ) > 4
                        ? false
                        : true
                    }
                  />
                </div>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-0 mt-0 lg:mt-0">
                  <div>
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
                    </div>
                    <Typography className="!mt-4 text-sm font-normal leading-[27px] !text-gray-500 ">
                      {product.description}
                    </Typography>
                    <div className="flex flex-row my-4">
                      <div className="flex flex-row w-full items-center gap-1 ">
                        <dt className="sr-only">Size</dt>
                        <dd className="text-sm text-gray-500 cursor-default item-price-per-qty">
                          Size:{' '}
                          <span className="text-gray-700">{product.size}</span>
                        </dd>
                      </div>
                      <div className="flex flex-row w-full items-center gap-1">
                        <dt className="sr-only">Origin</dt>
                        <dd className="text-sm text-gray-500 cursor-default item-price-per-qty">
                          Origin:{' '}
                          <span className="text-gray-700">
                            {product.origin}
                          </span>
                        </dd>
                      </div>
                      <div className="flex flex-row w-full items-center gap-1">
                        <dt className="sr-only">Product Code</dt>
                        <dd className="text-sm text-gray-500 cursor-default item-price-per-qty">
                          Product Code:{' '}
                          <span className="text-gray-700">
                            {product.product_code}
                          </span>
                        </dd>
                      </div>
                    </div>
                    <div className="mb-4 flex w-full items-center gap-3 md:w-1/2 ">
                      <Button color="gray" className="w-52">
                        Add to Cart
                      </Button>
                      <IconButton
                        color="gray"
                        variant="text"
                        className="shrink-0"
                      >
                        <HeartIcon className="h-6 w-6" />
                      </IconButton>
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
