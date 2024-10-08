import React, { useState } from "react";
import Profile from "../../components/Profile/Profile";
import ProfileExpand from "../../components/ProfileExpand/ProfileExpand";
import DailySpendAnalysis from "../DailySpendAnalysis/DailySpendAnalysis";

export default function MainSpendAnalysis() {
  const [viewProfile, setViewProfile] = useState("hidden");
  return (
    <>
      <div className="col-span-4 bg-black">
        <Profile setViewProfile={setViewProfile} />
        <DailySpendAnalysis />
      </div>
      <div className={`absolute top-20 right-6 w-fit h-fit ${viewProfile}`}>
        <ProfileExpand />
      </div>
    </>
  );
}
