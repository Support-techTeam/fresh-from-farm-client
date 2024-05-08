import React from 'react';
import BaseDirectories from '../../base_directory/BaseDirectory';
import { Typography, Button } from '@material-tailwind/react';

const ServicesProvided = () => {
  return (
    <>
      {/*<!-- Component: Two columns even layout --> */}
      <section
        className="bg-contain bg-center min-h-[500px] bg-[#A4BC46] py-12 w-full overflow-x-hidden flex justify-center items-center"
        style={{
          backgroundImage: `url(${BaseDirectories.IMAGES_DIR}/pattern_backgroud.png)`,
        }}
      >
        <div className=" flex flex-col justify-center p-6 mx-auto lg:flex-row lg:justify-between overflow-x-hidden container px-6 m-auto">
          {/* Right Side */}
          <div className="container flex flex-col justify-center p-6 text-center rounded-sm lg:text-left ">
            <div className="flex h-full w-full items-center justify-center">
              <div className="">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-xl md:text-2xl lg:text-4xl text-white lily-script-one-regular service-header-text"
                >
                  We are more than multiple service
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80 text-white text-sm lg:w-2/3 w-full service-body-text"
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat
                </Typography>

                <div className="flex justify-start gap-2">
                  <Button
                    size="lg"
                    color="white"
                    className="bg-white text-[#A4BC46] rounded-full flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5 fill-[#A4BC46]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                    About us
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* End of Right Side */}
          {/* Left Side */}
          <div className="container flex flex-col justify-center p-6 text-center rounded-sm lg:text-left ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center">
              <div className="col-span-1 md:col-span-1 lg:col-span-1 h-[211px] min-w-[205px] w-full flex flex-col justify-center gap-1 items-center bg-white text-[#61676A] rounded-lg">
                <img
                  src={`${BaseDirectories.IMAGES_DIR}/services/service_1.png`}
                  alt="service icon"
                  className="service-icon h-[69px] w-[79px] object-contain"
                />
                <p className="lead-service-header-text">Free Delivery</p>
                <p className="lead-service-body-text">
                  Delivery to any point of the city and regions
                </p>
              </div>
              <div className="col-span-1 md:col-span-1 lg:col-span-1 h-[211px] min-w-[205px] w-full flex flex-col justify-center gap-1 items-center bg-white text-[#61676A] rounded-lg">
                <img
                  src={`${BaseDirectories.IMAGES_DIR}/services/service_2.png`}
                  alt="service icon"
                  className="service-icon h-[69px] w-[79px] object-contain"
                />
                <p className="lead-service-header-text">Easy And Secure</p>
                <p className="lead-service-body-text">
                  Online payment with credit and debit card
                </p>
              </div>
              <div className="col-span-1 md:col-span-1 lg:col-span-1 h-[211px] min-w-[205px] w-full flex flex-col justify-center gap-1 items-center bg-white text-[#61676A] rounded-lg">
                <img
                  src={`${BaseDirectories.IMAGES_DIR}/services/service_3.png`}
                  alt="service icon"
                  className="service-icon h-[69px] w-[79px] object-contain"
                />
                <p className="lead-service-header-text">100% Organic</p>
                <p className="lead-service-body-text">
                  All products are 100% organic, certified and healthy
                </p>
              </div>
              <div className="col-span-1 md:col-span-1 lg:col-span-1 h-[211px] min-w-[205px] w-full  flex flex-col justify-center gap-1 items-center bg-white text-[#61676A] rounded-lg">
                <img
                  src={`${BaseDirectories.IMAGES_DIR}/services/service_4.png`}
                  alt="service icon"
                  className="service-icon h-[69px] w-[79px] object-contain"
                />
                <p className="lead-service-header-text">24/7 Support</p>
                <p className="lead-service-body-text">
                  Delivery to any point of the city and regions
                </p>
              </div>
            </div>
          </div>
          {/* End of Left Side */}
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}
    </>
  );
};

export default ServicesProvided;
