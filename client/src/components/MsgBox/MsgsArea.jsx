import React, { useRef, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import Messages from "./Messages";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMsg from "../../hooks/useListenMsg";
import MessageSkeleton from "../../skeleton/MessageSkeleton"

const MsgsArea = () => {
  const { loading, messages } = useGetMessages();
  useListenMsg();

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <>
      <div>
        {!loading &&
          messages.length > 0 &&
          messages.map((message, index) => (
            <div key={`${message._id}-${index}`} ref={lastMessageRef}>
              <Messages message={message} />
            </div>
          ))}

        {loading &&
          [...Array(4)].map((_, index) => <MessageSkeleton key={index} />)}

        {!loading && messages.length === 0 && (
          <p className="m-2 text-center text-gray-400 font-semibold">
            Send a message to start a conversation
          </p>
        )}
      </div>
    </>
  );
};

export default MsgsArea;
