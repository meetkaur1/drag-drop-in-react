import TurnedInIcon from "@mui/icons-material/TurnedIn";
import CheckIcon from "@mui/icons-material/Check";
import CircleIcon from "@mui/icons-material/Circle";
import img from "./images/profile.jpg";
import img2 from "./images/profile-girl.jpg";
import img3 from "./images/profile-group.jpg";

export const selected = [
  {
    id: 0,
    title: "Each issue has a single reporter",
    name: "Task-8823",
    icon: <CheckIcon sx={{ color: "blue" }} />,
    image: img3,
  },
  {
    id: 1,
    title: "The list is not Working properly on App Bar",
    name: "Task-7641",
    icon: <CheckIcon sx={{ color: "blue" }} />,
    image: img3,
  },
];
export const progress = [
  {
    id: 0,
    title: "Preparing backened Api with GraphQL",
    name: "Task-9324",
    icon: <CircleIcon sx={{ color: "red" }} />,
    image: img2,
  },
  {
    id: 1,
    title: "Try leaving a Comment on this Issue",
    name: "Task-4342",
    icon: <CircleIcon sx={{ color: "red" }} />,
    image: img2,
  },
];
export const backlog = [
  {
    id: 0,
    title: "Who is the author of the angular jira Clone",
    name: "Task-4326",
    icon: <TurnedInIcon sx={{ color: "green" }} />,
    image: img,
  },
  {
    id: 1,
    title: "Behing the 900 stars -Update 08/2020",
    name: "Task-8897",
    icon: <TurnedInIcon sx={{ color: "green" }} />,
    image: img,
  },
  {
    id: 2,
    title: "When creating the issue, the list is not working",
    name: "Task-9554",
    icon: <TurnedInIcon sx={{ color: "green" }} />,
    image: img,
  },
];
