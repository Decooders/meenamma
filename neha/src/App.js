import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import Pain from "../src/pages/Pain.js";

function App() {
  return (
    <Routes>
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/pain" element={<Pain />} />
    </Routes>
  );
}

export default App;
