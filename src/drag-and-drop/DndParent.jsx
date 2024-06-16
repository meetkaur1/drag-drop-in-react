import { Grid } from "@mui/material";
import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DndContainer from "./DndContainer";
import { backlog, progress, selected } from "./cardcontent";

const DndParent = (props) => {
  const [container, setContainer] = useState({
    backlog: backlog,
    selected: selected,
    progress: progress,
  });

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceContainer = source.droppableId;
    const destinationContainer = destination.droppableId;

    const sourceItems = Array.from(container[sourceContainer]);
    const destinationItems = Array.from(container[destinationContainer]);

    const [movedItem] = sourceItems.splice(source.index, 1);

    if (sourceContainer === destinationContainer) {
      sourceItems.splice(destination.index, 0, movedItem);
      setContainer({
        ...container,
        [sourceContainer]: sourceItems,
      });
    } else {
      destinationItems.splice(destination.index, 0, movedItem);
      setContainer({
        ...container,
        [sourceContainer]: sourceItems,
        [destinationContainer]: destinationItems,
      });
    }
  };
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={2}>
          {Object.keys(container).map((containername, index) => (
            <Grid item xs={4}>
              <DndContainer
                key={containername}
                id={containername}
                items={container[containername]}
                cardheadingid={index}
              />
            </Grid>
          ))}
        </Grid>
      </DragDropContext>
    </div>
  );
};

export default DndParent;
