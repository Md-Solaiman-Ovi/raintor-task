import React from "react";
import { Button } from "./Button";

const Hero: React.FC = () => {
  return (
    <section className="relative px-8 py-40 h-full">
      <h2 className="text-4xl md:text-6xl xl:text-[78px] font-bold leading-snug">
        Trusted{" "}
        <span className="bg-black text-white px-2 rounded-xl text-center">
          Partner
        </span>{" "}
        for <br />
        <br />
        Your Website{" "}
        <span className="bg-black text-white px-2 rounded-xl text-center">
          Develop.
        </span>
      </h2>
      <div className="flex flex-col justify-center items-center py-10">
        <div className="mt-4 max-w-3xl text-black dark:text-gray-300 text-lg font-normal">
          Building the world’s best marketing websites for over a decade. Your
          trusted partner for strategy, design, and dev.
        </div>
        <div>
          <div className="mt-6">
            <Button variant="outline">📞 Schedule a Call</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
