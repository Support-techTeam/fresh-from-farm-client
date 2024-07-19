/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import '../../styles/shop.css';
import { Breadcrumbs, Slider } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import BaseDirectories from '../../base_directory/BaseDirectory';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AiOutlineClose } from 'react-icons/ai';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
} from '@heroicons/react/20/solid';
import moment from 'moment';
import Pagination from '../../components/products/Pagination';
import {
  EggSidebar,
  FourColGrid,
  FruitSidebar,
  MeatSidebar,
  MilkSidebar,
  OceanSidebar,
  SetSidebar,
  ThreeColGrid,
  VegeSidebar,
} from '../../components/icons/sidebar';
import RangeSlider from '../../components/common/RangeSlider';
import ListViewProducts from '../../components/products/ListViewProducts';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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
    specialOffer: true,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-24T00:00:00.000Z',
    size: '300g',
    origin: 'London',
    product_code: 'AE-001',
    category: 'Vegetables',
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
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
    bestSeller: false,
    specialOffer: true,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-27T00:00:00.000Z',
    size: '100g',
    origin: 'London',
    product_code: 'AE-002',
    category: 'Sea Foods',
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
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
    bestSeller: true,
    specialOffer: true,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-26T00:00:00.000Z',
    size: '10 Pcs',
    origin: 'London',
    product_code: 'AE-003',
    category: 'Fruits',
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
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
    bestSeller: true,
    specialOffer: false,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-25T00:00:00.000Z',
    size: '200g',
    origin: 'London',
    product_code: 'AE-004',
    category: 'Fresh Meat',
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
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
    bestSeller: true,
    specialOffer: false,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-27T00:00:00.000Z',
    size: '400g',
    origin: 'London',
    product_code: 'AE-005',
    category: 'Vegetable',
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
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
    specialOffer: false,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-27T00:00:00.000Z',
    size: '10 Pcs',
    origin: 'London',
    product_code: 'AE-006',
    category: 'Fruits',
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
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
    bestSeller: false,
    specialOffer: false,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-27T00:00:00.000Z',
    size: '400g',
    origin: 'London',
    product_code: 'AE-007',
    category: 'Fresh Meat',
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
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
    specialOffer: false,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-27T00:00:00.000Z',
    size: '10 Pcs',
    origin: 'London',
    product_code: 'AE-008',
    category: 'Fruits',
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  },
  {
    id: 9,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    category: 'Vegetable',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    specialOffer: false,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-27T00:00:00.000Z',
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  },
  {
    id: 10,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    category: 'Vegetables',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    specialOffer: false,
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  },
  {
    id: 11,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    category: 'Vegetables',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    specialOffer: false,
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  },
  {
    id: 12,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    category: 'Vegetables',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    specialOffer: false,
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  },
  {
    id: 13,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    category: 'Vegetables',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    specialOffer: false,
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  },
  {
    id: 14,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    category: 'Vegetables',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    specialOffer: false,
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  },
  {
    id: 15,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    category: 'Vegetables',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    specialOffer: false,
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  },
  {
    id: 16,
    name: 'Cabbage (300g)',
    price_qty: '1.20',
    href: '#',
    price: '48',
    discount: '0',
    category: 'Vegetables',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    specialOffer: false,
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  },
];

const pageSize = 12;

const subCategories = [
  { name: 'Vegetables', href: '#' },
  { name: 'Fruits', href: '#' },
  { name: 'Fresh Meat', href: '#' },
  { name: 'Ocean Foods', href: '#' },
  { name: 'Milk & Cream', href: '#' },
  { name: 'Set Foods', href: '#' },
  { name: 'Eggs', href: '#' },
];
const SidebarComponents = {
  Vegetables: VegeSidebar,
  Vegetable: VegeSidebar,
  Fruits: FruitSidebar,
  Fruit: FruitSidebar,
  'Fresh Meat': MeatSidebar,
  'Fresh Meats': MeatSidebar,
  'Ocean Foods': OceanSidebar,
  'Ocean Food': OceanSidebar,
  'Milk & Cream': MilkSidebar,
  'Set Foods': MilkSidebar,
  'Set Food': SetSidebar,
  Eggs: EggSidebar,
  Egg: EggSidebar,
};
const filters = [
  {
    id: 'Price',
    name: 'Price',
  },
];

