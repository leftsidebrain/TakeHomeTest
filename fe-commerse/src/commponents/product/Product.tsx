import React from "react";
import { data } from "../data/product";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="container-fluid d-flex justify-content-evenly flex-wrap">
      {data.map((product) => {
        return (
          <div key={product.id} className="card" style={{ width: "18rem" }}>
            <img src={product.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.price}</p>
              <Link to={`/detail-product/${product.id}`} className="btn btn-primary" style={{ width: "100%" }}>
                detail
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
