import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../commponents/data/product";
import { IProducts } from "../utils/type";

export default function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProducts>();

  useEffect(() => {
    const foundProduct = data.find((item) => item.id === Number(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p>Data Kosong</p>;
  }
  return (
    <div className="container-fluid d-flex gap-3">
      <div key={id} className="card" style={{ width: "18rem" }}>
        <img src={product.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price}</p>
          {/* <a href={`/detail-product/${product.id}`} className="btn btn-primary">
            detail
          </a> */}
        </div>
      </div>
      ;
    </div>
  );
}
