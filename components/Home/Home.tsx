import React from "react";
import Navbar from "../Shared/Navigations/Navbar";
import Hero from "./Hero";
import Image from "next/image";
import Reviews from "./Reviews/Reviews";
import WhatYouGet from "./WhatYouGet";
import OurPartners from "./OurPartners";
import Resources from "./Resources";
import Faq from "./Faq";
import Footer from "../Shared/Navigations/Footer";
import MeetTheDevelopers from "./MeetTheDevelopers";

const Home = () => {
  return (
    <main className="size-full bg-white-main">
      <div className="w-full relative h-[100dvh] bg-[url('/Assets/HeroBg.png')] bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
        <div className="absolute bottom-0 left-0 w-full lg:inline-block hidden h-[150px]">
          <div className="relative size-full">
            <Image
              fill
              alt=""
              className="z-10 object-cover"
              src={"/Assets/wave.svg"}
            />
          </div>
        </div>
      </div>
      <Reviews />
      <WhatYouGet />
      <OurPartners />
      <Resources />
      <Faq />
      <MeetTheDevelopers />
      <Footer />
    </main>
  );
};

export default Home;
