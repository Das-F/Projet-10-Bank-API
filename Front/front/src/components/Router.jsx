import { Routes, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.css";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}
export default Router;
