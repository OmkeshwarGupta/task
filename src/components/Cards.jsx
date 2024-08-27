import React from "react";
import Card from "./Card";

const Cards = ({ categories, widgetHandler }) => {
  return (
    <div>
      {categories.map((category) => (
        <div className="ml-16" key={category.name}>
          <h2>{category.name}</h2>
          <button
            onClick={() => widgetHandler(category.name)}
            className="border rounded p-2 bg-white border-gray-400 text-xs mb-4"
          >
            Add Widget to {category.name}
          </button>
          <div className="flex gap-4">
            {category.widgets.slice(0, 3).map((widget) => (
              <Card
                key={widget.id}
                widget={widget}
                category={category.name}
                widgetHandler={widgetHandler}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
