// import { Typography } from "@material-tailwind/react";

import BaseDirectories from '../base_directory/BaseDirectory';

// const currentYear = new Date().getFullYear();

export function FooterMain() {
  return (
    <footer className={`px-4 py-12 mx-0 max-w-screen bg-cover bg-gray-500`}>
      <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
        <div className="md:col-span-1 col-span-3 mt-2">
          {/* Social Section */}
          <div className="md:col-start-1 md:col-end-1 col-span-8 md:pl-4">
            <p className="mb-3 text-sm font-semibold tracking-wider text-gray-100 uppercase mt-1">
              Follow
            </p>
            <div className="flex flex-row sm:flex-col items-center md:items-start justify-center gap-4 py-4">
              <a
                className="pointer-events-none"
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${BaseDirectories.LOGOS_DIR}/facebook.svg`}
                  alt="facebook_logo"
                  className="dark:invert"
                  width={31}
                  height={31}
                />
              </a>
              <a
                className="pointer-events-none"
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${BaseDirectories.LOGOS_DIR}/instagram.svg`}
                  alt="instagram_logo"
                  className="dark:invert"
                  width={31}
                  height={31}
                />
              </a>
              <a
                className="pointer-events-none"
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${BaseDirectories.LOGOS_DIR}/pint_social.svg`}
                  alt="pint_social_logo"
                  className="dark:invert"
                  width={31}
                  height={31}
                />
              </a>
              <a
                className="pointer-events-none"
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${BaseDirectories.LOGOS_DIR}/twitter.svg`}
                  alt="twitter_logo"
                  className="dark:invert"
                  width={31}
                  height={31}
                />
              </a>
              <a
                className="pointer-events-none"
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`${BaseDirectories.LOGOS_DIR}/bits_social.svg`}
                  alt="bits_social_logo"
                  className="dark:invert"
                  width={31}
                  height={31}
                />
              </a>
            </div>
          </div>
          {/* End Social Section */}
        </div>
        {/* Nav Section */}
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-sm font-semibold tracking-wider text-gray-100 uppercase mt-2">
            Product
          </p>
          <a
            href="#"
            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
          >
            Features
          </a>
          <a
            href="#"
            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
          >
            Integrations
          </a>
          <a
            href="#"
            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
          >
            Documentation
          </a>
          <a
            href="#"
            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
          >
            FAQs
          </a>
          <a
            href="#"
            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
          >
            Pricing
          </a>
        </nav>
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-sm mt-2 font-semibold tracking-wider text-gray-100 uppercase">
            About
          </p>
          <a
            href="#"
            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
          >
            Press-Kit
          </a>
          <a
            href="#"
            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
          >
            Company
          </a>
          <a
            href="#"
            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
          >
            Privacy
          </a>
          <a
            href="#"
            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
          >
            Blog
          </a>
        </nav>
        <nav className="col-span-2 md:col-span-1 lg:col-span-2">
          <p className="mb-3 text-sm mt-2 font-semibold tracking-wider text-gray-100 uppercase">
            Contact
          </p>
          <a
            href="#"
            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
          >
            Twitter
          </a>
          <a
            href="#"
            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
          >
            Instagram
          </a>
          <a
            href="#"
            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
          >
            Email
          </a>
          <a
            href="#"
            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
          >
            Advertising
          </a>
          <a
            href="#"
            className="flex mb-3 text-sm font-medium text-gray-100 transition md:mb-2 hover:text-primary"
          >
            Chat
          </a>
        </nav>
        {/* End Nav Section */}
        <div className="col-span-3">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
            SUBSCRIBE TO OUR NEWSLETTER
          </p>
          <form action="#" className="mb-2">
            <div className="form-append">
              <input
                className="form-input form-input-sm"
                type="email"
                placeholder="Enter your email"
              />
              <button className="btn btn-light-primary btn-sm" type="submit">
                Subscribe
              </button>
            </div>
          </form>
          <p className="text-xs leading-normal text-gray-500">
            Get lessons and insights on how to grow your freelance business.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
        <p className="mb-6 text-sm text-left text-gray-600 md:mb-0">
          © Copyright 2020 Skcript. All Rights Reserved.
        </p>
        <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
          <a
            href="#"
            className="text-sm text-gray-600 transition hover:text-primary"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-sm text-gray-600 transition hover:text-primary"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
