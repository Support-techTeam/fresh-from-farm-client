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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-24T00:00:00.000Z',
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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158372/f3-client/images/Picture_1_mkqpv8.png',
    imageAlt: 'Dried Prawns',
    bestSeller: true,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-27T00:00:00.000Z',
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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158340/f3-client/images/Picture_2_pjyron.png',
    imageAlt: 'Banana',
    bestSeller: false,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-26T00:00:00.000Z',
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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158341/f3-client/images/Picture_3_vr9r17.png',
    imageAlt: 'Whole Turkey',
    bestSeller: false,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-25T00:00:00.000Z',
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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158347/f3-client/images/Picture_4_jvg2x9.png',
    imageAlt: 'Mushrooms',
    bestSeller: false,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-27T00:00:00.000Z',
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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158349/f3-client/images/Picture_5_njef4f.png',
    imageAlt: 'Guava fruit',
    bestSeller: false,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-27T00:00:00.000Z',
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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158356/f3-client/images/Picture_6_quxcdw.png',
    imageAlt: 'beef sausage',
    bestSeller: true,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-27T00:00:00.000Z',
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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158344/f3-client/images/product_orange_hnthzs.png',
    imageAlt: 'Oranges',
    bestSeller: false,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-27T00:00:00.000Z',
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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-27T00:00:00.000Z',
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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
  },
];
const pageSize = 6;

function DiscountedListItems() {
  const [currentPage, setCurrentPage] = useState(0);
  const paginatedProducts = products.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize,
  );

  return (
    <div className="py-6 rounded-lg lg:rounded-br-lg lg:rounded-tr-lg lg:rounded-bl-none lg:rounded-tl-none min-w-[220px] sm:w-[400px] md:w-[600px]">
      <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">
        {paginatedProducts.length > 0 &&
          paginatedProducts.map((product, index) => (
            <div
              key={index}
              className="border border-white hover:border-[#C0DA71] rounded-lg p-0 mx-3"
            >
              <a className="flex cursor-pointer bg-white rounded-lg image-container p-1">
                <img
                  alt=""
                  src={product.imageSrc}
                  className="h-[60px] w-[66px] min-h-[60px] object-cover object-center group-hover:opacity-75 rounded-sm"
                />

                <div className="flex justify-between items-center bg-white rounded-b-lg px-2">
                  <dl>
                    <div className="discount-item-name">
                      <dt className="sr-only">name</dt>
                      <dd className="font-medium cursor-default">
                        {product.name}
                      </dd>
                    </div>
                    <div className="">
                      <dt className="sr-only">Price/Qty</dt>
                      <dd className="text-sm text-gray-500 cursor-default discount-item-price-per-qty">
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
                    <div className="flex gap-4 discount-items-center">
                      <div>
                        <dt className="sr-only">Price</dt>
                        <dd className="text-sm text-gray-500 cursor-default discount-item-price">
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
                        <dd className="text-xs text-gray-500 line-through cursor-default discount-item-discount">
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
            </div>
          ))}
      </div>
    </div>
  );
}

export default observer(DiscountedListItems);
