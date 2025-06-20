import React, { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import { initTheme } from "../utils/theme";

const DeveloperPortfolio: React.FC = () => {
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <main className="min-h-screen  dark:bg-black text-black dark:text-white bg-[url(/bg-img.png)] bg-cover w-full">
      <Header />
      <Hero />
    </main>
  );
};

export default DeveloperPortfolio;
