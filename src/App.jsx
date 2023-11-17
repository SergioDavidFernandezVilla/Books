import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AcercaPage from "./pages/AcercaPage";
import LibroPage from "./pages/LibrosPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/acerca" element={<AcercaPage />}></Route>
        <Route path="/libro/:slug" element={<LibroPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
