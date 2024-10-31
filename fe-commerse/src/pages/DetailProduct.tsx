import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCartHooks } from "../hooks/useCartHooks";
import { useAppDispatch, useAppSelector } from "../store";
import { addProductToCart } from "../store/cartSlice";
import { getProduct } from "../store/productsSlice";

export default function DetailProduct() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { product } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct(Number(id)));
  }, []);

  if (!product) {
    return <p>Data Kosong</p>;
  }
  const { addCart } = useCartHooks();
  const handleAddCart = async () => {
    if (id !== undefined) {
      await addCart(Number(id));
      dispatch(
        addProductToCart({
          ...product,
          quantity: 1,
        })
      );
    }
  };

  return (
    <div className="container-fluid d-flex gap-3 justify-content-center align-items-center gap-5">
      <div className=" d-flex gap-3 flex-column">
        <div className="card" style={{ width: "18rem" }}>
          <img src={product.img} className="card-img-top" alt="..." />
        </div>
        <button className="btn btn-danger w-100 fw-bold" onClick={handleAddCart}>
          Add to Cart
        </button>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Nama</th>
              <td style={{ textTransform: "capitalize" }}>: {product.name}</td>
            </tr>
            <tr>
              <th>Harga</th>
              <td>
                :{" "}
                {product.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                })}
              </td>
            </tr>
            <tr>
              <th>Deskripsi</th>
              <td style={{ textWrap: "wrap" }}>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illo incidunt maxime quaerat ullam delectus saepe mollitia aut facere optio!</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
