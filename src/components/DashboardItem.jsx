import React, { useState, useEffect } from "react";
import { IoMdSync } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaChevronDown, FaPlus } from "react-icons/fa";
import AddWidget from "./AddWidget";
import data from "../data.json";
import Cards from "./Cards";

const DashboardItem = () => {
  const [widgetDisplay, setWidgetDisplay] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setCategories(data.categories);
  }, []);

  const widgetHandler = (category) => {
    setSelectedCategory(category);
    setWidgetDisplay(true);
  };

  return (
    <div className="bg-gray-300 h-full pb-10">
      <div className="flex justify-between items-center mx-10 pt-10">
        <div>
          <h2 className="font-bold">CNAPP Dashboard</h2>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => widgetHandler("")}
            className="flex justify-center items-center gap-1 border rounded p-2 bg-white border-gray-400 text-xs"
          >
            Add Widget
            <FaPlus />
          </button>
          <button className="border rounded p-2 bg-white border-gray-400 text-sm">
            <IoMdSync />
          </button>
          <button className="border rounded p-2 bg-white border-gray-400 text-sm">
            <BsThreeDotsVertical />
          </button>

          <div className="flex justify-center items-center gap-1 bg-white border p-1 px-2 text-sm rounded border-indigo-800 text-indigo-800">
            <MdOutlineAccessTimeFilled />|<p>Last 2 days</p>
            <FaChevronDown />
          </div>
        </div>
      </div>

      {widgetDisplay && (
        <AddWidget
          widgetDisplay={widgetDisplay}
          setWidgetDisplay={setWidgetDisplay}
          selectedCategory={selectedCategory}
          categories={categories}
          setCategories={setCategories}
        />
      )}

      <Cards
        categories={categories}
        widgetHandler={widgetHandler}
      />
    </div>
  );
};

export default DashboardItem;
