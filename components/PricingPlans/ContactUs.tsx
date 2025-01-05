import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="w-full h-full lg:h-[720px] flex flex-col items-start gap-5 justify-between text-black-tertary font-dmSans bg-white-main shadow-lg rounded-[40px] p-8 relative">
        <div className="w-full flex flex-col items-start justify-start gap-5">
          <p className="text-2xl sm:text-3xl font-bold">Custom Analytics Requests</p>
          <span className="font-bold text-[44px] sm:text-[56px]">
            Contact Us
          </span>
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <p className="text-xl font-bold sm:text-2xl">Our Services</p>
            {[
              "Custom Social Media Analytics",
              "Integration with Langflow and Astra DB",
              "Tailored Insights Generation",
              "Customizable Engagement Reports"
            ].map((item: string, index: number) => (
              <div key={index} className="w-full flex items-center justify-start gap-3">
                <FaCircleCheck className="text-brand-main size-[22px] sm:size-[26px] flex-shrink-0" />
                <p className="text-base font-normal sm:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="w-full mt-2 flex-shrink-0 sm:h-[72px] h-[60px] text-white-main text-base font-bold sm:text-lg flex items-center justify-center bg-brand-main rounded-[40px]">
          Contact Us
        </button>
      </div>
    </div>
  );
};


export default ContactUs;
