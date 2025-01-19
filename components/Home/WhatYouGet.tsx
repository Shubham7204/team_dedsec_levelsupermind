import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";
import * as Icons from "@/Svg/Icons";
import { GetStartedBtnYellow } from "./GetStartedBtn";

const WhatYouGet = () => {
  const services = [
    {
      title: "AI-Driven Transcription & Translation",
      detail:
        "Transcribe videos into English and translate to 10 regional languages with advanced AI models, ensuring accurate and efficient content processing.",
      icon: <Icons.BookKeeping className="" />,
    },
    {
      title: "Multilingual Blog Publishing",
      detail:
        "Effortlessly publish SEO-optimized blogs in multiple languages with unique URLs for each, maximizing your reach to diverse audiences.",
      icon: <Icons.Financial className="" />,
    },
    {
      title: "Fast Processing & Dynamic Routing",
      detail:
        "Transcription and translation done within seconds. Dynamic routing for language-specific URLs ensures smooth navigation and SEO indexing.",
      icon: <Icons.Tax className="" />,
    },
    {
      title: "User-Friendly Dashboard",
      detail:
        "Upload text or videos, manage transcriptions, translations, and blog posts with ease. Review and edit content to ensure quality before publishing.",
      icon: <Icons.Budget className="" />,
    },
  ];

  return (
    <ComponentWrapper id="services" style="w-full lg:py-16 py-10 bg-brand-main">
      <div className="size-full flex flex-col items-center justify-start gap-8 sm:gap-12">
        <div className="w-full flex lg:flex-row flex-col items-center lg:items-end justify-start gap-4 lg:justify-between">
          <div className="flex flex-col items-start justify-start">
            <h2 className="font-poppins text-balance text-center text-white-main text-[44px] sm:text-[56px] font-semibold">
              Transform Your Blogging Experience with AI-Powered Tools
            </h2>
            <p className="text-white-main text-base sm:text-lg font-normal text-center text-balance">
              SocialFlow offers a seamless dashboard for text and video input, transcription, translation, and publishing in 10 regional languages with cutting-edge AI.
            </p>
          </div>
          <GetStartedBtnYellow 
            text="Learn More" 
            href="https://socialflow.streamlit.app/"
            icon={<Icons.BookKeeping className="text-xl" />}
          />
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