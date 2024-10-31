import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store";
import { getProducts } from "../store/productsSlice";

function Product() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const keyword = useAppSelector((state) => state.search.keyword);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    let filtered = products;

    // Filter berdasarkan kategori jika ada
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Search berdasarkan nama produk
    if (keyword) {
      filtered = filtered.filter((product) => product.name.toLowerCase().startsWith(keyword.toLowerCase()));
    }

    setFilteredProducts(filtered);
  }, [products, keyword, category]);
  return (
    <div className="container-fluid">
      <div className="d-flex p-3 gap-2">
        <div className="container d-flex justify-content-start gap-3 flex-wrap  ">
          {filteredProducts.map((product) => {
            return (
              <div key={product.id} className="card shadow " style={{ width: "18rem" }}>
                <img src={product.img} style={{ objectFit: "contain", maxHeight: "15rem", minHeight: "15rem" }} className="card-img-top" alt="..." />
                <div className="card-body ">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">
                    {product.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    })}
                  </p>
                  <Link to={`/detail-product/${product.id}`} className="btn btn-info" style={{ width: "100%" }}>
                    Detail
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex flex-column w-25 ">
          <button className="btn btn-outline-info btn-sm mb-3" onClick={() => setCategory("")}>
            all
          </button>
          <button className="btn btn-outline-info btn-sm mb-3" onClick={() => setCategory("phone")}>
            Phone
          </button>
          <button className="btn btn-outline-info btn-sm" onClick={() => setCategory("tab")}>
            Tab
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
