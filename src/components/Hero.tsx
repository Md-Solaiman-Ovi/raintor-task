import React from "react";
import { Button } from "./Button";

const Hero: React.FC = () => {
  return (
    <section className="relative px-8 py-20 bg-gradient-to-br from-green-200 via-blue-100 to-lime-200">
      <h2 className="text-4xl md:text-6xl xl:text-[78px] font-bold leading-snug">
        Trusted{" "}
        <span className="bg-black text-white px-2 rounded">Partner</span> for{" "}
        <br />
        Your Website{" "}
        <span className="bg-black text-white px-2 rounded">Develop.</span>
      </h2>
      <p className="mt-4 max-w-md text-gray-700 dark:text-gray-300">
        Building the world’s best marketing websites for over a decade. Your
        trusted partner for strategy, design, and dev.
      </p>
      <div className="mt-6">
        <Button variant="outline">📞 Schedule a Call</Button>
      </div>
    </section>
  );
};

export default Hero;
