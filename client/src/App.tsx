import { Routes, Route } from "react-router";
import "./App.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
