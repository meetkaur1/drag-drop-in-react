import React from "react";
import DndCard from "./DndCard";
import { Droppable } from "react-beautiful-dnd";
import { cardheading } from "./cardcontent";

const DndContainer = ({ id, items, cardheadingid }) => {
  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="Container"
        >
          <div className="container-heading">
            {cardheading[cardheadingid]} - {items.length}
          </div>

          {items.map((item, index) => (
            <DndCard key={item.id} id={item.id} index={index} item={item} />
          ))}
        </div>
      )}
    </Droppable>
  );
};
export default DndContainer;
