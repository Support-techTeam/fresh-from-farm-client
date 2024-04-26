/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { observer } from 'mobx-react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '48',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '89',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Earthen Bottle',
    href: '#',
    price: '48',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 6,
    name: 'Nomad Tumbler',
    href: '#',
    price: '35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 7,
    name: 'Focus Paper Refill',
    href: '#',
    price: '89',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 8,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '48',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '89',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Earthen Bottle',
    href: '#',
    price: '48',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 6,
    name: 'Nomad Tumbler',
    href: '#',
    price: '35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 7,
    name: 'Focus Paper Refill',
    href: '#',
    price: '89',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 8,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '35',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
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
      <div className="absolute bottom-8 right-0 bg-[#fff5dc] hover:rounded-tl-lg">
        <div className="group flex flex-col-reverse">
          <button className="group rounded-bl-lg rounded-tl-lg relative z-50 inline-flex h-10 items-center justify-center gap-2 self-center whitespace-nowrap bg-emerald-500 px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none base-orange">
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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
        {/* <h2 className="sr-only">Products</h2> */}

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {paginatedProducts.length > 0 &&
            paginatedProducts.map((product, index) => (
              <div className="relative border border-[#A4BC46] rounded-lg">
                {/* <a key={index} href={product.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageSrc}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.price}
                  </p>
                </a> */}
                <a key={index} className="block shadow-sm cursor-pointer">
                  <img
                    alt=""
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-t-lg"
                  />

                  <div className="mx-2 my-2">
                    <dl>
                      <div className="my-2">
                        <dt className="sr-only">name</dt>
                        <dd className="font-medium cursor-default">
                          {product.name}
                        </dd>
                      </div>
                      <div className="my-2">
                        <dt className="sr-only">Price</dt>
                        <dd className="text-sm text-gray-500 cursor-default">
                          {product.price
                            ? new Intl.NumberFormat('en-US', {
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
                              }).format(0)}{' '}
                          / g
                        </dd>
                      </div>
                      <div className="flex gap-4 items-center">
                        <div>
                          <dt className="sr-only">Price</dt>
                          <dd className="text-sm text-gray-500 cursor-default">
                            {product.price
                              ? new Intl.NumberFormat('en-US', {
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
                          <dd className="text-xs text-gray-500 line-through cursor-default">
                            {product.price
                              ? new Intl.NumberFormat('en-US', {
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
