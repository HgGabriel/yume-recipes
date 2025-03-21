import React from "react";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import TrendingSection from "../../components/TrendingSection/TrendingSection";
import IngredientsSection from "../../components/IngredientsSection/IngredientsSection";

const Home: React.FC = () => {
  return (
    <>
      <HomeBanner />
      <TrendingSection />
      <IngredientsSection />
    </>
  );
};

export default Home;
