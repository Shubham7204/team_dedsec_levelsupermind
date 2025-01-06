"use client";
import React from "react";
import ComponentWrapper from "../../Shared/ComponentWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const reviews = [
    {
      name: "John Smith",
      post: "Data Scientist, Tech Solutions",
      image: "/Assets/Raj.png",
      review:
        "The integration of DataStax Astra DB with Langflow has revolutionized how we handle social media analytics. The platform's ability to process and analyze engagement metrics in real-time has given us invaluable insights into content performance.",
    },
    {
      name: "Sarah Chen",
      post: "Social Media Manager",
      image: "/Assets/Nicole.png",
      review:
        "The GPT integration through Langflow is a game-changer. Being able to automatically generate insights about post performance and engagement patterns has streamlined our content strategy. The analytics module provides clear, actionable data.",
    },
    {
      name: "Mike Johnson",
      post: "Digital Marketing Lead",
      image: "/Assets/Mitchel.png",
      review:
        "This analytics solution has transformed our approach to social media performance tracking. The combination of DataStax for data storage and Langflow for workflow automation has made our analysis process incredibly efficient.",
    },
  ];

  return (
    <ComponentWrapper style="w-full z-20 lg:pb-20 lg:pt-0 py-12">
      <div className="size-full flex flex-col items-center justify-start gap-10 lg:gap-14">
        {/* Video Section */}
        <div className="w-full aspect-video lg:max-w-[1000px]">
          <iframe
            className="w-full h-full rounded-[30px]"
            src="https://www.youtube.com/embed/19YieWDN5Vo"
            title="Level Supermind Hackathon Assignment - SOCIAL FLOW"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Heading */}
        <h2 className="font-poppins text-balance text-center text-black-secondary text-[44px] sm:text-[56px] font-semibold">
          Trusted by People Across the Globe.
        </h2>

        {/* Swiper Section */}
        <div className="w-full max-w-full h-[350px]">
          <Swiper
            slidesPerView={3}
            spaceBetween={15}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Mousewheel, Autoplay]}
            className="mySwiper"
          >
            {reviews.map((item, index) => (
              <SwiperSlide key={index}>
                <ReviewCard
                  name={item.name}
                  post={item.post}
                  image={item.image}
                  review={item.review}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Reviews;