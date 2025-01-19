'use client'
import React from "react";
import ComponentWrapper from "../Shared/ComponentWrapper";

const Faq = () => {
  return (
    <ComponentWrapper
      id="faq"
      style="lg:pt-16 lg:pb-4 py-10 w-full bg-white-main"
    >
      <div className="size-full lg:w-[80%] flex flex-col items-center justify-start gap-8 sm:gap-12 lg:mx-auto">
        <h2 className="font-poppins text-center text-black-secondary text-[44px] sm:text-[56px] font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="w-full flex flex-col items-center justify-start gap-4">
          {/* Accordion Item */}
          <div className="collapse collapse-plus border border-black-main rounded-[30px] font-poppins sm:p-8 p-4 bg-white-main has-[:checked]:bg-brand-light has-[:checked]:border-brand-main">
            <input
              type="radio"
              name="my-accordion-3"
              className="peer"
              aria-label="FAQ accordion item"
              id={`faq-0`}
            />
            <label htmlFor={`faq-0`} className="sr-only">
              FAQ accordion control
            </label>
            <div className="collapse-title text-xl sm:text-2xl font-semibold text-black-main peer-checked:text-brand-main">
              What is the purpose of the blog dashboard in this project, and how does it work?
            </div>
            <div className="collapse-content">
              <p className="text-base sm:text-lg font-normal text-black-main">
                The blog dashboard enables users to input text and video content, transcribe and translate it into 10 regional languages, and publish SEO-optimized blogs.
              </p>
            </div>
          </div>

          {/* Accordion Item */}
          <div className="collapse collapse-plus border border-black-main rounded-[30px] font-poppins sm:p-8 p-4 bg-white-main has-[:checked]:bg-brand-light has-[:checked]:border-brand-main">
            <input
              type="radio"
              name="my-accordion-3"
              className="peer"
              aria-label="FAQ accordion item"
              id={`faq-1`}
            />
            <label htmlFor={`faq-1`} className="sr-only">
              FAQ accordion control
            </label>
            <div className="collapse-title text-xl sm:text-2xl font-semibold text-black-main peer-checked:text-brand-main">
              How does the project handle video content for transcription and translation?
            </div>
            <div className="collapse-content">
              <p className="text-base sm:text-lg font-normal text-black-main">
                Video content is automatically transcribed into English using AI-powered speech-to-text models and then translated into multiple languages for blog publishing.
              </p>
            </div>
          </div>

          {/* Accordion Item */}
          <div className="collapse collapse-plus border border-black-main rounded-[30px] font-poppins sm:p-8 p-4 bg-white-main has-[:checked]:bg-brand-light has-[:checked]:border-brand-main">
            <input
              type="radio"
              name="my-accordion-3"
              className="peer"
              aria-label="FAQ accordion item"
              id={`faq-2`}
            />
            <label htmlFor={`faq-2`} className="sr-only">
              FAQ accordion control
            </label>
            <div className="collapse-title text-xl sm:text-2xl font-semibold text-black-main peer-checked:text-brand-main">
              How does GPT enhance the insights in this project?
            </div>
            <div className="collapse-content">
              <p className="text-base sm:text-lg font-normal text-black-main">
                GPT helps generate actionable insights and performance trends from blog content, guiding content optimization for better audience engagement.
              </p>
            </div>
          </div>

          {/* Accordion Item */}
          <div className="collapse collapse-plus border border-black-main rounded-[30px] font-poppins sm:p-8 p-4 bg-white-main has-[:checked]:bg-brand-light has-[:checked]:border-brand-main">
            <input
              type="radio"
              name="my-accordion-3"
              className="peer"
              aria-label="FAQ accordion item"
              id={`faq-3`}
            />
            <label htmlFor={`faq-3`} className="sr-only">
              FAQ accordion control
            </label>
            <div className="collapse-title text-xl sm:text-2xl font-semibold text-black-main peer-checked:text-brand-main">
              Can this module be expanded for real-world applications?
            </div>
            <div className="collapse-content">
              <p className="text-base sm:text-lg font-normal text-black-main">
                Yes, the module can easily be scaled to support additional languages and various content formats, making it applicable for diverse industries.
              </p>
            </div>
          </div>
        </div>
        <button className="h-[50px] sm:h-[56px] w-[160px] sm:w-[176px] flex items-center justify-center flex-shrink-0 rounded-[30px] bg-brand-secondary text-base font-normal sm:text-lg text-black-main">
          Visit Full FAQ
        </button>
      </div>
    </ComponentWrapper>
  );
};

export default Faq;