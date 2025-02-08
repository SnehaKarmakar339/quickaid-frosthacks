import { Routes, Route } from "react-router";
import "./App.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Diagnostics from "./pages/Diagnostics";
import Results from "./pages/Results";
import Ambulance from "./pages/Ambulance";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/diagnostics/symptoms" element={<Diagnostics />} />
        <Route path="/diagnostics/results" element={<Results />} />
        <Route path="/ambulance/find" element={<Ambulance/>} />

      </Routes>
    </>
  );
}

export default App;
