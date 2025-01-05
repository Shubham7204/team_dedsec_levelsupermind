import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";
import Image from "next/image";
import { GetStartedBtnYellow } from "./GetStartedBtn";
const YourBussniessInsights = () => {
  return (
    <ComponentWrapper style="lg:py-20 py-12 w-full bg-white-secondary">
      <div className="size-full grid lg:grid-cols-[1.5fr,1fr] gap-5 lg:gap-12">
        <aside className="size-full flex flex-col items-center lg:items-start justify-between gap-5 lg:pt-8 lg:pb-12">
          <div className="w-full flex flex-col items-center lg:items-start justify-start lg:gap-5">
            <h2 className="font-poppins lg:text-left text-center lg:w-[90%] text-black-secondary text-[44px] sm:text-[56px] font-semibold">
              Your Business Insights At Your Fingertips
            </h2>
            <p className="text-base font-light lg:text-left text-center sm:text-lg text-black-main lg:w-[90%]">
              Stay on top of your business’s financial health with Quanto’s
              real-time insights. Our internal platform automatically
              categorizes your transactions and provides monthly financial
              reports, giving you a clear, accurate picture of your cash flow
              and expenses. With access to critical data, you can make smarter,
              faster decisions that drive your business forward. Also we will be
              alongside you every step of the way!
            </p>
          </div>
          <GetStartedBtnYellow text="Learn more" />
        </aside>
        <aside className="size-full h-[250px] sm:h-[400px] lg:h-[560px] relative">
          <Image
            fill
            alt=""
            className="object-contain"
            src={"/Assets/Two.png"}
          />
          <div className="absolute -bottom-5 -left-10">
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
      </div>
    </ComponentWrapper>
  );
};

export default YourBussniessInsights;
