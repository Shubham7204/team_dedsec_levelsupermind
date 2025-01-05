import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";
import Image from "next/image";

const Resources = () => {
  const resources = [
    {
      title: "Maximize Your Social Media Insights with Langflow",
      detail:
        "Discover how Langflow can help you automate and enhance your social media analytics workflows.",
      time: "5 min read",
      image: "/Assets/Resource1.png",
    },
    {
      title: "Using DataStax Astra DB for Scalable Social Media Data Storage",
      detail:
        "Learn how to store and analyze large sets of social media engagement data using Astra DB.",
      time: "4 min read",
      image: "/Assets/Resource2.png",
    },
    {
      title: "GPT for Social Media Engagement Insights",
      detail:
        "Understand how GPT can generate valuable insights from your social media engagement metrics.",
      time: "6 min read",
      image: "/Assets/Resource3.png",
    },
  ];

  return (
    <ComponentWrapper
      id="resources"
      style="w-full lg:py-16 py-10 bg-white-secondary"
    >
      <div className="size-full flex flex-col items-center justify-start gap-8 sm:gap-12">
        <div className="w-full flex lg:flex-row flex-col items-center lg:items-end justify-start gap-4 lg:justify-between">
          <h2 className="font-poppins text-balance text-center lg:text-left text-black-secondary text-[44px] sm:text-[56px] font-semibold">
            Explore Resources for Smarter Business Financials
          </h2>{" "}
          <button className="h-[50px] sm:h-[56px] w-[160px] sm:w-[176px] flex items-center justify-center flex-shrink-0 rounded-[30px] bg-brand-secondary text-base font-normal sm:text-lg text-black-main">
            Visit Our Blog
          </button>
        </div>
        {/* cards here */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-5">
          {resources.map((item: any, index: number) => (
            <div
              key={index}
              className="size-full flex flex-col gap-3 items-start justify-start rounded-[40px] bg-white-main shadow-lg p-4 pb-5"
            >
              <div className="w-full rounded-[25px] h-[225px] relative">
                <Image
                  fill
                  alt=""
                  className="object-cover rounded-[25px]"
                  src={item.image}
                />
              </div>
              <span className="h-[26px] w-[84px] bg-brand-main rounded-md flex items-center justify-center text-white-main font-normal text-sm">
                {item.time}
              </span>
              <h3 className="font-bold text-[22px] sm:text-[26px] text-black-secondary sm:leading-[34px] leading-[30px]">
                {item.title}
              </h3>
              <p className="font-light text-base text-black-secondary lg:w-[90%]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Resources;
