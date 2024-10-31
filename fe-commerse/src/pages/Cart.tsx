import { useAppSelector } from "../store";

function Cart() {
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <div className="container-fluid d-flex gap-3 justify-content-center align-items-center gap-5">
      {cart.length > 0 ? (
        cart.map((cartItem) => {
          return (
            <>
              <div className=" d-flex gap-3 flex-column">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={cartItem.img} className="card-img-top" alt="..." />
                </div>
              </div>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th>Nama</th>
                      <td style={{ textTransform: "capitalize" }}>: {cartItem.name}</td>
                    </tr>
                    <tr>
                      <th>Harga</th>
                      <td>
                        :{" "}
                        {cartItem.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        })}
                      </td>
                    </tr>
                    <tr>
                      <th>quantity</th>
                      <td style={{ textWrap: "wrap" }}>: {cartItem.quantity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          );
        })
      ) : (
        <div>
          <p>No item</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
