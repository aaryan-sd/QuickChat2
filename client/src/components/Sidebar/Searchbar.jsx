import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetPeople from '../../hooks/useGetPeople';
import toast from 'react-hot-toast';


const Searchbar = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {people} = useGetPeople();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length<3){
      return toast.error('search term must be at least 3 characters long')
    }
    
    const conversation = people.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    }else toast.error("No such user found!")
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-6">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Chats"
        className="p-1 text-center outline-none text-lg flex-grow border border-gray-600 bg-gray-800 rounded-3xl w-12 mr-2"
      />
      <button 
        type="submit"
        className="p-2 text-lg text-[#ac9ff6] rounded-r flex items-center justify-center"
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default Searchbar;
