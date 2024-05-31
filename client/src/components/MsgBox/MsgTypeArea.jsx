import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import useSendMessage from "../../hooks/useSendMessage";

const MsgTypeArea = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit} className="px-4 my-3">
      <div className="w-full relative bg-gray-800 rounded-3xl">
        <input
          type="text"
          className="w-full  bg-gray-800 outline-none rounded-3xl p-2 mr-2"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button className="absolute text-blue-400 end-0 inset-y-0 rounded-lg p-2">
          {loading ? <div className="loading loading-spinner"></div> : <FiSend size={25} />}
        </button>
      </div>
    </form>
  );
};

export default MsgTypeArea;
