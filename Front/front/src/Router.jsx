import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/sign-in.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in.html" element={<SignIn />} />
    </Routes>
  );
}
export default Router;
