import React, { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import { initTheme } from "../utils/theme";
import WhyChooseMe from "./WhyChooseMe";

const DeveloperPortfolio: React.FC = () => {
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <main className="min-h-screen  dark:bg-slate-900 text-black dark:text-white bg-[url(/bg-img.png)] bg-cover ">
      <Header />
      <Hero />
      <WhyChooseMe />
    </main>
  );
};

export default DeveloperPortfolio;
