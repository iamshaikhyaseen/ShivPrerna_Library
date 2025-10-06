import { api,privateApi } from "../axiosConfig";

export const getAllBooks=async()=>{
    const response=await api.get("/allBooks");
    return response.data;
}