import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DragAndDropMain from "./draganddroptask/DragAndDropMain";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DragAndDropMain />} />
      </Routes>
    </>
  );
}

export default App;
