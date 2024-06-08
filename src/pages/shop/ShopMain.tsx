/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumbs } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import BaseDirectories from '../../base_directory/BaseDirectory';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid';
import moment from 'moment';
import Pagination from '../../components/products/Pagination';

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

const pageSize = 12;

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];
const subCategories = [
  { name: 'Vegetables', href: '#' },
  { name: 'Fruits', href: '#' },
  { name: 'Fresh Meat', href: '#' },
  { name: 'Ocean Foods', href: '#' },
  { name: 'Milk & Cream', href: '#' },
  { name: 'Set Food', href: '#' },
  { name: 'Eggs', href: '#' },
];
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
];
// eslint-disable-next-line
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
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

const MainSection = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Categories
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? 'font-medium text-gray-900'
                                  : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm',
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>
                {/* 
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))} */}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <ProductsList />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

const ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;

  const paginatedProducts = products.slice(startIndex, startIndex + pageSize);

  const handleClickPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-[#F5F5F5] p-6 rounded-lg lg:rounded-br-lg lg:rounded-tr-lg lg:rounded-bl-none lg:rounded-tl-none">
      <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {paginatedProducts.length > 0 &&
            paginatedProducts.map((product, index) => (
              <div
                key={index}
                className="relative border border-white hover:border-[#C0DA71] hover:border-[1.58px] rounded-lg p-0"
              >
                <a className="block cursor-pointer bg-white rounded-lg image-container">
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
            ))}
        </div>
      </div>

      <Pagination
        totalItems={products.length}
        itemsPerPage={pageSize}
        currentPage={currentPage}
        onPageChange={handleClickPage}
      />
    </div>
  );
};

const ShopMain = () => {
  return (
    <div className="">
      <Helmet>
        <title>Shop | Fresh From Farm Shopping Page!</title>
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
          <Breadcrumbs>
            <Link to="/" className="opacity-60">
              Home
            </Link>
            <Link to="/shop" className="opacity-60">
              Shop
            </Link>
          </Breadcrumbs>
        </div>
        <MainSection />
      </main>
    </div>
  );
};

export default ShopMain;
