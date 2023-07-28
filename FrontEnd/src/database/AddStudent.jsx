import React, { useState } from "react";
import productService from "../service/product.service";

import Navbar1 from "./NavBar1";

const AddStudent = () =>
 {
  const [product, setProduct] = useState({
    reg:"",
    name: "",
   
  });


  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegsiter = (e) => {
    e.preventDefault();

    productService
      .saveProduct(product)
      .then((res) => {
        setProduct({
          reg:"",
          name: ""
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return(
      <div className="container mt-3">
      <Navbar1/>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">ADD MANGHWA</div>

              <div className="card-body">
                <form onSubmit={(e) => ProductRegsiter(e)}>
                <div className="mb-3">
                    <label>REG NO</label>
                    <input
                      type="number"
                      name="reg"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.reg}
                    />
                  </div>

                  <div className="mb-3">
                    <label>NAME</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.name}
                    />
                  </div>
                  <button className="glow-on-hover4">ADD</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddStudent;