import { Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CardContainer from "./CardContainer";
import { backlog, progress, selected } from "./cardcontent";

function DragAndDropMain(props) {
  const [container, setcontainer] = useState({
    backlog: backlog,
    progress: progress,
    selected: selected,
  });

  const inputElement = useRef(null);
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <div className="border-container" ref={inputElement}>
          <CardContainer
            heading={"BACKLOG3"}
            content={container.backlog}
            htmlparent={inputElement.current}
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="border-container" ref={inputElement}>
          <CardContainer
            heading={"SELECTED FOR DEVELOPMENT3"}
            content={container.progress}
            htmlparent={inputElement.current}
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="border-container" ref={inputElement}>
          <CardContainer
            heading={"IN PROGRESS2"}
            content={container.selected}
            htmlparent={inputElement.current}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default DragAndDropMain;
