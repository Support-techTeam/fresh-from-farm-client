/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import BaseDirectories from '../../base_directory/BaseDirectory';
import { Typography, Button } from '@material-tailwind/react';

const ShoppingProcess = () => {
  return (
    <>
      {/*<!-- Component: Two columns even layout --> */}
      <section className="bg-contain bg-center min-h-[500px] bg-white md:py-12 py-2 w-full overflow-x-hidden flex justify-center items-center">
        <div className=" flex flex-col justify-center mx-auto lg:flex-row lg:justify-between overflow-x-hidden container px-6 m-auto">
          {/* Left Side */}

          <div className="container flex flex-col justify-center px-6 my-4 md:my-0 text-center rounded-sm lg:text-left ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-6 gap-1 place-items-center">
              <div className="col-span-1 md:col-span-1 lg:col-span-1 h-[211px] min-w-[205px] w-full flex flex-col justify-center gap-1 items-center bg-transparent text-[#61676A] rounded-lg">
                <img
                  src={`${BaseDirectories.IMAGES_DIR}/services/service_g_1.png`}
                  alt="service icon"
                  className="service-icon h-[69px] w-[79px] object-contain"
                />
                <p className="lead-service-header-text text-[#A4BC46]">
                  Free Delivery
                </p>
                <p className="lead-service-body-text">
                  Free shipping on all order over $40
                </p>
              </div>
              <div className="col-span-1 md:col-span-1 lg:col-span-1 h-[211px] min-w-[205px] w-full flex flex-col justify-center gap-1 items-center bg-transparent text-[#61676A] rounded-lg">
                <img
                  src={`${BaseDirectories.IMAGES_DIR}/services/service_g_2.png`}
                  alt="service icon"
                  className="service-icon h-[69px] w-[79px] object-contain"
                />
                <p className="lead-service-header-text text-[#A4BC46]">
                  Easy And Secure
                </p>
                <p className="lead-service-body-text">
                  Online payment with credit
                </p>
              </div>
              <div className="col-span-1 md:col-span-1 lg:col-span-1 h-[211px] min-w-[205px] w-full flex flex-col justify-center gap-1 items-center bg-transparent text-[#61676A] rounded-lg">
                <img
                  src={`${BaseDirectories.IMAGES_DIR}/services/service_g_3.png`}
                  alt="service icon"
                  className="service-icon h-[69px] w-[79px] object-contain"
                />
                <p className="lead-service-header-text text-[#A4BC46]">
                  100% Organic
                </p>
                <p className="lead-service-body-text">All products are 100%</p>
              </div>
              <div className="col-span-1 md:col-span-1 lg:col-span-1 h-[211px] min-w-[205px] w-full  flex flex-col justify-center gap-1 items-center bg-transparent text-[#61676A] rounded-lg">
                <img
                  src={`${BaseDirectories.IMAGES_DIR}/services/service_g_4.png`}
                  alt="service icon"
                  className="service-icon h-[69px] w-[79px] object-contain"
                />
                <p className="lead-service-header-text text-[#A4BC46]">
                  24/7 Support
                </p>
                <p className="lead-service-body-text">Delivery to any point</p>
              </div>
            </div>
          </div>

          {/* End of Left Side */}
          {/* Right Side */}

          <div className="container flex flex-col justify-center px-6 text-center rounded-sm lg:text-left ">
            <div className="flex h-full w-full items-center justify-center">
              <img
                src={`${BaseDirectories.IMAGES_DIR}/delivery.png`}
                alt="delivery icon"
                className="object-contain"
              />
            </div>
          </div>
          {/* End of Right Side */}
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}
      <section className="mx-auto w-full px-8">
        <div className="mx-auto container ">
          <div
            className={`py-2 text-base leading-relaxed text-[#727272]
           `}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons
              ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper suscipit
              lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoppingProcess;
