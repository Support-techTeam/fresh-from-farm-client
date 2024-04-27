/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BestSellerItem from '../products/BestSellerItem';

export default function BestSellersList() {
  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="flex md:flex-row flex-col md:justify-between justify-start pb-1 pt-10">
            <div className="flex flex-col text-[#FF750A]">
              <h5 className="lily-script-one-regular">Our Products</h5>
              <h1 className="text-4xl font-extrabold text-[#6e832b] jost-bold">
                Best Sellers
              </h1>
            </div>
            <div className="flex flex-row items-end ">
              <Link to="/" className="all-products-link text-md">
                View all products
              </Link>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-10 pt-2">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:gap-x-0 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Product grid */}
              <div className="lg:col-span-4">
                <BestSellerItem />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
