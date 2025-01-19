"use client";
import React, { useState } from "react";
import ComponentWrapper from "../ComponentWrapper";
import Link from "next/link";
import { CgMediaPodcast } from "react-icons/cg";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const links = [
    { name: "Blogs", url: "/blogs" },
    { name: "Upload Video", url: "/upload" },
    { name: "Text Transcribe", url: "/transcribe" },
    { name: "Youtube Translate", url: "/youtube" }
  ];

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <ComponentWrapper style="sm:h-[100px] h-[80px] bg-transparent w-full z-50">
      <div className="size-full flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} className="flex items-center text-white-main text-3xl sm:text-4xl font-semibold">
          <CgMediaPodcast className="text-white-main mr-2" />
          SocialFlow
        </Link>

        {/* Links for larger screens */}
        <div className="h-full hidden md:flex items-center justify-start gap-16">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="text-white-main text-lg font-normal hover:scale-105 hover:duration-200 transition-all ease-in transform"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Menu button for mobile */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={toggleDrawer}
          className="md:hidden flex items-center justify-center text-white-main drawer-button"
        >
          <BiMenuAltRight className="text-2xl flex-shrink-0" />
        </button>
      </div>

      {/* Drawer */}
      <label htmlFor="my-drawer-4" className="sr-only">Navigation drawer toggle</label>
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        checked={drawerOpen}
        readOnly
        aria-label="Toggle navigation menu"
      />
      <div className="drawer-side h-[100dvh] z-50">
        <label
          htmlFor="my-drawer-4"
          className="drawer-overlay"
          onClick={toggleDrawer}
        ></label>
        <ul className="menu px-4 py-6 w-full bg-white-main h-[100dvh] text-base-content flex flex-col items-center justify-start gap-8">
          <span className="w-full flex items-center justify-end">
            <RxCross1
              onClick={toggleDrawer}
              className="text-black-main text-2xl flex-shrink-0"
            />
          </span>
          {links.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                className="text-black-main active:bg-white-main text-base font-normal"
                onClick={toggleDrawer}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </ComponentWrapper>
  );
};

export default Navbar;