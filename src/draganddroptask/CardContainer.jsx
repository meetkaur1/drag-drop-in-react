import { Stack } from "@mui/material";
import React, { useState } from "react";

import Dragablecard from "./Dragablecard";

function CardContainer({ heading, content, htmlparent }) {
  return (
    <div>
      <div className="container-heading">{heading}</div>
      <Stack spacing={1}>
        {content?.map((item) => {
          return <Dragablecard htmlparent={htmlparent} item={item} />;
        })}
      </Stack>
    </div>
  );
}

export default CardContainer;
