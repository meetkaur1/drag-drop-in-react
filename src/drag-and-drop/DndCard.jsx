import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const DndCard = ({ id, index, item }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="Card"
        >
          <Card>
            <CardContent>
              <Typography variant="body2">{item.title}</Typography>
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
        </div>
      )}
    </Draggable>
  );
};

export default DndCard;
