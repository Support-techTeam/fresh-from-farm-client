/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { observer } from 'mobx-react';
import BaseDirectories from '../../base_directory/BaseDirectory';
import moment from 'moment';
import { Link } from 'react-router-dom';

function FabRoundedTooltipsRight() {
  return (
    <>
      {/*<!-- Component: Right sided fab button with tooltips --> */}
      <div className="absolute bottom-6 right-0 bg-[#fff5dc] hover:rounded-tl-lg rounded-bl-lg rounded-tl-lg">
        <div className="group flex flex-col-reverse w-10 hover:rounded-tl-lg">
          <button className="group rounded-bl-lg rounded-tl-lg hover:rounded-tl-none relative z-50 inline-flex h-10 w-10 items-center justify-center gap-2 self-center whitespace-nowrap bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none base-orange">
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

function RelatedProductList({ products }: { products: any[] }) {
  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="flex md:flex-row flex-col justify-center pb-1 pt-10">
            <div className="flex flex-col text-[#48521e]">
              <h5 className="lily-script-one-regular text-4xl">
                Related products
              </h5>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-10 pt-2">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="flex flex-col flex-wrap gap-4 mb-4">
              {/* Product grid */}
              <ProductList products={products} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
function ProductList({ products }: { products: any[] }) {
  return (
    <div className="py-6 rounded-lg lg:rounded-br-lg lg:rounded-tr-lg lg:rounded-bl-none lg:rounded-tl-none">
      <div className="mx-auto max-w-2xl px-4 py-0 sm:px-2 sm:py-0 lg:max-w-full lg:px-0">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {/* <div className="flex flex-row flex-grow flex-wrap gap-4 mb-4"> */}
          {products.length > 0 &&
            products.map((product, index) => (
              <div
                key={index}
                className="relative border border-[#D6D6D6] hover:border-[#C0DA71] hover:border-[1.58px] rounded-lg p-0"
              >
                <Link
                  to={`/shop/product/${product.name}`}
                  state={product}
                  className="block cursor-pointer"
                >
                  {/* <a className="block cursor-pointer bg-white rounded-lg image-container"> */}
                  <img
                    alt=""
                    src={product.imageSrc}
                    // className="group-hover:opacity-75 rounded-t-lg"
                    className="h-full min-h-[230px] w-full object-cover object-center group-hover:opacity-75 rounded-t-lg"
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
                                }).format(0)}
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
                {/* </a>*/}
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
                <FabRoundedTooltipsRight />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default observer(RelatedProductList);
