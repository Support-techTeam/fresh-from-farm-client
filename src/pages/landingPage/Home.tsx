import React from 'react';
import '../../styles/home.css';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../../components/home/HeroSection';
import ProductOfTheDay from '../../components/home/ProductOfDay';
import CategoryListConponent from '../../components/home/CategoryList';
import ProductCategoryList from '../../components/home/ProductCategoryList';
import ServicesProvided from '../../components/home/ServicesProvided';
import LearnMoreSection from '../../components/home/LearnMoreSection';
import BestSellersList from '../../components/home/BestSellersList';
import DiscountedOffers from '../../components/home/DiscountedOffers';
import RecipiesSection from '../../components/home/RecipiesSection';
import Testimonial from '../../components/home/Testimonial';
import FaqSection from '../../components/home/FaqSection';
import BlogSection from '../../components/home/BlogSection';

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home | Fresh From Farm Landing Page!</title>
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <main className="flex min-h-screen w-screen flex-col bg-white">
        <HeroSection />
        <ProductOfTheDay />
        <CategoryListConponent />
        <ProductCategoryList />
        <ServicesProvided />
        <LearnMoreSection />
        <BestSellersList />
        <DiscountedOffers />
        <RecipiesSection />
        <Testimonial />
        <FaqSection />
        <BlogSection />
      </main>
    </div>
  );
};

export default Home;
