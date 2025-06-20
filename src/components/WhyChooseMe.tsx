import React from "react";
import { Button } from "./Button";
import ReactIcon from "../icons/ReactIcon";

const skills = [
  {
    title: "HTML & CSS",
    desc: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    title: "Javascript",
    desc: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    title: "Webflow",
    desc: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
];

const WhyChooseMe: React.FC = () => {
  return (
    <section className="relative bg-black text-white px-4 md:px-12 py-16 rounded-[40px] mx-10">
      <div className="flex justify-between items-start flex-wrap gap-6">
        <div className="space-y-6 max-w-xl">
          <Button className="border-white " variant="outline">
            ↓ Why Choose me
          </Button>
          <h2 className="text-4xl md:text-[58px] font-bold leading-tight">
            <span> My Extensive</span> <br />
            <span> List of Skills</span>
          </h2>
        </div>
        <div className="text-sm max-w-xl text-right mt-4 md:mt-0">
          <p className="text-gray-300 text-base md:text-lg text-end">
            <span> Building the worlds best marketing Your</span> <br />
            <span> trusted partner for strategy, design, and dev.</span>
          </p>
          <div className="mt-4 flex justify-end gap-2">
            <button className="border border-white rounded-full w-10 h-10 flex items-center justify-center">
              ←
            </button>
            <button className="border border-white rounded-full w-10 h-10 flex items-center justify-center">
              →
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`bg-zinc-900 p-6 rounded-2xl shadow-md text-white ${
              i === 1 ? "rotate-[2deg]" : ""
            }`}
          >
            <div className="mb-12">
              <ReactIcon />
            </div>
            <h3 className="font-bold text-lg md:text-[26px] mb-5">
              {skill.title}
            </h3>
            <p className="text-sm md:text-base text-gray-400">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseMe;
