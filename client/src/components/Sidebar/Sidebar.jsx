import React from "react";
import Searchbar from "./Searchbar";
import People from "./People";
import Profile from "../Profile/Profile";
import useConversation from "../../zustand/useConversation";

const Sidebar = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  return (
    <div className={` flex flex-col w-[350px] sm:w-[280px] md:w-[400px]   ${selectedConversation ? 'hidden sm:flex' : 'flex'} `}>
      <Profile />
      <div className="bg-gray-800 rounded-2xl p-4 mt-4 ">
        <Searchbar />
        <People />
      </div>
    </div>
  );
};

export default Sidebar;
