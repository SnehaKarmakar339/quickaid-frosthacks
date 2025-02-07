import { Routes, Route } from "react-router";
import "./App.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Diagnostics from "./pages/Diagnostics";
import Diagnos from "./pages/Diagnos";
import Results from "./pages/Results";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/diagnos" element={<Diagnos />} />
        <Route path="/results" element={<Results />} />

      </Routes>
    </>
  );
}

export default App;
