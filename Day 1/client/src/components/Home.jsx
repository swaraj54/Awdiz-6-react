import { useContext, useEffect, useState } from "react";
import { MyCounterContext } from "./context/CounterContext";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./global/Navbar";

import "./../styles/Home.css";
import api from "../AxiosConfig";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Home() {
  const router = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts, "allProducts");

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("/api/v1/product/get-all-products");
        if (response?.data?.success) {
          setAllProducts(response.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);
  const { counter, Increment } = useContext(MyCounterContext);
  const { state } = useContext(AuthContext);
  // const { theme } = useContext(ThemeContext)
  console.log(state, "state");

  async function AddToCart(productId) {
    console.log(state, "state?.user?._id");
    if (state?.user?._id === undefined) {
      toast.error("Please login to add products into cart.");
      router("/login");
    }

    try {
      const response = await api.post("/api/v1/user/add-to-cart", {
        userId: state?.user?._id,
        productId: productId,
      });
      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // <div style={{ background: theme === light ? "white" : 'black' }}>
    <div id="body">
      <div id="body-nav">
        <div>
          <p>
            Home / Clothing / <b>Men T-Shirts</b>
          </p>
        </div>
        <div>
          <p>
            {" "}
            <b>Men T-Shirts</b> - 127113 items
          </p>
        </div>
        <div class="d-flex  jc-between">
          <div class="w-10">
            <p>
              <b>FILTERS</b>
            </p>
          </div>
          <div class="d-flex w-60 pl-20">
            <div class="px-10 d-flex ai-center">
              <p>
                Bundles
                <i class="fa-solid fa-angle-down"></i>
              </p>
            </div>
            <div class="px-10">
              <p>
                Country
                <i class="fa-solid fa-angle-down"></i>
              </p>
            </div>
            <div class="px-10">
              <p>
                Size
                <i class="fa-solid fa-angle-down"></i>
              </p>
            </div>
          </div>
          <div class="b-black w-20 d-flex jc-between px-10 ">
            <div>
              <p>Sort by : Recommended</p>
            </div>
            <div class="d-flex jc-between ai-center">
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
      <div id="body-body">
        <div id="body-body-filters" class="w-100">
          <div class="b-black w-100 p-30">
            <p>CATEGORIES</p>
            <div>
              <div>
                <input type="checkbox" /> <span>Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Longue Tshirts</span>
              </div>
            </div>
          </div>
          <div class="b-black w-100 p-30">
            <p>BRAND</p>
            <div>
              <div>
                <input type="checkbox" /> <span>Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Longue Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Longue Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Longue Tshirts</span>
              </div>
            </div>
          </div>
          <div class="b-black w-100 p-30">
            <p>PRICE</p>
            <div>
              <div>
                <input type="checkbox" /> <span>Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Longue Tshirts</span>
              </div>
            </div>
          </div>
          <div class="b-black w-100 p-30">
            <p>COLOR</p>
            <div>
              <div>
                <input type="checkbox" /> <span>Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Longue Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Tshirts</span>
              </div>
              <div>
                <input type="checkbox" /> <span>Longue Tshirts</span>
              </div>
            </div>
          </div>
        </div>
        <div id="body-body-products" class="pl-20">
          <h1>All Products</h1>
          {allProducts.length ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {allProducts.map((productObj) => (
                <div
                  style={{
                    width: "18%",
                    border: "2px solid black",
                    height: "250px",
                  }}
                >
                  <h1>Name : {productObj.name}</h1>
                  <p>Category : {productObj.category}</p>
                  <p>Price : {productObj.price}/-</p>
                  <p>Total Quantities : {productObj.quantity}</p>
                  <p>{productObj.tags}</p>
                  <button onClick={() => AddToCart(productObj?._id)}>
                    Add to Cart
                  </button>
                  <button>Add to Wishlist</button>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h1>Loading..</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
