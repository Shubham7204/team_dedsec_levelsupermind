import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";
import * as Icons from "@/Svg/Icons";
import { GetStartedBtnYellow } from "./GetStartedBtn";

const WhatYouGet = () => {
  const services = [
    {
      title: "Langflow-Powered Workflows",
      detail:
        "Design AI-driven workflows seamlessly to analyze social media engagement data with Langflow.",
      icon: <Icons.BookKeeping className="" />, // Keeping existing icon
    },
    {
      title: "Astra DB Integration",
      detail:
        "Leverage DataStax Astra DB for storing and querying engagement metrics with speed and efficiency.",
      icon: <Icons.Financial className="" />, // Keeping existing icon
    },
    {
      title: "AI Insights with GPT",
      detail:
        "Generate actionable insights using GPT integration for understanding trends in social media performance.",
      icon: <Icons.Tax className="" />, // Keeping existing icon
    },
    {
      title: "Custom Engagement Analytics",
      detail:
        "Build tailored modules to analyze post types, metrics, and user engagement effectively.",
      icon: <Icons.Budget className="" />, // Keeping existing icon
    },
  ];

  return (
    <ComponentWrapper id="services" style="w-full lg:py-16 py-10 bg-brand-main">
      <div className="size-full flex flex-col items-center justify-start gap-8 sm:gap-12">
        <div className="w-full flex lg:flex-row flex-col items-center lg:items-end justify-start gap-4 lg:justify-between">
          <div className="flex flex-col items-start justify-start">
            <h2 className="font-poppins text-balance text-center text-white-main text-[44px] sm:text-[56px] font-semibold">
              What You Get with SocialFlow
            </h2>
            <p className="text-white-main text-base sm:text-lg font-normal text-center text-balance">
              SocialFlow equips you with cutting-edge tools to analyze and
              optimize social media engagement effortlessly.
            </p>
          </div>
          <GetStartedBtnYellow text="Learn More" />
        </div>
        {/* Cards Here */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item, index) => (
            <div
              key={index}
              className="size-full border border-white-main rounded-[30px] p-4 pb-5 flex flex-col items-center sm:items-start justify-start gap-2"
            >
              {item.icon}
              <h3 className="text-white-main text-balance text-xl sm:text-2xl font-bold sm:w-[80%] text-center sm:text-left">
                {item.title}
              </h3>
              <p className="text-base text-white-main font-light text-balance sm:text-left text-center">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default WhatYouGet;
