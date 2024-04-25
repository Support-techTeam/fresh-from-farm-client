import {
  Carousel,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';

function Product() {
  return (
    <Carousel
      transition={{ type: 'tween', duration: 0.2 }}
      className="bg-contain bg-center bg-no-repeat"
      autoplay={true}
      loop={true}
      autoplayDelay={5000}
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
      <div className="relative h-full w-full flex justify-center items-center pt-6 pl-6">
        <img
          src="/images/product_banana.png"
          alt="image 1"
          className="h-[80%] w-[80%] object-contain"
        />
      </div>
      <div className="relative h-full w-full flex justify-center items-center pt-6 pl-6">
        <img
          src="/images/product_banana.png"
          alt="image 2"
          className="h-[80%] w-[80%] object-contain"
        />
      </div>
      <div className="relative h-full w-full flex justify-center items-center pt-6 pl-6">
        <img
          src="/images/product_banana.png"
          alt="image 3"
          className="h-[80%] w-[80%] object-contain"
        />
      </div>
    </Carousel>
  );
}
export default function ProductOfTheDay() {
  return (
    <div className="bg-white text-gray-600 py-12 w-full overflow-x-hidden">
      <div className=" flex flex-col justify-center p-6 mx-auto lg:flex-row lg:justify-between bg-[#F5F5F5] overflow-x-hidden">
        <div className="container flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 ">
          {/* <img
            src="/images/Product_bg.png"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          /> */}
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
