import { Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import CardContainer from "./CardContainer";
import { backlog, progress, selected } from "./cardcontent";

function DragAndDropMain(props) {
  const inputElement = useRef(null);
  useEffect(() => {
    console.log(inputElement.current, "jk");
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <div className="border-container" ref={inputElement}>
          <CardContainer
            heading={"BACKLOG3"}
            content={backlog}
            htmlparent={inputElement.current}
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="border-container" ref={inputElement}>
          <CardContainer
            heading={"SELECTED FOR DEVELOPMENT3"}
            content={selected}
            htmlparent={inputElement.current}
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="border-container" ref={inputElement}>
          <CardContainer
            heading={"IN PROGRESS2"}
            content={progress}
            htmlparent={inputElement.current}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default DragAndDropMain;