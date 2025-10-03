import { api } from '../../apiConfig';
import './AllBooks.css'
import React, { useEffect, useState } from 'react'

function AllBooks() {

    const [books,setBooks]=useState([]);
    // useEffect(()=>{
    //     async function fetchBooks(params) {
    //         const response=await api.get("/books/allBooks");
    //         console.log(response.data);
    //     }
    // },[]);

     const fetchBooks=async ()=>{
        const response=await api.get("/books/allBooks");
        console.log(response.data);
        
    }

  return (
    <div>   
        <button onClick={fetchBooks} >AllBooks</button>
    </div>
  )
}

export default AllBooks
