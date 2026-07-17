import React from "react";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Products = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);

  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        const product = res.data.find((item) => item.product_id === Number(id));
        setProduct(product);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function inc() {
    setQuantity(quantity + 1);
  }
  function dec() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleOrder(e) {
    e.preventDefault();

    const order = { name, phone, email, address, quantity, product };
    axios
      .post("http://localhost:3000/orders", order)
      .then(() => {
        toast.success("Order Placed Successfully!");

        setName("");
        setPhone("");
        setEmail("");
        setAddress("");
        setQuantity(1);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Order not placed");
      });
  }

  return (
    <>
      <Navbar />
      <div className="container-product">
        <img src={product.product_image} alt="" />

        <div className="product-details">
          <h1>{product.product_name}</h1>

          <h3>Price: ₹{product.product_price}</h3>

          <h3>
            <b>Specification:</b> {product.product_description}
          </h3>

          <p>
            <b>Rating:</b> ⭐⭐⭐⭐⭐ {product.product_rating}
          </p>

          <div className="quantity">
            <button onClick={dec}>-</button>
            <h2>{quantity}</h2>
            <button onClick={inc}>+</button>
          </div>
        </div>
      </div>
      <div className="card-order">
        <div className="order">
          <h2>Order Details</h2>

          <form onSubmit={handleOrder}>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <br />
            <br />

            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <br />
            <br />

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <br />
            <br />

            <textarea
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>

            <br />
            <br />

            <button type="submit">Order</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Products;
