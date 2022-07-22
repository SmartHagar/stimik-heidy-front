/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import "animate.css";
import Header from "./components/Header";
import TopMenus from "./components/TopMenus";
import Dashboard from "./pages/dashboard/Dashboard";
import Fasilitas from "./pages/fasilitas/Fasilitas";
import Galeri from "./pages/galeri/Galeri";
import Aturan from "./pages/aturan/Aturan";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="mb-4">
        <TopMenus />
      </div>
      <div className="px-5 md:px-0 md:w-11/12 m-auto bg-base-100 shadow-lg min-h-[80vh] mt-20">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/fasilitas" element={<Fasilitas />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/aturan" element={<Aturan />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
