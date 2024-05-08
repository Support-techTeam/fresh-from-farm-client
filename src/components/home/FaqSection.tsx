import React from 'react';
import BaseDirectories from '../../base_directory/BaseDirectory';
import { Button, Typography } from '@material-tailwind/react';
import InputField from '../common/InputField';

const Faq = () => {
  return (
    <div className="container px-6 m-auto">
      <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 md:col-span-8 lg:col-span-12">
          <div className="">
            <Typography
              variant="lead"
              color="white"
              className="mb-4 opacity-80 text-[#FF750A] lily-script-one-regular"
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-2xl lg:text-4xl text-[#5A773E]"
            >
              You’ve Got any questions?
            </Typography>
          </div>
          <div className="space-y-4">
            <details
              className="group [&_summary::-webkit-details-marker]:hidden max-w-[658px]"
              open
            >
              <summary className="px-4 py-6 flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-[#272E32]">
                <h2 className="font-medium text-justify">
                  How to chat with courier?
                </h2>
                <svg
                  className="size-8 shrink-0 transition duration-300 group-open:-rotate-180 bg-[#A4BC46] text-white rounded-full p-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <Typography
                variant="lead"
                color="white"
                className="mt-4 px-4 leading-relaxed opacity-80 text-[#61676A] text-sm text-justify"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </Typography>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden max-w-[658px]">
              <summary className="px-4 py-6 flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-[#272E32]">
                <h2 className="font-medium text-justify">How to buy?</h2>
                <svg
                  className="size-8 shrink-0 transition duration-300 group-open:-rotate-180 bg-[#A4BC46] text-white rounded-full p-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <Typography
                variant="lead"
                color="white"
                className="mt-4 px-4 leading-relaxed opacity-80 text-[#61676A] text-sm text-justify"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </Typography>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden max-w-[658px]">
              <summary className="px-4 py-6 flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-[#272E32]">
                <h2 className="font-medium text-justify">
                  How can I return the product if I am not satisfied?
                </h2>
                <svg
                  className="size-8 shrink-0 transition duration-300 group-open:-rotate-180 bg-[#A4BC46] text-white rounded-full p-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <Typography
                variant="lead"
                color="white"
                className="mt-4 px-4 leading-relaxed opacity-80 text-[#61676A] text-sm text-justify"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </Typography>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="container px-6 m-auto">
      <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 md:col-span-8 lg:col-span-12">
          <div className="space-y-2">
            <div className="flex flex-col">
              <Typography
                variant="lead"
                color="white"
                className="mb-4 opacity-80 text-[#FF750A] lily-script-one-regular"
              >
                special offer
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-xl md:text-2xl lg:text-4xl text-[#5A773E]"
              >
                Sign up for weekly food
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-4 opacity-80 text-[#61676A] text-sm w-full service-body-text"
              >
                Sign up for weekly food delivery and get 10% off your total
                bill, plus the freshest food will be delivered to your door and
                will include a selection of seasonal fruits and vegetables.
                There will be packages for customers to choose from
              </Typography>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row">
            <div className="w-full lg:w-1/2 px-2">
              <form className="space-y-6">
                <InputField
                  name="Name..."
                  label="Name..."
                  placeholder="Name..."
                  classess="rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg h-12"
                />

                <InputField
                  name="Phone number..."
                  label="Phone number..."
                  placeholder="Phone number..."
                  classess="rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg h-12"
                />
                <InputField
                  name="Email..."
                  label="Email..."
                  placeholder="Email..."
                  classess="rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg h-12"
                />
                <InputField
                  name="Address..."
                  label="Address..."
                  placeholder="Address..."
                  classess="rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg h-12"
                />
                <div className="flex justify-start gap-2">
                  <Button
                    size="lg"
                    color="black"
                    className="bg-black text-white rounded-full flex items-center gap-2"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>

            <div className="w-full lg:w-1/2 px-2 mt-6 flex justify-center">
              <img
                src={`${BaseDirectories.IMAGES_DIR}/moin_moin.png`}
                alt=""
                className="h-[293px] w-[201px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  return (
    <>
      {/*<!-- Component: Two columns even layout --> */}
      <section className="bg-contain bg-center min-h-[500px] bg-[#F5F5F5] py-4 w-full overflow-x-hidden flex justify-center items-center my-8">
        <div className=" flex flex-col justify-evenly p-6 mx-auto lg:flex-row lg:justify-evenly overflow-x-hidden container px-6 m-auto">
          {/* Right Side */}
          <div className="container flex flex-col rounded-sm lg:text-left">
            <div className="grid grid-cols-1 ">
              <Faq />
            </div>
          </div>
          {/* End of Right Side */}
          {/* Left Side */}
          <div className="container flex flex-col rounded-sm lg:text-left">
            <div className="grid grid-cols-1">
              <ContactForm />
            </div>
          </div>
          {/* End of Left Side */}
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}
    </>
  );
};

export default FaqSection;
