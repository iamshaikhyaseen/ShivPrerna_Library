import axios from "axios";
const BASE_URL=import.meta.env.VITE_BACKEND_URL;

const api=axios.create({
    baseURL:BASE_URL,
    headers:{
        "Content-Type":"application/json",
    },
});


    const token=sessionStorage.getItem("auth");
    const privateApi= axios.create({
        baseURL:BASE_URL+"/admin",
        headers:{
            "Content-Type":"application/json",
            "Authorization":token ? `Basic ${token}`:"",
        },
    });


export {api,privateApi};