"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "./Footer";
import Slider from "./Slider";
import { useRouter } from "next/router";

function Header() {
  const [openSidebar, setOpenSidebar] = useState(false); // State to control sidebar visibility
  const [showSlider, setShowSlider] = useState(false); // State to control slider visibility
  const [activeRoom, setActiveRoom] = useState("Living Room");
  //   const [isMounted, setIsMounted] = useState(false); // State to track if component is mounted

  //   const router = useRouter();

  //   useEffect(() => {
  //     setIsMounted(true); // Set the state to true when the component is mounted
  //   }, []);

  const handleOpenSidebar = () => {
    setOpenSidebar(true); // Open the sidebar
  };

  const handleCloseSidebar = () => {
    setOpenSidebar(false); // Close the sidebar
  };

  const handleCompareClick = () => {
    setShowSlider(!showSlider); // Toggle the slider visibility
  };

  //   const handleBackClick = () => {
  //     if (isMounted) {
  //       router.back(); // Navigate to the previous page only if the component is mounted
  //     }
  //   };

  const handleTabClick = (room) => {
    setActiveRoom(room);
  };

  const roomImages = {
    "Living Room": [
      "/images/seeonwall/roomImages/img1.jpg",
      "/images/seeonwall/roomImages/img2.jpg",
      "/images/seeonwall/roomImages/img5.jpg",
    ],
    "Dining Room": [
      "/images/seeonwall/roomImages/img1.jpg",
      "/images/seeonwall/roomImages/img5.jpg",
      "/images/seeonwall/roomImages/img2.jpg",
    ],
   "Bedroom": [
      "/images/seeonwall/roomImages/img1.jpg",
      "/images/seeonwall/roomImages/img5.jpg",
      "/images/seeonwall/roomImages/img2.jpg",
    ],
  };

  return (
    <div className="bg-gray-100 w-full h-[100vh] flex flex-col">
      {/* Existing Header Section */}
      <div className="flex-shrink-0 flex items-center justify-between py-4 px-8">
        <div className="flex">
          <Link href="/">
            <Image
              src="/images/logo/emcronix.png"
              alt="Ayatrio Logo"
              width={300}
              height={40}
              priority
              className="w-36 lg:w-36 object-cover"
            />
          </Link>
        </div>
        <button
          //   onClick={handleBackClick}
          className="text-xl px-2 hover:bg-[#e5e5e5] rounded-full cursor-pointer"
        >
          <Image
            loading="lazy"
            src="/icons/cancel.svg"
            alt="close"
            width={20}
            height={20}
            className="py-2 font-bold"
          />
        </button>
      </div>

      {/* Content Section */}
      <div className="flex-grow relative flex flex-col">
        {showSlider && (
          <div className="flex justify-center items-center mr-40">
            <Slider />
          </div>
        )}{" "}
        {/* Show slider only if 'showSlider' is true */}
        {/* Right Section that stays on screen */}
        <div className="absolute top-0 right-0 h-full flex flex-col justify-center items-end p-4">
          {/* Text and Icons */}
          <div className="flex flex-col space-y-4">
            {/* Other buttons */}
            <div
              onClick={handleOpenSidebar}
              className="flex items-center space-x-4 cursor-pointer"
            >
              <div className="bg-white text-black py-2 px-4 flex-1">
                Upload Your Room
              </div>
              <div className="flex flex-col">
                <div className="bg-black p-4 group hover:bg-white cursor-pointer">
                  <Image
                    src="/icons/camera.svg"
                    alt="Upload Your Room"
                    width={20}
                    height={20}
                    className="group-hover:filter group-hover:invert-0 invert"
                  />
                </div>
              </div>
            </div>

            <div
              onClick={handleOpenSidebar}
              className="flex items-center space-x-4 cursor-pointer"
            >
              <div className="bg-white text-black py-2 px-4 flex-1">
                Choose a Room
              </div>
              <div className="flex flex-col">
                <div className="bg-black p-4 group hover:bg-white cursor-pointer">
                  <Image
                    src="/icons/click and collect.svg"
                    alt="Choose a Room"
                    width={20}
                    height={20}
                    className="group-hover:filter group-hover:invert-0 invert"
                  />
                </div>
              </div>
            </div>

            <div
              onClick={handleOpenSidebar}
              className="flex items-center space-x-4 cursor-pointer"
            >
              <div className="bg-white text-black py-2 px-4 flex-1">
                Choose a Product
              </div>
              <div className="flex flex-col">
                <div className="bg-black p-4 group hover:bg-white cursor-pointer">
                  <Image
                    src="/icons/instalation.svg"
                    alt="Choose a Product"
                    width={20}
                    height={20}
                    className="group-hover:filter group-hover:invert-0 invert"
                  />
                </div>
              </div>
            </div>

            <div
              onClick={handleOpenSidebar}
              className="flex items-center space-x-4 cursor-pointer"
            >
              <div className="bg-white text-black py-2 px-4 flex-1">
                Live Specialist Guide
              </div>
              <div className="flex flex-col">
                <div className="bg-black p-4 group hover:bg-white cursor-pointer">
                  <Image
                    src="/icons/golive.svg"
                    alt="Live Specialist Guide"
                    width={20}
                    height={20}
                    className="group-hover:filter group-hover:invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {openSidebar && (
        <div className="fixed top-0 right-0 w-[450px] overflow-y-auto bg-white h-full shadow-lg z-50 transition-transform transform translate-x-0">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-semibold">Choose Products</h2>
            <button onClick={handleCloseSidebar}>
              <Image
                loading="lazy"
                src="/icons/cancel.svg"
                alt="close"
                width={20}
                height={20}
              />
            </button>
          </div>

          {/* Upload Your Room Button */}
          <div className="p-4 flex flex-col items-center justify-center">
            <button className="bg-blue-600 text-sm text-white py-3 px-4 rounded-full">
              Upload Your Room
            </button>
            <div className=" flex mt-2 ">
              <p className="px-[10px] text-center text-sm text-gray-800">
                Choose the Right (product name) for Your Rooms is the fast step
                of future of living
              </p>
            </div>
          </div>

          {/* Room Category Selection */}
          <div className="flex space-x-2 pt-4 px-4 pb-2">
            <button
              className={`${
                activeRoom === "Living Room"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              } text-xs font-semibold py-2 px-4 rounded-full`}
              onClick={() => handleTabClick("Living Room")}
            >
              Living Room
            </button>
            <button
              className={`${
                activeRoom === "Dining Room"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              } text-xs font-semibold py-2 px-4 rounded-full`}
              onClick={() => handleTabClick("Dining Room")}
            >
              Dining Room
            </button>
            <button
              className={`${
                activeRoom === "Bedroom"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              } text-xs font-semibold py-2 px-4 rounded-full`}
              onClick={() => handleTabClick("Bedroom")}
            >
              Bedroom
            </button>
          </div>

          {/* Product Listing */}
          <div className="p-6 grid grid-cols-2 gap-4">
            {roomImages[activeRoom].map((imagePath, index) => (
              <div
                key={index}
                className="w-30 h-24 overflow-hidden border border-gray-200"
              >
                <Image
                  src={imagePath}
                  alt={`Product ${index + 1}`}
                  width={176}
                  height={176}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Section */}
      <Footer
        className="flex-shrink-0"
        handleCompareClick={handleCompareClick}
      />
    </div>
  );
}

export default Header;
