import React from "react";
import Hero from "../components/Hero";
import HomePageProduct from "../components/HomePageProduct";
import HomPageBundle from "../components/HomPageBundle";
import HomePageBenifits from "../components/HomePageBenifits";
import eleatbenifite from "../data/eleatbenifite";
import ProductTestimonial from "../components/ProductTestimonial";
import AboutUsSection from "../components/AboutUsSection.jsx";
import HomeInsta from "../components/HomeInsta.jsx";


const Home = () => {
  return (
    <div>
    
      <Hero />
      <HomePageProduct />
      <HomPageBundle />
      <HomePageBenifits
        title={eleatbenifite.title}
        image={eleatbenifite.image}
        benefitleft={eleatbenifite.benefitleft}
        benefitRight={eleatbenifite.benefitRight}
      />
      <ProductTestimonial />
      <AboutUsSection />
      <HomeInsta />
    </div>
  );
};

export default Home;
