import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DndParent from "./drag-and-drop/DndParent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DndParent />} />
      </Routes>
    </>
  );
}

export default App;
