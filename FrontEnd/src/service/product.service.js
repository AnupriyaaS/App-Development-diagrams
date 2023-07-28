import axios from "axios";

const API_URL = "http://localhost:8080"; 
axios.defaults.headers.common['Authorization'] = `Bearer ${window.sessionStorage.getItem("jwt")}`;

class ProductService {

    saveProduct(product) {
        return axios.post(API_URL + "/admin/saveProduct", product);
    }

    getAllProduct() {
        return axios.get(API_URL + "/admin");
    }

    getProductById(id) {
        return axios.get(API_URL + "/admin" + id);
    }

    deleteProduct(id) {
        return axios.get(API_URL + "/admin/deleteProduct/" + id);
    }

    editProduct(product) {
        return axios.post(API_URL + "/admin/editProduct/" + product.id, product);
    }

}
export default  new ProductService;