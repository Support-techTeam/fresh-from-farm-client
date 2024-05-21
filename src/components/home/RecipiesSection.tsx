/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import BaseDirectories from '../../base_directory/BaseDirectory';

const recipiesList = [
  {
    id: 1,
    name: 'Egusi Soup',
    image:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158360/f3-client/images/Picture_15_gweqca.png',
    ingridients: ['Crispy Shrimp', 'Salt', 'Pepper', 'Oil', 'Water', 'Beans'],
    price: 25.0,
  },
  {
    id: 2,
    name: 'Yam Porridge (Asaro)',
    image:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158368/f3-client/images/Picture_food_1_n1sepi.png',
    ingridients: ['Crispy Shrimp', 'Salt', 'Pepper', 'Oil', 'Water', 'Beans'],
    price: 22.7,
  },
  {
    id: 3,
    name: 'Jollof rice and chicken',
    image:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158336/f3-client/images/Picture_food_2_sr1agu.png',
    ingridients: ['Crispy Shrimp', 'Salt', 'Pepper', 'Oil', 'Water', 'Beans'],
    price: 21.4,
  },
  {
    id: 4,
    name: 'Moin moin',
    image:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158341/f3-client/images/Picture_food_3_zixqfx.png',
    ingridients: ['Crispy Shrimp', 'Salt', 'Pepper', 'Oil', 'Water', 'Beans'],
    price: 15.8,
  },
  {
    id: 5,
    name: 'Crispy Shrimp',
    image:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158371/f3-client/images/Picture_18_lkucl4.png',
    ingridients: ['Crispy Shrimp', 'Salt', 'Pepper', 'Oil', 'Water', 'Beans'],
    price: 26.7,
  },
  {
    id: 6,
    name: 'Crispy Shrimp',
    image:
      'https://res.cloudinary.com/freshfromfarm/image/upload/v1714158341/f3-client/images/Picture_food_3_zixqfx.png',
    ingridients: ['Crispy Shrimp', 'Salt', 'Pepper', 'Oil', 'Water', 'Beans'],
    price: 24.7,
  },
];
const RecipiesSection = () => {
  const [viewingImage, setViewIngImage] = React.useState(recipiesList[0].image);

  const [recipiePrice, setRecepiePrice] = React.useState(recipiesList[0].price);
  useEffect(() => {
    const slider = new Glide('.recipies_slide', {
      type: 'carousel',
      focusAt: 1,
      startAt: 0,
      perView: 4,
      animationDuration: 700,
      gap: 10,
      breakpoints: {
        1024: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Two columns even layout --> */}
      <section className="min-h-[500px] bg-[#A4BC46] py-12 w-full overflow-x-hidden flex flex-col justify-center items-center">
        {/*<!-- Component: Carousel with controls inside --> */}
        <div className="bg-contain bg-center recipies_slide relative sm:w-[88%] md:w-[80%] lg:w-[88%] w-[90%] container xl:px-20 lg:px-8 md:px-10 px-4 py-4 min-h-[300px]">
          {/*    <!-- Slides --> */}
          <div className="overflow-hidden container" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 justify-center items-center">
              {recipiesList &&
                recipiesList?.length > 0 &&
                recipiesList.map((recipie, index) => (
                  <li
                    key={index}
                    className="flex m-0 p-2 w-full cursor-default justify-center items-center"
                    onClick={() => {
                      setViewIngImage(recipie.image);
                      setRecepiePrice(recipie.price);
                    }}
                  >
                    <div
                      key={index}
                      className="border-0 hover:border-[#C0DA71] rounded-lg min-w-[250px]"
                    >
                      <a className="flex cursor-pointer bg-[#dae2bb] bg-opacity-40 rounded-lg p-2 px-4">
                        <img
                          alt=""
                          src={recipie.image}
                          className="h-[118px] w-[118px] object-cover object-center group-hover:opacity-75 rounded-full"
                        />

                        <div className="flex flex-wrap justify-between items-center rounded-b-lg px-2 text-white text-wrap font-bold lily-script-one-regular">
                          <dl>
                            <div className="discount-item-name">
                              <dt className="sr-only">name</dt>
                              <dd className="font-medium">{recipie.name}</dd>
                            </div>
                          </dl>
                        </div>
                      </a>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          {/*    <!-- Controls --> */}
          <div
            className="absolute left-0 top-1/3 flex h-0 w-full items-center justify-between px-0"
            data-glide-el="controls"
          >
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none "
              data-glide-dir="<"
              aria-label="prev slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>prev slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none"
              data-glide-dir=">"
              aria-label="next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>next slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
        {/*<!-- End Carousel with controls inside --> */}

        <div
          className="container flex items-center justify-center p-2 mt-2 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          style={{
            backgroundImage: `url(${BaseDirectories.IMAGES_DIR}/pattern_backgroud.png)`,
          }}
        >
          <div
            className="relative h-full w-full flex justify-center items-center"
            style={{
              backgroundImage: `url(${BaseDirectories.IMAGES_DIR}/recipe_bg.png)`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img
              src={viewingImage}
              alt="image 2"
              className="h-full w-full p-6 object-contain"
            />

            <div
              className="absolute top-0 right-0 left-44 mx-auto rounded-sm flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url(${BaseDirectories.IMAGES_DIR}/price_tag.png)`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100px',
                width: '100px',
              }}
            >
              <div className="group flex justify-center items-center w-full h-8 p-1 hover:rounded-tl-lg">
                <p className="text-sm recipe-price p-2">
                  {recipiePrice
                    ? new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'GBP',
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      }).format(Number(recipiePrice))
                    : new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'GBP',
                        maximumFractionDigits: 2,
                        minimumFractionDigits: 2,
                      }).format(0)}
                  <br />
                  <span className="recipe-tag text-wrap">
                    /1 set for five plates
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}
    </>
  );
};

export default RecipiesSection;
