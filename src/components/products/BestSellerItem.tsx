/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { observer } from 'mobx-react';
import BaseDirectories from '../../base_directory/BaseDirectory';
import moment from 'moment';

const products = [
  {
    id: 1,
    name: 'Beef sausage (400g)',
    price_qty: '2.30',
    href: '#',
    price: '23',
    discount: '5',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158370/f3-client/images/Picture_22_bebc5k.png',
    imageAlt: 'beef sausage',
    bestSeller: true,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-27T00:00:00.000Z',
  },
  {
    id: 2,
    name: 'Orange (10 Pcs)',
    price_qty: '1.20',
    href: '#',
    price: '10',
    discount: '0',
    unit: 'Pc',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158344/f3-client/images/product_orange_hnthzs.png',
    imageAlt: 'Oranges',
    bestSeller: true,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-25T00:00:00.000Z',
  },
  {
    id: 3,
    name: 'Banana (10 Pcs)',
    price_qty: '1.20',
    href: '#',
    price: '12',
    discount: '0',
    unit: 'Pc',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158340/f3-client/images/Picture_2_pjyron.png',
    imageAlt: 'Banana',
    bestSeller: true,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-20T00:00:00.000Z',
  },
  {
    id: 4,
    name: 'Whole Turkey (200g)',
    price_qty: '2.20',
    href: '#',
    price: '4.40',
    discount: '0',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158341/f3-client/images/Picture_3_vr9r17.png',
    imageAlt: 'Whole Turkey',
    bestSeller: true,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-20T00:00:00.000Z',
  },
  {
    id: 5,
    name: 'Dried Prawns (100g)',
    price_qty: '1.20',
    href: '#',
    price: '2.30',
    discount: '5',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158372/f3-client/images/Picture_1_mkqpv8.png',
    imageAlt: 'Dried Prawns',
    bestSeller: true,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-20T00:00:00.000Z',
  },
  {
    id: 6,
    name: 'Guava fruit (10 Pcs)',
    price_qty: '0.80',
    href: '#',
    price: '8',
    discount: '0',
    unit: 'Pc',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158349/f3-client/images/Picture_5_njef4f.png',
    imageAlt: 'Guava fruit',
    bestSeller: false,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-20T00:00:00.000Z',
  },
];
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

function BestSellerItem() {
  return (
    <div className="py-6 rounded-lg lg:rounded-br-lg lg:rounded-tr-lg lg:rounded-bl-none lg:rounded-tl-none">
      <div className="mx-auto max-w-2xl px-4 py-0 sm:px-2 sm:py-0 lg:max-w-full lg:px-0">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {products.length > 0 &&
            products.map((product, index) =>
              product?.bestSeller ? (
                <div
                  key={index}
                  className="relative border border-[#D6D6D6] hover:border-[#C0DA71] hover:border-[1.58px] rounded-lg p-0"
                >
                  <a className="block cursor-pointer bg-white rounded-lg image-container">
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
                  </a>
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
              ) : null,
            )}
        </div>
      </div>
    </div>
  );
}

export default observer(BestSellerItem);
