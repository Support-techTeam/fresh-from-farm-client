/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { observer } from 'mobx-react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
  },
  {
    id: 2,
    name: 'Dried Prawns (100g)',
    price_qty: '1.20',
    href: '#',
    price: '2.30',
    discount: '5',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158372/f3-client/images/Picture_1_mkqpv8.png',
    imageAlt: 'Dried Prawns',
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
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158347/f3-client/images/Picture_4_jvg2x9.png',
    imageAlt: 'Banana',
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
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158340/f3-client/images/Picture_2_pjyron.png',
    imageAlt: 'Whole Turkey',
  },
  {
    id: 5,
    name: 'Mushrooms (400g)',
    price_qty: '3.20',
    href: '#',
    price: '12',
    discount: '0',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158341/f3-client/images/Picture_3_vr9r17.png',
    imageAlt: 'Mushrooms',
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
  },
  {
    id: 7,
    name: 'Beef sausage (400g)',
    price_qty: '2.30',
    href: '#',
    price: '23',
    discount: '5',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158356/f3-client/images/Picture_6_quxcdw.png',
    imageAlt: 'beef sausage',
  },
  {
    id: 8,
    name: 'Orange (10 Pcs)',
    price_qty: '1.20',
    href: '#',
    price: '10',
    discount: '0',
    unit: 'Pc',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158344/f3-client/images/product_orange_hnthzs.png',
    imageAlt: 'Oranges',
  },
  {
    id: 9,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
  },
  {
    id: 10,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
  },
  {
    id: 11,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
  },
  {
    id: 12,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
  },
  {
    id: 13,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
  },
  {
    id: 14,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
  },
  {
    id: 15,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
  },
  {
    id: 16,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
  },
];

export function stripProduct(product: any) {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    image: product.image,
    quantity: product.quantity,
    category: product.category,
    price: product.price,
    unit: product.unit,
    tax: product.tax,
    discount: product.discount,
    unitPrice: product.unitPrice,
    bestSelling: product.bestSelling,
  };
}

const pageSize = 8;

import React from 'react';
import BaseDirectories from '../../base_directory/BaseDirectory';

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

function ArrivalProductList() {
  // const { productStore } = useContext(StoreContext);
  // const { products } = productStore;
  // const [productData, setProductData] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(products.length / pageSize);

  //   const goToPage = (page: any) => {
  //     setCurrentPage(page);
  //   };

  //   const nextPage = () => {
  //     if (currentPage < totalPages - 1) {
  //       setCurrentPage(currentPage + 1);
  //     }
  //   };

  //   const prevPage = () => {
  //     if (currentPage > 0) {
  //       setCurrentPage(currentPage - 1);
  //     }
  //   };

  const paginatedProducts = products.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize,
  );

  // useEffect(() => {
  //   productStore.getProducts();
  // }, []);

  // useEffect(() => {
  //   const strippedProducts = toJS(products).map((item) =>
  //     stripProduct(item.attributes)
  //   );
  //   setProductData(strippedProducts);
  // }, [products]);
  // console.log(toJS(products));
  return (
    <div className="bg-[#F5F5F5] p-6 rounded-lg lg:rounded-br-lg lg:rounded-tr-lg lg:rounded-bl-none lg:rounded-tl-none">
      <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
        {/* <h2 className="sr-only">Products</h2> */}

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {paginatedProducts.length > 0 &&
            paginatedProducts.map((product, index) => (
              <div
                key={index}
                className="relative border border-white hover:border-[#C0DA71] hover:border-[1.58px] rounded-lg p-0"
              >
                <a className="block cursor-pointer bg-white rounded-lg">
                  <img
                    alt=""
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-t-lg"
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
                <FabRoundedTooltipsRight />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default observer(ArrivalProductList);
