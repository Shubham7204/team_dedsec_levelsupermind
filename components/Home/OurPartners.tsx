import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";
import Image from "next/image";

const OurPartners = () => {
  const partners = [
    {
      name: "Langflow",
      image: "/Assets/LangflowLogo.svg",
      className: "object-contain",
    },
    {
      name: "DataStax Astra",
      image: "/Assets/astradb.webp",
      className: "object-contain",
    },
    {
      name: "GPT",
      image: "/Assets/groq-logo.png",
      className: "object-contain grayscale",
    },
  ];

  return (
    <ComponentWrapper style="w-full lg:py-16 py-12 bg-white-main">
      <div className="size-full flex flex-col items-center justify-start gap-8 sm:gap-12">
        <div className="w-full flex flex-col items-center justify-start lg:gap-5">
          <h2 className="font-poppins text-center text-black-secondary text-[44px] sm:text-[56px] font-semibold">
            Our Partners
          </h2>
          <p className="text-base font-light lg:w-[70%] text-center sm:text-lg text-black-main text-balance">
            SocialFlow collaborates with cutting-edge tools and platforms to
            deliver seamless social media analytics and insights. Integrated
            with:
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-[280px] sm:max-w-5xl px-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="w-full h-[120px] sm:h-[180px] lg:h-[200px] relative bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="relative w-full h-full">
                    <Image
                      fill
                      alt={`${partner.name} Logo`}
                      src={partner.image}
                      className={`${partner.className}`}
                      priority
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default OurPartners;