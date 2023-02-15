import React from "react";
import "../styles/home.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState("");
  const [activeButton, setActiveButton] = useState("");
  useEffect(() => {
    axios("http://localhost:2020/products").then((data) =>
      setProducts(data.data)
    );
  }, []);
  console.log("Home Products: ", products);
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-top-left">
          <div>
            <p>
              <b> CANON </b>
              <br />
              camera
            </p>
          </div>
          <div className="btn">
            <button className="shop-btn">Shop now</button>
            <button className="view-btn">View more</button>
          </div>
        </div>
        <div className="home-top-right">
          <img src={"Group 536.png"} alt="canon" />
        </div>
      </div>
      <div className="home-mid">
        <div className="home-mid-top">
          <h3>Popular products</h3>
          <div className="btns">
            <button className={activeButton ? "active-btn" : "inactive-btn"}>
              Cameras
            </button>
            <button className={activeButton ? "active-btn" : "inactive-btn"}>
              Laptops
            </button>
            <button className={activeButton ? "active-btn" : "inactive-btn"}>
              Tablets
            </button>
            <button className={activeButton ? "active-btn" : "inactive-btn"}>
              Mouse
            </button>
            <button className={activeButton ? "active-btn" : "inactive-btn"}>
              Sale
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Category</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Sale</th>
            </tr>
          </thead>
          {products
            ? products.map((product, index) => {
                return (
                  <tbody className="product" key={index}>
                    <tr>
                      <td>
                        <img src={product.image} alt="" />
                      </td>
                      <td>{product.category}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
                      <td>{product.sale}</td>
                      <td>
                        <button>Add</button>
                      </td>
                    </tr>
                  </tbody>
                );
              })
            : null}
        </table>
      </div>
    </div>
  );
}
