import BaseDirectories from '../../base_directory/BaseDirectory';
import { Typography, Button } from '@material-tailwind/react';
import DiscountListItems from '../products/DiscountListItems';

export default function DiscountedOffers() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto px-6 lg:px-0">
        <div className="lg:ml-20 ml-0 mx-auto grid grid-cols-1 gap-x-0 gap-y-0 lg:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <img
            src={`${BaseDirectories.IMAGES_DIR}/discountedSales.png`}
            alt="Product screenshot"
            className="object-cover sm:w-[57rem] col-span-3 lg:col-span-1 h-full"
          />
          <div className="bg-[#CBE187] col-span-3 lg:col-span-2 px-6 py-8">
            <div className="flex h-full w-full items-center justify-start overflow-hidden">
              <div className="">
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-4 opacity-80 text-[#FF750A] lily-script-one-regular"
                >
                  Combo sale
                </Typography>
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-xl md:text-2xl lg:text-4xl text-[#5A773E]"
                >
                  Get More Discount
                </Typography>
                <DiscountListItems />
                <div className="flex justify-start gap-2 mt-4">
                  <Button
                    size="lg"
                    color="white"
                    className="bg-[#272E32] text-white rounded-full flex items-center gap-2"
                  >
                    <img src="/logos/cart.svg" alt="cart" />
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
