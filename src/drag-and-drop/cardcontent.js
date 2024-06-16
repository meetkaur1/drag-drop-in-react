import TurnedInIcon from "@mui/icons-material/TurnedIn";
import CheckIcon from "@mui/icons-material/Check";
import CircleIcon from "@mui/icons-material/Circle";
import img from "./images/profile.jpg";
import img2 from "./images/profile-girl.jpg";
import img3 from "./images/profile-group.jpg";
export const cardheading = [
  "BACKLOG",
  "SELECTED FOR DEVELOPMENT",
  "IN PROGRESS",
];

export const selected = [
  {
    id: "0",
    title: "Each issue has a single reporter",
    name: "Task-8823",
    icon: <CheckIcon sx={{ color: "blue" }} />,
    image: img3,
    heading: "SELECTED FOR DEVELOPMENT",
  },
  {
    id: "1",
    title: "The list is not Working properly on App Bar",
    name: "Task-7641",
    icon: <CheckIcon sx={{ color: "blue" }} />,
    image: img3,
    heading: "SELECTED FOR DEVELOPMENT",
  },
];
export const progress = [
  {
    id: "2",
    title: "Preparing backened Api with GraphQL",
    name: "Task-9324",
    icon: <CircleIcon sx={{ color: "red" }} />,
    image: img2,
    heading: "IN PROGRESS",
  },
  {
    id: "3",
    title: "Try leaving a Comment on this Issue",
    name: "Task-4342",
    icon: <CircleIcon sx={{ color: "red" }} />,
    image: img2,
    heading: "IN PROGRESS",
  },
];
export const backlog = [
  {
    id: "4",
    title: "Who is the author of the angular jira Clone",
    name: "Task-4326",
    icon: <TurnedInIcon sx={{ color: "green" }} />,
    image: img,
    heading: "BACKLOG",
  },
  {
    id: "5",
    title: "Behing the 900 stars -Update 08/2020",
    name: "Task-8897",
    icon: <TurnedInIcon sx={{ color: "green" }} />,
    image: img,
    heading: "BACKLOG",
  },
  {
    id: "6",
    title: "When creating the issue, the list is not working",
    name: "Task-9554",
    icon: <TurnedInIcon sx={{ color: "green" }} />,
    image: img,
    heading: "BACKLOG",
  },
];
