import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Navbar from "./commponents/nav/Navbar";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/detail-product/:id" element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
