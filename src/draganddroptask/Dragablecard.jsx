import React, { useState } from "react";
import Draggable from "react-draggable";
import Avatar from "@mui/material/Avatar";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
function Dragablecard({ htmlparent, item }) {
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
    // setposition({ x: data.x, y: data.y });
    // setposition({ x: data.offsetX, y: data.offsetY });
    // setposition({ x: data.screenX, y: data.screenY });
    // setposition({ x: data.screenX, y: data.screenY });
  };
  return (
    <Draggable
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}
      nodeRef={nodeRef}
      offsetParent={htmlparent}
      //   position={position}
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
              <Avatar src={item.image} aria-label="profile-pic"></Avatar>

              <Typography variant="body1">{item.name}</Typography>
            </Stack>
            <Stack direction={"row"}>
              {item.icon}
              <ArrowUpwardIcon />
            </Stack>
          </div>
        </CardActions>
      </Card>
    </Draggable>
  );
}

export default Dragablecard;
