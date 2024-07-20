/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import BaseDirectories from '../../base_directory/BaseDirectory';
import { Button } from '@material-tailwind/react';

const ShoppingBannerSection = () => {
  return (
    <section className="mx-auto min-h-[500px] my-5 w-full overflow-x-hidden flex justify-center items-center container">
      <img
        src={`${BaseDirectories.IMAGES_DIR}/product_detail_barner.png`}
        alt="banner"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default ShoppingBannerSection;
