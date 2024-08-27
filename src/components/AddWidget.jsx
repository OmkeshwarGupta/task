import React, { useState } from "react";

const AddWidget = ({
  widgetDisplay,
  setWidgetDisplay,
  selectedCategory,
  categories,
  setCategories,
}) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetData, setWidgetData] = useState("");

  const handleAddWidget = () => {
    const newWidget = {
      id: `${Date.now()}`,
      name: widgetName,
      data: widgetData,
    };

    const updatedCategories = categories.map((category) => {
      if (category.name === selectedCategory) {
        return {
          ...category,
          widgets: [...category.widgets, newWidget],
        };
      }
      return category;
    });

    setCategories(updatedCategories);
    setWidgetDisplay(false);
  };

  return (
    <div className="fixed top-0 right-0 z-10">
      <div className="h-screen w-[600px] bg-white">
        <div className="bg-blue-900 h-10 w-full text-white flex justify-between items-center px-4">
          <h2 className="text-sm">Add Widget</h2>
          <p
            onClick={() => setWidgetDisplay(false)}
            className="cursor-pointer"
          >
            X
          </p>
        </div>
        <p className="text-gray-700 pl-4 text-sm">
          Personalize your dashboard by adding the following widget to{" "}
          {selectedCategory}
        </p>

        <div className="pl-4 flex flex-col justify-center items-start mt-8 gap-4">
          <input
            type="text"
            placeholder="Widget name"
            className="border border-gray-400 rounded-md pl-2"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Widget data"
            className="border border-gray-400 rounded-md pl-2"
            value={widgetData}
            onChange={(e) => setWidgetData(e.target.value)}
          />
        </div>

        <div className="absolute bottom-2 right-6 flex justify-center items-center gap-4">
          <button
            onClick={() => setWidgetDisplay(false)}
            className="border rounded-lg px-5 py-1 border-gray-400 text-xs"
          >
            Cancel
          </button>
          <button
            onClick={handleAddWidget}
            className="border rounded-lg px-5 py-1 border-gray-400 text-xs bg-blue-900 text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidget;
