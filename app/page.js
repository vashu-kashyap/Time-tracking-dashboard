"use client";
import Profile_card from "@/components/Profile_card"; // Importing Profile_card component
import Activity_card from "@/components/Activity_card"; // Importing Activity_card component
import data from "@/data"; // Importing data from data module
import { useState } from "react"; // Importing useState hook from React

export default function Home() {
  // State to manage the selected period (daily, monthly, weekly)
  const [period, setPeriod] = useState("daily");

  // Function to handle period change
  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  return (
    // Main container with grid layout and padding
    <main className="min-h-screen px-6 lg:px-32 lg:py-28 lg:justify-center py-16 lg:grid lg:grid-cols-4 lg:gap-8 lg:content-center ">
      {/* Profile card component with period change handlers */}
      <Profile_card
        dailyOnClick={() => handlePeriodChange("daily")}
        monthlyOnClick={() => handlePeriodChange("monthly")}
        weeklyOnClick={() => handlePeriodChange("weekly")}
      />
      {/* Mapping through data and rendering activity cards */}
      {data.map((item) => (
        <Activity_card
          key={item.title} // Unique key for each activity card
          cardTitle={item.title} // Title of the activity card
          currentTime={item.timeframes[period].current} // Current time for the selected period
          previousTime={item.timeframes[period].previous} // Previous time for the selected period
          period={period} // Selected period
        />
      ))}
    </main>
  );
}
