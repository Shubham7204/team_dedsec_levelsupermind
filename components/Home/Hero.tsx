import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";
import Image from "next/image";
import { GetStartedBtnYellow } from "./GetStartedBtn";

const Hero = () => {
  return (
    <ComponentWrapper style="w-full overflow-hidden bg-transparent lg:h-[calc(100%-100px)] h-[calc(100%-80px)]">
      <div className="size-full flex flex-col items-center justify-center sm:justify-start gap-10 lg:pt-10 py-12 lg:pb-0">
        <span className="font-poppins text-5xl sm:text-[65px] font-semibold text-white-main text-center text-balance">
          Unlock{" "}
          <span className="text-brand-secondary relative inline-block">
            Social Media{" "}
            <span className="absolute -top-10 -right-16 w-[103px] h-[130px]">
              <Image
                width={83}
                height={130}
                alt=""
                src="/Assets/HeroArrow.svg"
                className="object-fill"
              />
            </span>{" "}
          </span>
          Insights{" "}
          <span className="bg-[url('/Assets/OrangeUnderline.svg')] bg-bottom bg-fill bg-no-repeat">
            with AI-Driven{" "}
          </span>{" "}
          Analytics.
        </span>
        <p className="text-center text-balance text-base sm:text-lg font-light text-white-main">
          Gain deeper insights into your social media performance with cutting-edge AI tools. 
          Analyze engagement, optimize strategies, and make data-driven decisions using Langflow, 
          DataStax Astra DB, and GPT-powered analytics.
        </p>
        <div className="w-full flex items-center justify-center gap-5">
          <GetStartedBtnYellow text="Chat Now" />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
