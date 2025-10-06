import axios from "axios";

const BASE_URL="http://localhost:8080/api";

const api=axios.create({
    baseURL:BASE_URL,
    headers:{
        "Content-Type":"application/json",
    },
});

const privateApi=(username, password)=>{
    return axios.create({
        baseURL:BASE_URL+"/admin",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Basic "+btoa(`${username}:${password}`),
        },
    });
};

export {api,privateApi};