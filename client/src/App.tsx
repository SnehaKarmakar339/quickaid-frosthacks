import { Routes, Route } from "react-router";
import "./App.css";
import Auth from "./pages/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
