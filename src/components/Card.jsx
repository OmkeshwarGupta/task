import React from "react";
import { FaPlus } from "react-icons/fa";

const Card = ({ widget, category, widgetHandler }) => {
  const handleAddWidget = () => {
    widgetHandler(category);
  };

  if (!widget) {
    return (
      <div className="w-[450px] h-[180px] bg-white rounded-lg flex justify-center items-center">
        <button
          onClick={handleAddWidget}
          className="flex justify-center items-center gap-1 border rounded p-2 bg-white border-gray-400 text-xs"
        >
          Add Widget
          <FaPlus />
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-[450px] h-[180px] bg-white rounded-lg flex flex-col justify-center items-center">
      <p>{widget.name}</p>
      <p>{widget.data}</p>
      <p className="absolute top-2 right-5 cursor-pointer">x</p>
    </div>
  );
};

export default Card;
