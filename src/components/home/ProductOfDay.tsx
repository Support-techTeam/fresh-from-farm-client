import {
  Carousel,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import BaseDirectories from '../../base_directory/BaseDirectory';

const products = [
  {
    id: 2,
    name: 'Dried Prawns (100g)',
    price_qty: '1.20',
    href: '#',
    price: '2.30',
    discount: '5',
    unit: 'g',
    imageSrc:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158338/f3-client/images/product_banana_lgmmdt.png',
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
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158338/f3-client/images/product_banana_lgmmdt.png',
    imageAlt: 'Banana',
    bestSeller: false,
    createdAt: '2024-04-20T00:00:00.000Z',
    updatedAt: '2024-04-26T00:00:00.000Z',
  },
];

function Product() {
  return (
    <Carousel
      transition={{ type: 'tween', duration: 0.2 }}
      className="bg-contain bg-center bg-no-repeat"
      autoplay={true}
      loop={true}
      autoplayDelay={5000}
      navigation={({ length }) => length}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 lg:left-28 md:left-32 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 lg:!right-28 md:!right-32 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      {products.map((product, index) => (
        <div
          className="relative h-full w-full flex justify-center items-center pt-6 pl-6 overflow-y-hidden"
          key={index}
        >
          <img
            src={product.imageSrc}
            alt="image 1"
            className="h-[80%] w-[80%] object-contain"
          />
          <div className="absolute bottom-0 left-34 md:bottom-0 md:left-48 right-0 w-full max-w-[140px] md:max-w-[180px] max-h-[100px] md:max-h-[120px] items-center mx-auto bg-white rounded-lg border-2 px-2 border-[#1F201C1F] overflow-y-hidden">
            <div className="group">
              <dl>
                <div className="my-2 flex flex-col justify-between w-full">
                  <div>
                    <div className="my-4 item-name text-[#272E32]">
                      <dt className="sr-only">name</dt>
                      <dd className="font-medium cursor-default truncate">
                        {product.name}
                      </dd>
                    </div>
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
                  <div>
                    <dt className="sr-only">Price</dt>
                    <dd className="text-sm text-gray-500 cursor-default item-price my-2">
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
                </div>
              </dl>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
export default function ProductOfTheDay() {
  return (
    <div className="bg-white text-gray-600 py-12 w-full overflow-x-hidden">
      <div className=" flex flex-col justify-center p-6 mx-auto lg:flex-row lg:justify-between bg-[#F5F5F5] overflow-x-hidden">
        <div
          className="container flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 "
          style={{
            backgroundImage: `url(${BaseDirectories.IMAGES_DIR}/Product_bg.png)`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Product />
        </div>
        <div className="container flex flex-col justify-center p-6 text-center rounded-sm lg:text-left ">
          <div className="flex h-full w-full items-center justify-center">
            <div className="">
              <Typography
                variant="lead"
                color="white"
                className="mb-4 opacity-80 text-[#FF750A] lily-script-one-regular"
              >
                Fresh From Farm
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-xl md:text-2xl lg:text-4xl text-[#5A773E]"
              >
                Product Of The Day
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 text-[#61676A] text-sm lg:w-2/3 w-full"
              >
                The products are imported the same day, fresh and healthy, the
                products will be sold the same day without leaving until the
                next day. We have full invoices so customers can rest assured.
              </Typography>
              <div className="flex justify-start gap-2">
                <Button
                  size="lg"
                  color="white"
                  className="bg-[#61676A] text-white rounded-full flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                  Explore Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
