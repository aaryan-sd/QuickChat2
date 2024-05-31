import React from "react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useGetProfile = () => {
  const [profile, setProfile] = useState([]);
  const [dploading, setDpLoading] = useState(false);

  useEffect(() => {
    const getProfile = async () => {
      try {
        setDpLoading(true);
        const res = await fetch("/api/users/getLoggedInUser");

        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }
        setProfile(data);
        
      } catch (error) {
        toast.error(error.message);
      } finally{
        setDpLoading(false);
      }
    };

    getProfile();
  }, []);

  return { profile, dploading };
};

export default useGetProfile;
