import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import "./index.css"
import SVG from "./pages/SVG";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/svg" element={<SVG />} />
    </Routes>
  )
}

export default App
