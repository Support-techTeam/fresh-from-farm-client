import React from 'react';
import BaseDirectories from '../../base_directory/BaseDirectory';
import { Button } from '@material-tailwind/react';

const LearnMoreSection = () => {
  return (
    <section className="relative min-h-[500px] py-12 my-16 w-full overflow-x-hidden flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BaseDirectories.IMAGES_DIR}/hero_slide_2.png)`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r group-buy-section"></div>

      <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between absolute">
        <div className="flex flex-col justify-center items-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left gap-4 text-nowrap">
          <p className="info-group-buy-leading text-xl md:text-3xl lg:text-5xl">
            Save more on delivery with
          </p>
          <p className="info-group-buy-body text-xl md:text-3xl lg:text-5xl">
            GROUP BUYING
          </p>
          <div className="flex flex-col max-w-[156px] space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center">
            <Button
              size="md"
              color="white"
              className="bg-[#A4BC46] text-white rounded-full flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 fill-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMoreSection;
