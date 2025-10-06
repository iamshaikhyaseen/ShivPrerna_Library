import axios from "axios";

const BASE_URL="http://localhost:8080/api";

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
            "Authorization":`Basic ${token}`,
        },
    });


export {api,privateApi};