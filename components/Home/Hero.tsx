import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";
import Image from "next/image";
import { GetStartedBtnYellow } from "./GetStartedBtn";
import { SiStreamlit, SiNextdotjs } from "react-icons/si";

const Hero = () => {
  return (
    <ComponentWrapper style="w-full overflow-hidden bg-transparent lg:h-[calc(100%-100px)] h-[calc(100%-80px)]">
      <div className="size-full flex flex-col items-center justify-center sm:justify-start gap-10 lg:pt-10 py-12 lg:pb-0">
        <span className="font-poppins text-5xl sm:text-[65px] font-semibold text-white-main text-center text-balance">
          Transform{" "}
          <span className="text-brand-secondary relative inline-block">
            Your Content Creation{" "}
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
          with Multilingual{" "}
          <span className="bg-[url('/Assets/OrangeUnderline.svg')] bg-bottom bg-fill bg-no-repeat">
            AI-Powered Blogging.
          </span>
        </span>
        <p className="text-center text-balance text-base sm:text-lg font-light text-white-main">
          Effortlessly create, transcribe, and translate blogs into 10 Indian 
          languages. Streamline your publishing with SEO-optimized, AI-driven 
          tools for faster, more accurate, and engaging content across diverse 
          audiences.
        </p>
        <div className="w-full flex items-center justify-center gap-5">
          <GetStartedBtnYellow 
            text="Chat Now"
            href="https://socialflow.streamlit.app/"
            icon={<SiStreamlit className="text-xl" />}
          />
          <GetStartedBtnYellow 
            text="Chat Now"
            href="https://team-dedsec-levelsupermind.vercel.app/chat"
            icon={<SiNextdotjs className="text-xl" />}
          />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;