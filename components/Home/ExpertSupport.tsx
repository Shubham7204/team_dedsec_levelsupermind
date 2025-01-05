import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";
import Image from "next/image";
import { GetStartedBtnYellow } from "./GetStartedBtn";

const ExpertSupport = () => {
  return (
    <ComponentWrapper style="lg:py-20 py-12 w-full bg-white-main">
      <div className="size-full grid lg:grid-cols-[1fr,1.5fr] gap-5 lg:gap-12">
        <aside className="size-full h-[250px] sm:h-[400px] lg:h-[560px] relative">
          <Image
            fill
            alt=""
            className="object-contain"
            src={"/Assets/One.png"}
          />
          <div className="absolute -bottom-5 -right-10">
            <div className="lg:size-[40px] relative">
              <Image
                fill
                alt=""
                src={"/Assets/Star.svg"}
                className="object-contain"
              />
            </div>
          </div>
        </aside>
        <aside className="size-full flex flex-col items-center lg:items-start justify-between gap-5 lg:pt-8 lg:pb-12">
          <div className="w-full flex flex-col items-center lg:items-start justify-start lg:gap-5">
            <h2 className="font-poppins lg:text-left text-center lg:w-[90%] text-black-secondary text-[44px] sm:text-[56px] font-semibold">
              One-on-One Expert Support
            </h2>
            <p className="text-base font-light lg:text-left text-center sm:text-lg text-black-main lg:w-[90%]">
              At Quanto, we go beyond automation by offering personalized,
              one-on-one support. Our dedicated experts are available to guide
              you through any bookkeeping or tax-related questions, ensuring you
              have the clarity and confidence to make informed financial
              decisions. Whether it's answering specific questions or providing
              deeper insights into your finances, our team is here to support
              you every step of the way.
            </p>
          </div>
          <GetStartedBtnYellow text="Book a call"/>
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default ExpertSupport;
