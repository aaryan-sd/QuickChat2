import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";
import useGetPeople from "../../hooks/useGetPeople";

const Conversation = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { loading } = useGetPeople();

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex items-center gap-4 hover:bg-blue-600 rounded py-1 cursor-pointer ${
          isSelected ? "bg-blue-600" : ""
        }`}
        onClick={() => {
          setSelectedConversation(conversation);
        }}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          {loading ? (
            <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
          ) : (
            <div className={`w-12 h-12 rounded-full ml-2 `}>
              <img src={conversation.profilePic} alt="Profile" />
            </div>
          )}
        </div>
        {loading ? (
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-28"></div>
          </div>
        ) : (
          <div>{conversation.fullname}</div>
        )}
      </div>
      <div className="divider divider-neutral m-1"></div>
    </>
  );
};

export default Conversation;
