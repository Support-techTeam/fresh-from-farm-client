/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Breadcrumbs,
  Button,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import BaseDirectories from '../../base_directory/BaseDirectory';
import moment from 'moment';
import NumberInput from '../../components/common/NumberInput';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { MinusIcon, XCircleIcon, PlusIcon } from '@heroicons/react/20/solid';
import ShoppingProcess from '../../components/shop/ShoppingProcess';
import ShoppingBannerSection from '../../components/shop/Banner';
import RelatedProductList from '../../components/shop/RelatedProductList';
import { Rating } from '@material-tailwind/react';
import usePersistentCart from '../../hooks/usePersistentCart';
import { useCart } from '../../context/CartContext';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

const products = [
  {
    id: 1,
    name: 'Cabbage (300g)',
    price_qty: 1.2,
    price: 23,
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
    availiableQty: 4,
    criticalQty: 2,
    tax: 0.12,
    reviews: [
      {
        name: 'Jane McCulling',
        rating: 4,
        createdAt: '2024-04-20T00:00:00.000Z',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        name: 'John Smith',
        rating: 5,
        createdAt: '2024-04-20T00:00:00.000Z',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        name: 'Jim Cole',
        rating: 3,
        createdAt: '2024-04-20T00:00:00.000Z',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        name: 'Jack Dole',
        rating: 2,
        createdAt: '2024-04-20T00:00:00.000Z',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    ],
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
    availiableQty: 10,
    criticalQty: 2,
    tax: 0.12,
    reviews: [
      {
        name: 'Jim',
        rating: 3,
        createdAt: '2024-04-20T00:00:00.000Z',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        name: 'Jack',
        rating: 2,
        createdAt: '2024-04-20T00:00:00.000Z',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ',
      },
    ],
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
    availiableQty: 1,
    criticalQty: 2,
    reviews: [],
    tax: 0.12,
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
    availiableQty: 12,
    criticalQty: 2,
    reviews: [],
    tax: 0.12,
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
    availiableQty: 10,
    criticalQty: 2,
    reviews: [],
    tax: 0.12,
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
    availiableQty: 10,
    criticalQty: 2,
    reviews: [],
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
    availiableQty: 10,
    criticalQty: 2,
    reviews: [],
    tax: 0.12,
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
    availiableQty: 10,
    criticalQty: 2,
    reviews: [],
    tax: 0.12,
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
    availiableQty: 10,
    criticalQty: 2,
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    specialOffer: false,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-27T00:00:00.000Z',
    reviews: [],
    tax: 0.12,
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
    availiableQty: 10,
    criticalQty: 2,
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    specialOffer: false,
    reviews: [],
    tax: 0.12,
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
    availiableQty: 10,
    criticalQty: 2,
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    specialOffer: false,
    reviews: [],
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
    availiableQty: 10,
    criticalQty: 2,
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    specialOffer: false,
    reviews: [],
    tax: 0.12,
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
    availiableQty: 10,
    criticalQty: 2,
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    specialOffer: false,
    reviews: [],
    tax: 0.12,
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
    availiableQty: 10,
    criticalQty: 2,
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    specialOffer: false,
    reviews: [],
    tax: 0.12,
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
    availiableQty: 10,
    criticalQty: 2,
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    specialOffer: false,
    reviews: [],
    tax: 0.12,
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
    availiableQty: 10,
    criticalQty: 2,
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158361/f3-client/images/Picture_jciuwb.png',
    imageAlt: 'Cabbage',
    bestSeller: false,
    specialOffer: false,
    reviews: [],
    tax: 0.12,
    description:
      'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  },
];
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
        <div className="absolute top-6 right-2 md:right-8 bg-[#FF6069] rounded-sm">
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
          } right-2 md:right-8 bg-[#C0DA71] rounded-sm`}
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

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state || {};
  const [open, setOpen] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [availableTotal, setAvailableTotal] = useState(
    product?.availiableQty ? product?.availiableQty : 0,
  );
  // let availableTotal = product?.availiableQty ? product?.availiableQty : 0;
  const {
    cart,
    totalQuantity,
    addItem,
    updateItemQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const handleAddItem = (newProduct: any) => {
    if (newProduct.name.trim() !== '' && availableTotal > 0) {
      addItem(newProduct, quantity);
      handleQuantityChange(quantity);
      setQuantity(1);
    }
  };

  const relatedProducts =
    products.length > 0 &&
    products
      .filter(
        (item) => item.category === product.category && item.id !== product.id,
      )
      .slice(0, 4);

  const handleTabOpen = (tabCategory: any) => {
    setOpen(tabCategory);
  };

  const TabContentDescription = ({
    open,
    tabCategory,
    details,
    prodImg,
  }: any) => {
    return (
      <div className={`${open === tabCategory ? 'block' : 'hidden'} `}>
        <div
          className={`pt-6 text-base leading-relaxed text-[#727272] justify-center items-center flex flex-col gap-4`}
        >
          <p>{details}</p>
          {prodImg && (
            <img
              alt=""
              src={prodImg}
              className="md:w-[60%] md:h-[60%] w-[100%] h-80 object-fill object-center md:px-4 my-2 rounded-xl"
            />
          )}
          <p>{details}</p>
          <p>{details}</p>
        </div>

        <ShoppingProcess />
        <ShoppingBannerSection />
      </div>
    );
  };

  const TabContentReview = ({ open, tabCategory, reviews }: any) => {
    return (
      <div>
        <div
          className={`pt-6 text-base leading-relaxed text-[#727272] dark:text-dark-6 ${
            open === tabCategory ? 'block' : 'hidden'
          } `}
        >
          <div className="bg-white py-6">
            <div className="w-screen-md">
              <div className="divide-y">
                {reviews?.length > 0 &&
                  reviews?.map((review: any) => (
                    <div className="flex flex-col gap-3 py-4 md:py-8">
                      <div>
                        <span className="block text-xs font-bold text-[#A4BC46]">
                          {review?.name}
                        </span>

                        <span className="-ml-1 flex gap-0.5 my-1">
                          <Rating
                            value={review?.rating}
                            readonly
                            unratedColor="amber"
                            ratedColor="amber"
                          />
                        </span>
                        <span className="block text-xs text-[#61676A]">
                          {moment(review?.date).format('MMM DD, YYYY')}
                        </span>
                      </div>
                      <p className="text-[#61676A] text-xs">{review?.text}</p>
                    </div>
                  ))}
              </div>
              <div className="flex justify-left items-left gap-4 mt-6">
                <div className="flex md:flex-row flex-col justify-left pb-1 pt-10">
                  <div className="flex flex-col text-[#48521e]">
                    <h5 className="lily-script-one-regular text-4xl pb-2">
                      Add A Review
                    </h5>
                    <p className="text-[#61676A] text-sm">
                      You email address will not be published. Required fields
                      are marked
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const item = cart.find((item) => item.id === product.id);
    if (item) {
      const totalAvailableQuantity = product.availiableQty - item.quantity;
      setAvailableTotal(totalAvailableQuantity);
    } else {
      setAvailableTotal(product?.availiableQty ? product?.availiableQty : 0);
    }
  }, [product, cart, totalQuantity, addItem, availableTotal]);

  const handleIncrement = () => {
    if (availableTotal > quantity) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
    }
  };

  const handleQuantityChange = (event: any) => {
    const newValue = parseInt(event);
    const item = cart.find((item) => item.id === product.id);
    if (item) {
      const totalAvailableQuantity = product.availiableQty - item.quantity;
      setAvailableTotal(totalAvailableQuantity);
      if (newValue >= 1 && newValue <= totalAvailableQuantity) {
        setQuantity(newValue);
      }
    } else {
      setAvailableTotal(product?.availiableQty ? product?.availiableQty : 0);
    }
  };

  return (
    <div className="">
      <Helmet>
        <title>Product Details | Fresh From Farm Shopping Page!</title>
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
          <Breadcrumbs className="flex flex-wrap">
            <Link to="/" className="opacity-60">
              Home
            </Link>
            <Link to="/shop" className="opacity-60">
              Shop
            </Link>
            <Link to="/shop/product" className="opacity-60">
              {product.name}
            </Link>
          </Breadcrumbs>
        </div>
        <section className="py-10 px-8">
          <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
            <div className="relative border border-white rounded-lg p-0">
              <img
                alt=""
                src={product.imageSrc}
                className="max-h-[466px] h-[256px] md:h-[320px] lg:h-[420px]  w-[100%] object-fit object-center md:px-4 mb-4 rounded-xl"
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
            <div>
              <Typography className="mb-4" variant="h3">
                {product.name}
              </Typography>
              <div className="my-2">
                <dt className="sr-only">Price/Qty</dt>
                <Typography className="text-md text-gray-500 cursor-default">
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
                </Typography>
              </div>

              <div className="my-2 flex items-center gap-2">
                {/* <Rating value={4} className="text-amber-500" /> */}
                <Typography className="!text-sm font-normal !text-gray-700">
                  <span className="font-bold">
                    {Math.ceil(Math.random() * 40)}
                  </span>{' '}
                  Customer reviews | Sold:
                  <span className="font-bold">
                    {' '}
                    {Math.ceil(Math.random() * 40)}
                  </span>
                </Typography>
              </div>
              <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
                {product.description}
              </Typography>
              {product.availiableQty > 0 ? (
                <div className="flex items-center align-middle gap-2 my-2">
                  <CheckCircleIcon className="h-6 w-6 text-green-500" />
                  <Typography className="font-normal text-base leading-[27px] !text-green-500">
                    In Stock
                  </Typography>
                </div>
              ) : (
                <div className="flex items-center align-middle gap-2 my-2">
                  <XCircleIcon className="h-6 w-6 text-red-500" />
                  <Typography className="font-normal text-base leading-[27px] !text-red-500">
                    Out of Stock
                  </Typography>
                </div>
              )}
              <div className="flex gap-4 items-center my-2">
                <div className="flex flex-wrap gap-4 items-center my-2">
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
                  |{/* <!-- shipping notice - start --> */}
                  <div className="flex items-center gap-1 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                      />
                    </svg>

                    <span className="text-xs">Free delivery from £100</span>
                  </div>
                  {/* <!-- shipping notice - end --> */}
                </div>
              </div>
              <div className="mb-4 flex flex-wrap w-full items-center gap-3">
                {/* <Box display="flex" alignItems="center">
                  <IconButton onClick={handleDecrement}>-</IconButton>
                  <TextField
                    id="outlined-number"
                    type="number"
                    value={quantity}
                    // onChange={handleQuantityChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      min: 1,
                      max: availableTotal
                        ? availableTotal
                        : product?.availiableQty,
                      style: { textAlign: 'center' },
                    }}
                    sx={{
                      width: '60px',
                      '& .MuiInputBase-root': {
                        borderRadius: '4px',
                        fontSize: '16px',
                        textAlign: 'center',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ccc',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#888',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#333',
                      },
                    }}
                  />
                  <IconButton onClick={handleIncrement}>+</IconButton>
                </Box> */}
                {/* <TextField
                  id="outlined-number"
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    min: 1,
                    max: availableTotal
                      ? availableTotal
                      : product?.availiableQty,
                    style: {
                      textAlign: 'center',
                      height: '20px',
                      border: 'none',
                    },
                  }}
                  sx={{
                    width: '100px',
                    '& .MuiInputBase-root': {
                      borderRadius: '8px',
                      fontSize: '16px',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#ccc',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#888',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#333',
                    },
                  }}
                /> */}

                <div className="flex items-center justify-between md:justify-end border-[0.5px] border-gray-300 rounded-[44.12px] px-2 py-1">
                  <div className="flex items-center">
                    <IconButton
                      variant="text"
                      size="sm"
                      onClick={handleDecrement}
                      disabled={quantity === 1}
                    >
                      <MinusIcon className="h-4 w-4 font-bold" color="black" />
                    </IconButton>
                    <input
                      type="text"
                      id="counter-input-2"
                      data-input-counter
                      className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                      placeholder=""
                      value={quantity}
                    />
                    <IconButton
                      variant="text"
                      size="sm"
                      onClick={handleIncrement}
                      disabled={availableTotal <= 0}
                    >
                      <PlusIcon className="h-4 w-4 font-bold" color="black" />
                    </IconButton>
                  </div>
                </div>
                <Button
                  className={`${
                    availableTotal > 0 ? 'bg-[#A4BC46]' : 'bg-gray-300'
                  } rounded-[44.12px] flex items-center gap-2 w-auto`}
                  disabled={availableTotal <= 0}
                  onClick={() => handleAddItem(product)}
                >
                  {/* <ShoppingCartIcon className="h-6 w-6" /> */}
                  <img
                    src={`${BaseDirectories.LOGOS_DIR}/mini_cart.svg`}
                    alt="cart"
                  />
                  Add to Cart
                </Button>
                <IconButton color="gray" variant="text" className="shrink-0">
                  <HeartIcon className="h-6 w-6" />
                </IconButton>
              </div>
              <div className="flex flex-col my-6 gap-6">
                <div className="flex flex-row w-full items-center gap-6 md:gap-1">
                  <Typography className="sr-only">Size</Typography>
                  <p className="text-sm text-gray-500 cursor-default item-price-per-qty">
                    Size: <span className="text-gray-700">{product.size}</span>
                  </p>
                </div>
                <div className="flex flex-row w-full items-center gap-6 md:gap-1">
                  <Typography className="sr-only">Origin</Typography>
                  <p className="text-sm text-gray-500 cursor-default item-price-per-qty">
                    Origin:{' '}
                    <span className="text-gray-700">{product.origin}</span>
                  </p>
                </div>
                <div className="flex flex-row w-full items-center gap-6 md:gap-1">
                  <Typography className="sr-only">Product Code</Typography>
                  <p className="text-sm text-gray-500 cursor-default item-price-per-qty">
                    Product Code:{' '}
                    <span className="text-gray-700">
                      {product.product_code}
                    </span>
                  </p>
                </div>
                <div className="flex flex-row w-full items-center gap-6 md:gap-1">
                  <Typography className="sr-only">Product Code</Typography>
                  <p className="text-sm text-gray-500 cursor-default item-price-per-qty">
                    Tag:{' '}
                    <span className="text-gray-700">{product.category}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full px-8">
          <div className="mx-auto container ">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mb-0 w-full">
                  <div className="flex flex-col justify-evenly items-center gap-4 text-center rounded-lg border border-[#E4E4E4] px-4 py-3 dark:border-dark-3 sm:flex-row">
                    <a
                      onClick={() => handleTabOpen('description')}
                      className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 w-full text-gray-500 ${
                        open === 'description'
                          ? 'bg-[#BFC831] text-white'
                          : 'text-body-color hover:bg-white hover:text-[#BFC831]'
                      }`}
                    >
                      DESCRIPTION
                    </a>
                    <a
                      onClick={() => handleTabOpen('reviews')}
                      className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 w-full text-gray-500  ${
                        open === 'reviews'
                          ? 'bg-[#BFC831] text-white'
                          : 'text-body-color hover:bg-white hover:text-[#BFC831]'
                      }`}
                    >
                      REVIEWS
                    </a>
                  </div>
                  <TabContentDescription
                    details={product.description}
                    prodImg={product.imageSrc}
                    tabCategory="description"
                    open={open}
                  />
                  <TabContentReview
                    reviews={product.reviews}
                    tabCategory="reviews"
                    open={open}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <RelatedProductList products={relatedProducts} />
        )}
      </main>
    </div>
  );
};

export default ProductDetails;
