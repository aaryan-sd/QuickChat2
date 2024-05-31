import React, { useEffect } from "react";
import MsgsArea from "./MsgsArea";
import MsgTypeArea from "./MsgTypeArea";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { IoChevronBack } from "react-icons/io5";
import { useSocketContext } from "../../context/SocketContext";
import { TiMessages } from "react-icons/ti";

const MsgBox = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const {onlineUsers} = useSocketContext();
  //const isOnline = onlineUsers.includes(conversation._id);

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  const handleBackButton = () => {
    setSelectedConversation(null);
  };
  
  return (
    <div className={`${selectedConversation ? 'flex' : 'hidden sm:flex'} flex w-[350px] sm:w-[320px] md:w-[350px]  lg:w-[550px] flex-col bg-gray-700 sm:ml-4 p-4 rounded-2xl shadow-md `}>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="mb-4">
            <div className="text-lg font-semibold">
              <div className="flex items-center bg-gray-800 rounded-full p-2 w-full">
                <div onClick={handleBackButton} className="cursor-pointer">
                  <IoChevronBack />
                </div>
                <img
                  src={selectedConversation.profilePic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full ml-2"
                />
                <div className="ml-4">
                  <div className="text-sm font-semibold">{selectedConversation.fullname}</div>
                  
                </div>
              </div>
            </div>
          </div>

          <div className="h-[430px] p-4 mb-4 rounded-lg shadow-md overflow-y-scroll">
            <MsgsArea />
          </div>

          <MsgTypeArea />

        </>
      )}
    </div>
  );
};

export default MsgBox;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center h-full w-full ">
      <div className="text-center text-gray-400 font-bold">
        <p>Welcome! {authUser?.fullname}</p>
        <p>Select a chat to start chatting</p>
        <TiMessages className="text-3xl ml-20 md:text-6xl text-center" />
      </div>
    </div>
  );
};
