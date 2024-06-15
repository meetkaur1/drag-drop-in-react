import {
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Draggable from "react-draggable";
import Avatar from "@mui/material/Avatar";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function CardContainer({ heading, content, htmlparent }) {
  const [position, setposition] = useState({ x: 0, y: 0 });
  const nodeRef = React.useRef(null);
  const handleStart = (data) => {
    console.log("box started", data);
    console.log(nodeRef.current, "jkjk");
  };
  const handleDrag = (data) => {
    console.log("box dragged", data);
  };
  const handleStop = (data) => {
    console.log("box stoped", data);
  };
  return (
    <div>
      <div className="container-heading">{heading}</div>
      <Stack spacing={1}>
        {content?.map((item) => {
          return (
            <Draggable
              //   axis="x"
              //   handle=".handle"
              //   defaultPosition={{ x: 0, y: 0 }}
              //   position={null}
              //   bounds={{ top: 0 }}
              grid={[10, 10]}
              scale={1}
              onStart={handleStart}
              onDrag={handleDrag}
              onStop={handleStop}
              nodeRef={nodeRef}
              offsetParent={htmlparent}
              position={{ x: 0, y: 0 }}
            >
              <Card ref={nodeRef}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {item.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <div className="card-actions">
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                      <Avatar
                        src={item.image}
                        aria-label="profile-pic"
                      ></Avatar>

                      <Typography variant="body1">{item.name}</Typography>
                    </Stack>
                    <Stack direction={"row"}>
                      {item.icon}
                      {/* <TurnedInIcon sx={{ color: "green" }} /> */}
                      <ArrowUpwardIcon />
                    </Stack>
                  </div>
                </CardActions>
              </Card>
            </Draggable>
          );
        })}
      </Stack>
    </div>
  );
}

export default CardContainer;
