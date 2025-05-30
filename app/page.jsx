"use client"; // MUST be the very first line in the file

import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Blogs from "@/components/homes/home-1/Blogs";
import Categories from "@/components/common/Categories";
import Cities from "@/components/homes/home-1/Cities";
import HelpCenter from "@/components/homes/home-1/HelpCenter";
import Hero from "@/components/homes/home-1/Hero";
import LoanCalculator from "@/components/homes/home-1/LoanCalculator";
import Partners from "@/components/homes/home-1/Partners";
import Properties from "@/components/homes/home-1/Properties";
import Properties2 from "@/components/homes/home-1/Properties2";
import Testimonials from "@/components/homes/home-1/Testimonials";
import "../public/scss/stylesC.scss";
import FeaturedListing from "@/components/common/FeaturedListing";

export default function Home() {
  return (
    <>
      <Header1 />
      <Hero />
      <div className="main-content ">
        <Categories />
        {/* <Properties /> */}
        <HelpCenter />
        <Cities />
        {/* <LoanCalculator /> */}
        {/* <Properties2 />
        <Partners />
        <Blogs /> */}
        {/*  <Testimonials /> */}
        <FeaturedListing />
      </div>
      <Footer1 />
    </>
  );
}
