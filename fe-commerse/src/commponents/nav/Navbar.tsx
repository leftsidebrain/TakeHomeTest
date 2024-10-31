import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { setKeyword } from "../../store/searchSlice";

function Navbar() {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setKeyword(event.target.value));
  };

  const nav = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          ISlim
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
          <form className="d-flex gap-4" role="search">
            <div className=" position-relative" onClick={() => nav("/cart")}>
              {cart.length > 0 && (
                <span style={{ position: "absolute", right: -5, backgroundColor: "maroon", color: "wheat", fontSize: "13px", width: "1rem", height: "1rem", textAlign: "center", borderRadius: "50%", lineHeight: "15px" }}>{cart.length}</span>
              )}
              <img style={{ width: "2em" }} src="https://cdn-icons-png.flaticon.com/512/3081/3081986.png" alt="" />
            </div>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
