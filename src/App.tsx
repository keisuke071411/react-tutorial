import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home";
import PrototypePage from "./pages/prototype";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prototype" element={<PrototypePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
