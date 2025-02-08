import { Routes, Route } from "react-router";
import "./App.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Diagnostics from "./pages/Diagnostics";
import Nearby from "./pages/Nearby";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/nearby" element={<Nearby />} />
      </Routes>
    </>
  );
}

export default App;
