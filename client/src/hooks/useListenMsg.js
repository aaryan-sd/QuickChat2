import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation';

const useListenMsg = () => {
  const {socket} = useSocketContext();
  const {messages, setMessages} = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
        setMessages([...messages, newMessage])
    })

    return () => socket?.off("newMessage");
  }, [setMessages, messages, socket]);
  
}

export default useListenMsg
