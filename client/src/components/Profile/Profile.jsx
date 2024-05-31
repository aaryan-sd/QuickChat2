import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import useGetProfile from "../../hooks/useGetProfile";

const Profile = () => {
  const { loading, logout } = useLogout();
  const { profile, dploading } = useGetProfile();
  console.log("profile", profile);

  return (
    <div className="flex items-center gap-4 w-full">
      {dploading ? <div className="skeleton w-16 h-16 rounded-full shrink-0"></div> : <img
        src={profile.profilePic}
        alt="Profile"
        className="w-16 h-16 rounded-full"
      />}
      <div className="bg-[#7480ff] rounded-full flex p-4 w-full justify-between items-center">
        <div>
          <div className=" text-lg text-black font-semibold">
            Hey! {profile.fullname}
          </div>
        </div>

        <div className=" text-red-950">
          <button onClick={logout}>
            <BiLogOut size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
