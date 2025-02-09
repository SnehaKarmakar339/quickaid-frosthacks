import { Routes, Route } from "react-router";
import "./App.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Diagnostics from "./pages/Diagnostics";
import Nearby from "./pages/Nearby";
import Ambulance from "./pages/Ambulance";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/nearby" element={<Nearby />} />
        <Route path="/ambulance" element={<Ambulance />} />
      </Routes>
    </>
  );
}

export default App;
