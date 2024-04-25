import { Carousel, Typography, Button } from '@material-tailwind/react';

export default function HeroSection() {
  return (
    <Carousel
      transition={{ type: 'tween', duration: 0.2 }}
      className="min-h-screen"
      autoplay={true}
      loop={true}
      autoplayDelay={5000}
      prevArrow={({}) => <></>}
      nextArrow={({}) => <></>}
    >
      <div className="relative h-full w-full min-h-screen">
        <img
          src="/images/hero_slide_1.png"
          alt="image 1"
          className="h-full w-full object-cover min-h-screen"
        />
        <div className="absolute inset-0 grid h-full w-full items-center pt-32 bg-black/40">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="lead"
              color="white"
              className="mb-4 opacity-80 text-[#F2B94A]"
            >
              Super Fast Delivery
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-[#F3E8D7] uppercase"
            >
              Natural 100% Organic
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-[#FFFFFF]"
            >
              Home delivery for African & groceries.
            </Typography>
            <div className="flex justify-start gap-2">
              <Button
                size="lg"
                color="white"
                className="bg-[#D39E3B] text-white rounded-full flex items-center gap-2"
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
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full min-h-screen">
        <img
          src="/images/hero_slide_2.png"
          alt="image 2"
          className="h-full w-full object-cover min-h-screen"
        />
        <div className="absolute inset-0 grid h-full w-full items-center pt-32 bg-black/40">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="lead"
              color="white"
              className="mb-4 opacity-80 text-[#F2B94A]"
            >
              Super Fast Delivery
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-[#F3E8D7] uppercase"
            >
              Natural 100% Organic
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-[#FFFFFF]"
            >
              Home delivery for African & groceries.
            </Typography>
            <div className="flex justify-start gap-2">
              <Button
                size="lg"
                color="white"
                className="bg-[#D39E3B] text-white rounded-full flex items-center gap-2"
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
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full min-h-screen">
        <img
          src="/images/hero_slide_3.png"
          alt="image 3"
          className="h-full w-full object-cover min-h-screen"
        />
        <div className="absolute inset-0 grid h-full w-full items-center pt-32 bg-black/40">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="lead"
              color="white"
              className="mb-4 opacity-80 text-[#F2B94A]"
            >
              Super Fast Delivery
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-[#F3E8D7] uppercase"
            >
              Natural 100% Organic
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-[#FFFFFF]"
            >
              Home delivery for African & groceries.
            </Typography>
            <div className="flex justify-start gap-2">
              <Button
                size="lg"
                color="white"
                className="bg-[#D39E3B] text-white rounded-full flex items-center gap-2"
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
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
