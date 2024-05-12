/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/20/solid';
import Glide from '@glidejs/glide';
import moment from 'moment';

const blogPosts = [
  {
    title: 'Reasons why you should choose organic',
    createdAt: '2024-01-20T00:00:00.000Z',
    updatedAt: '2024-01-20T00:00:00.000Z',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158343/f3-client/images/Picture_20_jciof7.png',
    likes: 4,
    deslikes: 2,
    comments: [
      {
        name: 'Sara Smith',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: '2024-01-20T00:00:00.000Z',
        updatedAt: '2024-01-20T00:00:00.000Z',
        likes: 4,
        delikes: 0,
      },
      {
        name: 'John Doe',
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: '2024-01-20T00:00:00.000Z',
        updatedAt: '2024-01-20T00:00:00.000Z',
        likes: 1,
        delikes: 8,
      },
    ],
  },
  {
    title: 'Reasons why you should choose organic',
    createdAt: '2024-01-21T00:00:00.000Z',
    updatedAt: '2024-01-21T00:00:00.000Z',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158336/f3-client/images/Picture_21_tqlvvs.png',
    likes: 4,
    deslikes: 2,
    comments: [],
  },
  {
    title: 'Reasons why you should choose organic',
    createdAt: '2024-01-22T00:00:00.000Z',
    updatedAt: '2024-01-22T00:00:00.000Z',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158370/f3-client/images/Picture_22_bebc5k.png',
    likes: 4,
    deslikes: 2,
    comments: [],
  },
  {
    title: 'Reasons why you should choose organic',
    createdAt: '2024-01-23T00:00:00.000Z',
    updatedAt: '2024-01-23T00:00:00.000Z',
    imageSrc:
      'https://res.cloudinary.com/dpqbvcvah/image/upload/v1714158372/f3-client/images/Picture_1_mkqpv8.png',
    likes: 4,
    deslikes: 2,
    comments: [],
  },
];
const BlogSection = () => {
  useEffect(() => {
    const slider = new Glide('.blog_slide', {
      type: 'carousel',
      focusAt: 1,
      startAt: 0,
      perView: 3,
      animationDuration: 700,
      autoplay: 5000,
      gap: 10,
      breakpoints: {
        1024: {
          perView: 2,
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
    <div>
      <main className="mx-auto container px-4 sm:px-6 lg:px-8 blog_slide">
        <div className="flex justify-between pb-4 pt-24">
          <div className="flex flex-col text-[#FF750A]">
            <h5 className="lily-script-one-regular">My Blog</h5>
            <h1 className="text-4xl font-extrabold text-[#6e832b] jost-bold">
              Latest News
            </h1>
          </div>
          <div
            className="flex flex-row justify-end items-end "
            data-glide-el="controls"
          >
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none "
              data-glide-dir="<"
              aria-label="prev slide"
            >
              <ArrowLeftCircleIcon
                className="h-8 w-8 hover:fill-gray-600 hover:h-9 hover:w-9"
                aria-hidden="true"
              />
              <title>prev slide</title>
            </button>

            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none"
              data-glide-dir=">"
              aria-label="next slide"
            >
              <ArrowRightCircleIcon
                className="h-8 w-8 hover:fill-gray-600 hover:h-9 hover:w-9"
                aria-hidden="true"
                data-glide-dir=">"
                aria-label="next slide"
              />
              <title>next slide</title>
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Blogs
          </h2>

          <div className="grid grid-cols-1 lg:gap-x-0 gap-x-8 gap-y-10 lg:grid-cols-1">
            <div className="lg:col-span-4">
              <div className="container flex flex-col justify-center p-0 text-center rounded-lg lg:text-left">
                <div
                  className="overflow-hidden container"
                  data-glide-el="track"
                >
                  <div className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] flex w-full overflow-hidden p-0 justify-center items-center">
                    {blogPosts.map((blog, index) => (
                      <div
                        key={index}
                        className="relative group border border-white rounded-lg p-0 h-[290px]"
                      >
                        <a className="block cursor-pointer bg-white rounded-lg image-container">
                          <img
                            alt="Blog Image"
                            src={blog.imageSrc}
                            className="h-full max-h-[207px] md:max-h-[247px] w-full object-cover object-center group-hover:opacity-75 rounded-lg hover:border-[#C0DA71] hover:border-[1.58px]"
                          />
                        </a>
                        {/* Blog Card Start */}
                        <div className="absolute bottom-8 md:bottom-4 left-0 right-0 w-full max-w-[80%] items-center mx-auto bg-white rounded-lg border-2 px-2 border-[#1F201C1F]">
                          <div className="group">
                            <dl>
                              <div className="my-2 text-gray-500 item-name flex flex-row justify-between w-full">
                                <div>
                                  <dt className="sr-only">date</dt>
                                  <dd className="font-medium cursor-default">
                                    {moment(blog.createdAt).format(
                                      'MMM DD, YYYY',
                                    )}
                                  </dd>
                                </div>
                                <div>
                                  <dt className="sr-only">comments</dt>
                                  <dd className="font-medium cursor-default">
                                    {blog.comments.length > 0
                                      ? `${blog.comments.length} Comments`
                                      : 'No Comments'}
                                  </dd>
                                </div>
                              </div>
                              <div className="my-2">
                                <dt className="sr-only">title</dt>
                                <dd className="text-sm blog-title cursor-default item-price-per-qty">
                                  {blog.title}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                        {/* Blog Card End */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
      </main>
    </div>
  );
};

export default BlogSection;
