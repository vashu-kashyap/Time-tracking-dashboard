"use client";
import Image from "next/image";
import ellipsis from "@/public/icon-ellipsis.svg";

export default function ActivityCard({
  cardTitle, // Title of the activity card
  currentTime, // Current time spent on the activity
  previousTime, // Time spent on the activity in the previous period
  period, // Selected period (daily, weekly, monthly)
}) {
  // Function to map card titles to background colors
  const getBackgroundColor = (title) => {
    switch (title) {
      case "Work":
        return "bg-light-red"; // Example color for Work
      case "Play":
        return "bg-soft-blue"; // Example color for Play
      case "Study":
        return "bg-light-red-study"; // Example color for Study
      case "Exercise":
        return "bg-lime-green"; // Example color for Exercise
      case "Social":
        return "bg-violet"; // Example color for Social
      case "Self Care":
        return "bg-soft-orange"; // Example color for Self Care
      default:
        return "bg-gray"; // Default color
    }
  };

  // Function to map card titles to background images
  const getBackgroundImage = (title) => {
    switch (title) {
      case "Work":
        return "bg-work"; // Example background image for Work
      case "Play":
        return "bg-play"; // Example background image for Play
      case "Study":
        return "bg-study"; // Example background image for Study
      case "Exercise":
        return "bg-exercise"; // Example background image for Exercise
      case "Social":
        return "bg-social"; // Example background image for Social
      case "Self Care":
        return "bg-self"; // Example background image for Self Care
      default:
        return ""; // Default background image
    }
  };

  // Get background color based on card title
  const bgColor = getBackgroundColor(cardTitle);
  
  // Get background image based on card title
  const bgImage = getBackgroundImage(cardTitle);

  return (
    <div className={`card relative mt-8 h-44 w-full rounded-xl bg-right-top bg-no-repeat object-contain lg:mt-0 lg:h-[224px] ${bgImage} ${bgColor}`}>
      <div className="card-content absolute bottom-0 left-0 h-32 w-full cursor-pointer rounded-xl bg-dark-blue px-8 py-6 duration-200 ease-in-out hover:bg-desaturated-blue lg:h-44">
        <div className="card-row-1 flex items-center justify-between">
          <h2 className="card-title text-xl font-medium text-white">
            {cardTitle}
          </h2>
          <button className="card-menu-btn">
            <Image alt="three dot image" src={ellipsis} />
          </button>
        </div>
        <div className="card-row-2 flex items-center justify-between lg:mt-6 lg:flex-col lg:items-start">
          <span className="text-4xl font-light leading-normal text-white lg:mb-2 lg:text-5xl">
            {currentTime}hrs
          </span>
          <span className="text-base font-normal leading-normal text-pale-blue">
            Last {period === "daily" ? "Day" : period === "weekly" ? "Week" : "Month"} - {previousTime}hrs
          </span>
        </div>
      </div>
    </div>
  );
}