const minValue = 0;
const maxValue = 10000;

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
  const [isActive, setIsActive] = useState('all');
  const [value, setValue] = useState([0, 2000]);
  const [layout, setLayout] = useState('three-column');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedArrivalStatus, setSelectedArrivalStatus] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * pageSize;
  const [filteredProducts, setFilteredProducts] = useState(products); // State to hold filtered products

  useEffect(() => {
    filterProducts(value); // Initial filter products based on initial value (price range)
  }, [value, currentPage, products, selectedCategories, selectedArrivalStatus]);

  // Handle category filter change
  const handleCategoryChange = (categoryName: string) => {
    const category = categoryName.toLowerCase();
    if (category === 'All') {
      setSelectedCategories([]);
      setActiveFilters([]);
    } else {
      const existingCategory = selectedCategories.find(
        (checkCategory) => checkCategory.toLowerCase() === category,
      );
      if (!existingCategory) {
        setSelectedCategories([...selectedCategories, category]);
        setActiveFilters([...activeFilters, category]);
      }
    }
  };

  // Handle arrival status filter change
  const handleArrivalStatusChange = (statusName) => {
    setSelectedArrivalStatus((prevArrivalStatus) => {
      const statusIndex = prevArrivalStatus.indexOf(statusName);
      const newArrivalStatus =
        statusIndex === -1
          ? [...prevArrivalStatus, statusName]
          : prevArrivalStatus.filter((status) => status !== statusName);

      // Update active filters
      const newActiveFilters =
        newArrivalStatus.length === 0
          ? activeFilters.filter(
              (filter) =>
                !['newarrival', 'bestsellers', 'specialoffers'].includes(
                  filter,
                ),
            )
          : [
              ...newArrivalStatus,
              ...activeFilters.filter(
                (filter) => !newArrivalStatus.includes(filter),
              ),
            ];

      setActiveFilters(newActiveFilters);

      return newArrivalStatus;
    });
  };

  // Remove category filter
  // Remove filter from categories and arrival status
  const removeFilter = (filter: any) => {
    // Handle removal of category filters
    if (selectedCategories.includes(filter)) {
      setSelectedCategories(
        selectedCategories.filter((checkCategory) => checkCategory !== filter),
      );
    }

    // Handle removal of arrival status filters
    if (['newarrival', 'bestsellers', 'specialoffers'].includes(filter)) {
      setSelectedArrivalStatus(
        selectedArrivalStatus.filter((status) => status !== filter),
      );
    }

    // Update active filters
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  // Handle price filter
  const handlePriceChange = (newValues: any) => {
    let [newMinValue, newMaxValue] = newValues;

    // Ensure max value is not lower than min value
    if (newMinValue > value[1]) {
      newMinValue = value[1];
    }

    // Ensure min value is not higher than max value
    if (newMaxValue < value[0]) {
      newMaxValue = value[0];
    }

    setValue([newMinValue, newMaxValue]);
  };

  const filterProducts = (range) => {
    const filtered = products.filter((product) => {
      const price = Number(product.price);
      const isInPriceRange = price >= range[0] && price <= range[1];
      const isInCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category.toLowerCase());
      // Check if product matches any selected arrival statuses
      const isInProductStatus =
        selectedArrivalStatus.length === 0 ||
        selectedArrivalStatus.some((status) => {
          switch (status) {
            case 'newarrival':
              return isNewlyAddedOrUpdated(product.updatedAt);
            case 'bestsellers':
              return product.bestSeller;
            case 'specialoffers':
              return product.specialOffer;
            default:
              return false;
          }
        });

      return isInPriceRange && isInCategory && isInProductStatus;
    });
    setFilteredProducts(filtered);
  };

  // Function to determine if a product is a new arrival based on updatedAt timestamp
  const isNewlyAddedOrUpdated = (updatedAt) => {
    // Example logic: Check if updatedAt is within the last 7 days
    const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    const updatedAtTime = new Date(updatedAt).getTime();
    const currentTime = Date.now();
    return currentTime - updatedAtTime < SEVEN_DAYS_IN_MS;
  };
  // Paginate filtered products
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + pageSize,
  );

  // Handle pagination click
  const handleClickPage = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative lg:hidden z-50"
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
                  <form className="mt-4 mx-3">
                    <ul
                      role="list"
                      className="space-y-4 border-l border-r rounded-2xl border-gray-300 pb-0 text-sm font-medium text-gray-900"
                    >
                      <li className="category-heading border-b border-gray-300 px-4 py-2 pt-4 bg-[#A4BC46] rounded-t-2xl text-white h-12">
                        Categories
                      </li>
                      {subCategories.map((category, index) => {
                        const SidebarComponent =
                          SidebarComponents[category.name];
                        return (
                          <li
                            key={index}
                            onClick={() => handleCategoryChange(category.name)}
                            className={`category-leading flex gap-x-2 border-b border-gray-300 px-4 py-1 cursor-pointer pb-4 group hover:text-[#A4BC46] text-[#61676A]/50 ${
                              isActive === category.name
                                ? 'text-[#A4BC46]'
                                : 'text-[#61676A]/80'
                            } ${
                              subCategories.length - 1 === index
                                ? 'rounded-b-2xl'
                                : ''
                            }`}
                          >
                            {SidebarComponent && (
                              <SidebarComponent
                                classes={
                                  'stroke-[#61676A]/50 group-hover:stroke-[#A4BC46]'
                                }
                              />
                            )}
                            {category.name}
                          </li>
                        );
                      })}
                    </ul>

                    <ul
                      role="list"
                      className="space-y-4 border-l border-r border-t rounded-2xl border-gray-300 pb-0 text-sm font-medium text-gray-900 mt-8"
                    >
                      <li
                        onClick={() => handleArrivalStatusChange('newarrival')}
                        className={`pt-4 category-leading flex gap-x-2 border-b border-gray-300 px-4 py-1 cursor-pointer pb-4 group hover:text-[#A4BC46] text-[#61676A]/50 ${
                          selectedArrivalStatus.includes('newarrival')
                            ? 'text-[#A4BC46]'
                            : 'text-[#61676A]/80'
                        }`}
                      >
                        New Arrivals
                      </li>
                      <li
                        onClick={() => handleArrivalStatusChange('bestsellers')}
                        className={` pt-4 category-leading flex gap-x-2 border-b border-gray-300 px-4 py-1 cursor-pointer pb-4 group hover:text-[#A4BC46] text-[#61676A]/50 ${
                          selectedArrivalStatus.includes('bestsellers')
                            ? 'text-[#A4BC46]'
                            : 'text-[#61676A]/80'
                        }`}
                      >
                        Best Sellers
                      </li>
                      <li
                        onClick={() =>
                          handleArrivalStatusChange('specialoffers')
                        }
                        className={`category-leading flex gap-x-2 border-b rounded-b-2xl border-gray-300 px-4 py-1 cursor-pointer pb-4 group hover:text-[#A4BC46] text-[#61676A]/50 ${
                          selectedArrivalStatus.includes('specialoffers')
                            ? 'text-[#A4BC46]'
                            : 'text-[#61676A]/80'
                        }`}
                      >
                        Special Offers
                      </li>
                    </ul>

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <ChevronUpIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <ChevronDownIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6 border-gray-300 border p-4 mt-2 rounded-2xl">
                              <div className="relative mt-6 ">
                                {/* Labels for range */}
                                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 bottom-6">
                                  £{value[0]}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 bottom-6">
                                  £{value[1]}
                                </span>
                                <div className="w-full flex items-center">
                                  <RangeSlider
                                    min={minValue}
                                    max={maxValue}
                                    value={value[0]}
                                    flow="rtl"
                                    onChange={(newValue: any) =>
                                      handlePriceChange([
                                        Number(newValue),
                                        value[1],
                                      ])
                                    }
                                  />
                                  <RangeSlider
                                    min={minValue}
                                    max={maxValue}
                                    value={value[1]}
                                    flow="rtl"
                                    onChange={(newValue: any) =>
                                      handlePriceChange([
                                        value[0],
                                        Number(newValue),
                                      ])
                                    }
                                  />
                                </div>
                              </div>
                            </Disclosure.Panel>
                            {!open && (
                              <div className="border-b border-gray-300 mt-4"></div>
                            )}
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

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <ul
                  role="list"
                  className="space-y-4 border-l border-r rounded-2xl border-gray-300 pb-0 text-sm font-medium text-gray-900"
                >
                  <li className="category-heading border-b border-gray-300 px-4 py-2 pt-4 bg-[#A4BC46] rounded-t-2xl text-white h-12">
                    Categories
                  </li>
                  {subCategories.map((category, index) => {
                    const SidebarComponent = SidebarComponents[category.name];
                    return (
                      <li
                        key={index}
                        onClick={() => handleCategoryChange(category.name)}
                        className={`category-leading flex gap-x-2 border-b border-gray-300 px-4 py-1 cursor-pointer pb-4 group hover:text-[#A4BC46] text-[#61676A]/50 ${
                          isActive === category.name
                            ? 'text-[#A4BC46]'
                            : 'text-[#61676A]/80'
                        } ${
                          subCategories.length - 1 === index
                            ? 'rounded-b-2xl'
                            : ''
                        }`}
                      >
                        {SidebarComponent && (
                          <SidebarComponent
                            classes={
                              'stroke-[#61676A]/50 group-hover:stroke-[#A4BC46]'
                            }
                          />
                        )}
                        {category.name}
                      </li>
                    );
                  })}
                </ul>

                <ul
                  role="list"
                  className="space-y-4 border-l border-r border-t rounded-2xl border-gray-300 pb-0 text-sm font-medium text-gray-900 mt-8"
                >
                  <li
                    onClick={() => handleArrivalStatusChange('newarrival')}
                    className={`pt-4 category-leading flex gap-x-2 border-b border-gray-300 px-4 py-1 cursor-pointer pb-4 group hover:text-[#A4BC46] text-[#61676A]/50 ${
                      selectedArrivalStatus.includes('newarrival')
                        ? 'text-[#A4BC46]'
                        : 'text-[#61676A]/80'
                    }`}
                  >
                    New Arrivals
                  </li>
                  <li
                    onClick={() => handleArrivalStatusChange('bestsellers')}
                    className={` pt-4 category-leading flex gap-x-2 border-b border-gray-300 px-4 py-1 cursor-pointer pb-4 group hover:text-[#A4BC46] text-[#61676A]/50 ${
                      selectedArrivalStatus.includes('bestsellers')
                        ? 'text-[#A4BC46]'
                        : 'text-[#61676A]/80'
                    }`}
                  >
                    Best Sellers
                  </li>
                  <li
                    onClick={() => handleArrivalStatusChange('specialoffers')}
                    className={`category-leading flex gap-x-2 border-b rounded-b-2xl border-gray-300 px-4 py-1 cursor-pointer pb-4 group hover:text-[#A4BC46] text-[#61676A]/50 ${
                      selectedArrivalStatus.includes('specialoffers')
                        ? 'text-[#A4BC46]'
                        : 'text-[#61676A]/80'
                    }`}
                  >
                    Special Offers
                  </li>
                </ul>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <ChevronUpIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ChevronDownIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6 border-gray-300 border p-4 mt-2 rounded-2xl">
                          <div className="relative mt-6 ">
                            {/* Labels for range */}
                            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 bottom-6">
                              £{value[0]}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 bottom-6">
                              £{value[1]}
                            </span>
                            <div className="w-full flex items-center">
                              <RangeSlider
                                min={minValue}
                                max={maxValue}
                                value={value[0]}
                                flow="rtl"
                                onChange={(newValue: any) =>
                                  handlePriceChange([
                                    Number(newValue),
                                    value[1],
                                  ])
                                }
                              />
                              <RangeSlider
                                min={minValue}
                                max={maxValue}
                                value={value[1]}
                                flow="rtl"
                                onChange={(newValue: any) =>
                                  handlePriceChange([
                                    value[0],
                                    Number(newValue),
                                  ])
                                }
                              />
                            </div>
                          </div>
                        </Disclosure.Panel>
                        {!open && (
                          <div className="border-b border-gray-300 mt-4"></div>
                        )}
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product Layout settings*/}
              <div className="lg:col-span-3">
                {/* filter menu */}
                <div className="flex flex-col">
                  <div className="flex items-baseline justify-start gap-x-2 pb-2">
                    <div className="flex items-center justify-center rounded-xl border-gray-300 border py-2 pr-4">
                      <button
                        type="button"
                        className="ml-2 p-2 text-gray-400 hover:text-gray-500 sm:ml-4"
                        onClick={() => setLayout('list')}
                      >
                        <span className="sr-only">View grid</span>
                        <ListBulletIcon
                          className={`h-5 w-5 hover:fill-[#A4BC46] ${
                            layout === 'list'
                              ? 'fill-[#A4BC46]'
                              : 'fill-gray-300'
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      <button
                        type="button"
                        className="-m-2 ml-2 p-2 text-gray-400 hover:text-gray-500 sm:ml-4"
                        onClick={() => setLayout('two-column')}
                      >
                        <span className="sr-only">View grid</span>
                        <Squares2X2Icon
                          className={`h-5 w-5 hover:fill-[#A4BC46] ${
                            layout === 'two-column'
                              ? 'fill-[#A4BC46]'
                              : 'fill-gray-300'
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      <button
                        type="button"
                        className="-m-2 ml-2 p-2 text-gray-400 hover:text-gray-500 sm:ml-4"
                        onClick={() => setLayout('three-column')}
                      >
                        <span className="sr-only">View grid</span>
                        <ThreeColGrid
                          classes={`h-5 w-5 hover:fill-[#A4BC46] ${
                            layout === 'three-column'
                              ? 'fill-[#A4BC46]'
                              : 'fill-gray-300'
                          }`}
                        />
                      </button>
                      <button
                        type="button"
                        className="-m-2 ml-2 p-2 text-gray-400 hover:text-gray-500 sm:ml-4"
                        onClick={() => setLayout('four-column')}
                      >
                        <span className="sr-only">View grid</span>
                        <FourColGrid
                          classes={`h-5 w-5 hover:fill-[#A4BC46] ${
                            layout === 'four-column'
                              ? 'fill-[#A4BC46]'
                              : 'fill-gray-300'
                          }`}
                        />
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
                  <div>
                    {activeFilters.length > 0 && (
                      <div className="mb-4 flex flex-wrap">
                        {activeFilters.map((filter) => (
                          <div
                            key={filter}
                            className="flex items-center bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2"
                          >
                            <span className="mr-2">{filter}</span>
                            <AiOutlineClose
                              className="cursor-pointer"
                              onClick={() => removeFilter(filter)}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg lg:rounded-br-lg lg:rounded-tr-lg lg:rounded-bl-none lg:rounded-tl-none">
                  {layout === 'list' ? (
                    <ListViewProducts
                      paginatedProducts={paginatedProducts}
                      layout={layout}
                    />
                  ) : (
                    <ProductsList
                      paginatedProducts={paginatedProducts}
                      layout={layout}
                    />
                  )}

                  <Pagination
                    totalItems={filteredProducts.length}
                    itemsPerPage={pageSize}
                    currentPage={currentPage}
                    onPageChange={handleClickPage}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ProductsList = ({
  paginatedProducts,
  layout,
}: {
  paginatedProducts: any[];
  layout: string;
}) => {
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
            elevation={0}
            className="relative border border-gray-100 hover:border-[#C0DA71] hover:border-[1.58px] rounded-lg p-0"
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
          </Item>
        ))
      ) : (
        <div className="text-center text-gray-600 py-4">No products found.</div>
      )}
    </div>
  );
};

const ShopMain = () => {
  return (
    <div className="">
      <Helmet>
        <title>Shop | Fresh From Farm Shopping Page!</title>
        <link rel="canonical" href={window?.location?.href} />
      </Helmet>
      <main className="flex min-h-screen w-screen flex-col bg-white mt-0">
        <div
          className="flex flex-col w-screen items-center justify-center h-[189px]"
          style={{
            backgroundImage: `url(${BaseDirectories.IMAGES_DIR}/page_banner.png)`,
            backgroundSize: `${window?.innerWidth >= 960 ? 'cover' : 'auto'}`,
            backgroundPosition: `${window?.innerWidth >= 960 ? 'center' : ''}`,
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
