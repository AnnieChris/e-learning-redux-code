import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:8787/ePortal/",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
    }, 
    responseType: "json",
});