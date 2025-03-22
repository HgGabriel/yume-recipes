import React from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import TrendingSection from "../../components/TrendingSection/TrendingSection";
import IngredientsSection from "../../components/IngredientsSection/IngredientsSection";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";

const Home: React.FC = () => {
  return (
    <>
      <HomeBanner />
      <TrendingSection />
      <IngredientsSection />
      <CategoriesSection />
    </>
  );
};

export default Home;