import React, { useState } from "react";
import Profile from "../components/Profile/Profile";
import Sidebar from "../components/Sidebar/Sidebar";
import MsgBox from "../components/MsgBox/MsgBox";

const Home = () => {
  
  return (
    <div className="flex h-[600px] sm:h-[600px] md:h-[550px] lg:h-[600px] ">
      <Sidebar />
      <MsgBox/>
    </div>
  );
};

export default Home;
