import axios from "axios";

const API_URL ='http://bruno-sddelivery.herokuapp.com';

const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchProducts(){
    return axios(`${API_URL}/products`)
}

export function fechLocalMapBox(local:String){
    return axios (`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}