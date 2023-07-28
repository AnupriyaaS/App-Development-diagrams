import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/product.service";
import './addproduct.css';
import Navbar1 from "./NavBar1";


const Hom = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Details Deleted");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div className="container mt-3">
      <Navbar1/>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              
                <h1>ADD STUDENT </h1>

              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">REG NO</th>
                      <th scope="col">NAME</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr className="tab">
                        <td>{num + 1}</td>
                        <td>{p.reg}</td>
                        <td>{p.name}</td>
                        <td>
                        <button  className="btn btn-sm btn-danger ms-1">
                        <Link to={`/editStudent/${p.id}`} >
                          UPDATE
                        </Link>
                        </button>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-dark">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hom;