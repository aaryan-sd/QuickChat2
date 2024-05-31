import React, { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import extractTime from "../../utils/extractTime";

const Messages = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat chat-end" : "chat chat-start";

  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const formatedTime = extractTime(message.createdAt);
  const shake = message.shouldShake ? 'shake' : '';

  return (
    <>
      <div className="flex flex-col space-y-2 ">
        <div className={`${chatClassName} `}>
          <div className="chat-image avatar">
            <div className="w-8 rounded-full">
              <img alt="Avatar" src={profilePic} />
            </div>
          </div>
          <div className={`chat-bubble ${bubbleBgColor} ${shake} text-white`}>
            {message.message}
          </div>
          <div className="chat-footer opacity-50 text-xs flex gap-1 items-center font-bold text-white">
            {formatedTime}
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
