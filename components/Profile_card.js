import Image from "next/image";
import userImg from "@/public/image-jeremy.png";
import { useState } from "react";

export default function ProfileCard({
  dailyOnClick, // Handler for daily button click
  weeklyOnClick, // Handler for weekly button click
  monthlyOnClick, // Handler for monthly button click
}) {
  // State to manage the active button
  const [activeButton, setActiveButton] = useState("daily");

  return (
    <div className="profile-card rounded-2xl bg-dark-blue lg:row-span-2">
      {/* User section */}
      <div className="user flex items-center justify-start gap-4 rounded-xl bg-blue px-8 py-10 lg:h-80 lg:flex-col lg:items-start lg:justify-start">
        {/* User image */}
        <div className="user-img">
          <Image
            src={userImg}
            className="w-20 rounded-full border-4 border-white"
            alt="user-img"
            priority
          />
        </div>
        {/* User data */}
        <div className="user-data">
          <p className="text-lg font-light leading-normal text-pale-blue">
            Report for
          </p>
          <h1 className="text-2xl font-light leading-normal text-white lg:text-4xl">
            Jeremy Robson
          </h1>
        </div>
      </div>
      {/* Button group */}
      <div className="button-group flex items-center justify-around py-6 lg:flex-col lg:items-start lg:gap-y-4 lg:px-8">
        {/* Daily button */}
        <button
          className={`daily text-xl font-normal text-desaturated-blue hover:text-white duration-200 transition-all ${
            activeButton === "daily" ? "active" : ""
          }`}
          onClick={() => {
            dailyOnClick(); // Call the dailyOnClick handler
            setActiveButton("daily"); // Set activeButton state to 'daily'
          }}
        >
          Daily
        </button>
        {/* Weekly button */}
        <button
          className={`weekly text-xl font-normal text-desaturated-blue hover:text-white duration-200 transition-all ${
            activeButton === "weekly" ? "active" : ""
          }`}
          onClick={() => {
            weeklyOnClick(); // Call the weeklyOnClick handler
            setActiveButton("weekly"); // Set activeButton state to 'weekly'
          }}
        >
          Weekly
        </button>
        {/* Monthly button */}
        <button
          className={`monthly text-xl font-normal text-desaturated-blue hover:text-white duration-200 transition-all ${
            activeButton === "monthly" ? "active" : ""
          }`}
          onClick={() => {
            monthlyOnClick(); // Call the monthlyOnClick handler
            setActiveButton("monthly"); // Set activeButton state to 'monthly'
          }}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}
