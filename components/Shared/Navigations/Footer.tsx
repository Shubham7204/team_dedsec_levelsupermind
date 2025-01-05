"use client";
import React from "react";
import ComponentWrapper from "../ComponentWrapper";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CgMediaPodcast } from "react-icons/cg";

const Footer = () => {
  const year = new Date().getFullYear();
  const quickLinks = [
    { name: "Hackathon Details", link: "https://www.findcoder.io/hackathons/SuperMind-Hackathon/67668c927a79c23209528177" },
    { name: "Project GitHub", link: "https://github.com/your-repo-link" },
    { name: "Project Demo", link: "https://www.youtube.com/your-demo-video" },
  ];
  const socials = [
    { icon: <FaInstagram className="text-xl" />, link: "" },
    { icon: <FaFacebookF className="text-xl" />, link: "" },
    { icon: <FaLinkedinIn className="text-xl" />, link: "" },
  ];

  return (
    <ComponentWrapper style="w-full bg-white-main py-2">
      <footer className="size-full text-white-main bg-black-secondary rounded-[50px] lg:pt-16 lg:pb-5 py-10 lg:px-10 px-5 flex flex-col items-center justify-between lg:gap-16 gap-5">
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-[1.5fr,1fr,1fr,1.5fr] sm:gap-10 gap-5">
          {/* logo here */}
          <div className="size-full flex flex-col items-start justify-start gap-3 sm:gap-5">
            <Link href={"/"} className="flex items-center text-white-main text-3xl sm:text-4xl font-semibold">
              <CgMediaPodcast className="text-white-main mr-2" />
              SocialFlow
            </Link>
            <p className="text-base sm:text-lg font-light">
              Social Media Performance Analysis app for the Level Supermind Hackathon.
            </p>
          </div>
          {/* quick links */}
          <div className="size-full flex flex-col items-start justify-start gap-3 sm:gap-5">
            <p className="text-xl sm:text-2xl font-bold">Quick Links</p>
            {quickLinks.map((item: any, index: number) => (
              <Link
                href={item.link}
                key={index}
                className="text-base sm:text-lg font-light"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* support links */}
          <div className="size-full flex flex-col items-start justify-start gap-3 sm:gap-5">
            <p className="text-xl sm:text-2xl font-bold">Support</p>
            <Link href={"#faq"} className="text-base sm:text-lg font-light">
              FAQs
            </Link>
          </div>
          {/* news letter */}
          <div className="size-full flex flex-col items-start justify-start gap-3 sm:gap-5">
            <p className="text-xl sm:text-2xl font-bold">Subscribe to Updates</p>
            <a
              href="https://apetergeorge.us17.list-manage.com/subscribe/post?u=3fd9e0f2bf0d5c06832e43a29&amp;id=b025d3fc09&amp;f_id=0022a3e2f0"
              className="h-[50px] sm:h-[56px] flex-shrink-0 w-[165px] bg-brand-secondary rounded-[30px] flex items-center justify-center font-normal text-base sm:text-lg text-black-main"
            >
              Subscribe
            </a>
          </div>
        </div>
        <div className="w-full flex sm:flex-row flex-col gap-4 items-start sm:items-center justify-between py-4 sm:py-8 border-t border-t-white-main">
          <p className="text-base sm:text-lg font-light">
            ©{year} Social Media Performance Analysis. All rights reserved.
          </p>
          <div className="flex items-center justify-start gap-3">
            {socials.map((item: any, index: number) => (
              <Link
                href={item.link}
                key={index}
                className="size-[36px] flex items-center justify-center sm:size-[41px] rounded-full border border-brand-secondary hover:bg-brand-secondary bg-transparent text-white-main hover:text-black-main hover:duration-200 transition-all transform ease-in"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </ComponentWrapper>
  );
};

export default Footer;
