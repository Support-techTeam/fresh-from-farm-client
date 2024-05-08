import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import { Typography } from '@material-tailwind/react';

const testimonials = [
  {
    content:
      'Great Service and Good Quality Product and it helped my wife osteoarthritis on her knees and hips and myself for arthritis. We have asked our doctor before we used it he said it is fine because we are on other medications. We have recommended to our friends and family in United States they have order and have been using Rumatis Cream. Thank You very much. Whoever has invented this cream. Kind Regards.',
    client: 'Jessica Devis',
    position: 'Full Stack Developer @Netflix',
    img: 'https://source.unsplash.com/50x50/?portrait?1',
    color: 1,
  },
  {
    content:
      'Great Service and Good Quality Product and it helped my wife osteoarthritis on her knees and hips and myself for arthritis. We have asked our doctor before we used it he said it is fine because we are on other medications. We have recommended to our friends and family in United States they have order and have been using Rumatis Cream. Thank You very much. Whoever has invented this cream. Kind Regards.',
    client: 'Marcell Glock',
    position: 'Graphic Designer, @Coinbase',
    img: 'https://source.unsplash.com/50x50/?portrait?2',
    color: 2,
  },
  {
    content:
      'Great Service and Good Quality Product and it helped my wife osteoarthritis on her knees and hips and myself for arthritis. We have asked our doctor before we used it he said it is fine because we are on other medications. We have recommended to our friends and family in United States they have order and have been using Rumatis Cream. Thank You very much. Whoever has invented this cream. Kind Regards.',
    client: 'Marcell Glock',
    position: 'Graphic Designer, @Coinbase',
    img: 'https://source.unsplash.com/50x50/?portrait?3',
    color: 1,
  },
  {
    content:
      'Great Service and Good Quality Product and it helped my wife osteoarthritis on her knees and hips and myself for arthritis. We have asked our doctor before we used it he said it is fine because we are on other medications. We have recommended to our friends and family in United States they have order and have been using Rumatis Cream. Thank You very much. Whoever has invented this cream. Kind Regards.',
    client: 'Marcell Glock',
    position: 'Graphic Designer, @Coinbase',
    img: 'https://source.unsplash.com/50x50/?portrait?4',
    color: 2,
  },
];
// eslint-disable-next-line
function TestimonialCard(props: any) {
  return (
    <div
      className={`flex flex-col max-w-sm mx-4 my-6 shadow-lg ${
        props.color == 1 ? 'bg-[#B2CC61]' : 'bg-[#F2B94A]'
      }`}
    >
      <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
        <p className="relative py-1 text-sm italic text-start text-white">
          <svg
            width="32"
            height="23"
            viewBox="0 0 32 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-2"
          >
            <path
              d="M8.70572 9.44914C10.04 9.85148 11.2082 10.6767 12.0351 11.8011C12.8621 12.9255 13.3032 14.2884 13.2924 15.6854C13.2924 17.4183 12.6058 19.0802 11.3838 20.3056C10.1617 21.5309 8.50429 22.2193 6.77606 22.2193C5.04783 22.2193 3.39038 21.5309 2.16834 20.3056C0.946296 19.0802 0.259766 17.4183 0.259766 15.6854C0.329431 14.1151 0.772172 12.5843 1.55114 11.2203L7.19168 0.489197H10.9471L8.70572 9.44914ZM26.7999 9.44914C28.1342 9.85148 29.3024 10.6767 30.1294 11.8011C30.9563 12.9255 31.3975 14.2884 31.3866 15.6854C31.3066 17.3663 30.5844 18.9518 29.3697 20.113C28.155 21.2743 26.5411 21.9221 24.8629 21.9221C23.1846 21.9221 21.5707 21.2743 20.356 20.113C19.1414 18.9518 18.4191 17.3663 18.3392 15.6854C18.4155 14.1163 18.8578 12.5869 19.6305 11.2203L25.2711 0.489197H29.0265L26.7999 9.44914Z"
              fill="white"
            />
          </svg>

          {props.content}
        </p>
        <div className="flex items-center mt-4 space-x-4">
          <img
            src={props.img}
            alt=""
            className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
          />
          <div>
            <p className="text-md font-semibold text-white">{props.client}</p>
            <p className="text-sm text-white">{props.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
const Testimonial = () => {
  useEffect(() => {
    const slider = new Glide('.testimonial_slide', {
      type: 'carousel',
      focusAt: 1,
      startAt: 0,
      perView: 2,
      animationDuration: 700,
      autoplay: 5000,
      gap: 10,
      breakpoints: {
        1024: {
          perView: 1,
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
      <section className="bg-contain bg-center min-h-[500px] bg-white py-0 w-full overflow-x-hidden flex justify-center items-center my-6">
        <div className="flex overflow-x-hidden px-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#CBE187]/40 to-[#FFFFFF] w-full">
          <div className="md:mx-10 flex flex-col justify-center p-0 lg:flex-row lg:justify-between overflow-x-hidden px-0">
            {/* Right Side */}
            <div className="z-10 container flex flex-col justify-center p-6 text-center rounded-sm lg:text-left bg-transparent">
              <div className="flex h-full w-full items-center justify-center mx-auto">
                <div className="">
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-4 opacity-80 text-[#FF750A] lily-script-one-regular"
                  >
                    Testimonials
                  </Typography>
                  <Typography
                    variant="h1"
                    color="white"
                    className="mb-4 text-xl md:text-2xl lg:text-4xl text-[#5A773E]"
                  >
                    What our happy customers say about us
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80 text-[#61676A] text-sm lg:w-2/3 w-full"
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud
                  </Typography>
                </div>
              </div>
            </div>
            {/* End of Right Side */}
            {/* Left Side */}
            <div className="relative container testimonial_slide flex flex-col justify-center p-6 text-center rounded-sm lg:text-left lg:max-w-[50%]">
              <div className="overflow-hidden container" data-glide-el="track">
                <div className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 justify-center items-center">
                  {testimonials.map((props, key) => (
                    <TestimonialCard key={key} {...props} />
                  ))}
                </div>
              </div>

              {/*    <!-- Controls --> */}
              <div
                className="absolute lg:left-6 lg:bottom-4 md:bottom-4 bottom-4 flex h-0 w-full items-center justify-start px-0"
                data-glide-el="controls"
              >
                <button
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-black text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none "
                  data-glide-dir="<"
                  aria-label="prev slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-white"
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
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-black text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none"
                  data-glide-dir=">"
                  aria-label="next slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 text-white"
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
            {/* End of Left Side */}
          </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
      </section>
      {/*<!-- End Two columns even layout --> */}
    </>
  );
};

export default Testimonial;
