import axios from "axios";

const API_URL ='http://bruno-sddelivery.herokuapp.com';

export function fetchProducts(){
    return axios(`${API_URL}/products`)
}