import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Provider } from "react-redux";
import Navbar from "./commponents/nav/Navbar";
import DetailProduct from "./pages/DetailProduct";
import { store } from "./store";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/detail-product/:id" element={<DetailProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
