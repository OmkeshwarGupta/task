import React from "react";
import { IoSearch } from "react-icons/io5";
import { LuBellRing } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

const Header = ({ setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <div className="flex justify-between items-center mx-10 my-4 text-gray-600">
      <div>
        <p className="text-sm">
          Home <span className="font-bold">&#8250;</span><span className="text-black font-bold"> Dashboard V2</span>
        </p>
      </div>
      <div className="flex justify-between items-center gap-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search anything..."
            className="border w-[400px] pl-6 bg-gray-200 rounded border-gray-500"
            onChange={handleSearch}
          />
          <IoSearch className="absolute top-2 left-1" />
        </div>
        <FaChevronDown />
        <LuBellRing />
        <MdAccountCircle />
      </div>
    </div>
  );
};

export default Header;
