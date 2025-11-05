import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import { api } from "../../../axiosConfig.js";
import "./Books.css";

function Books() {
  const { t } = useTranslation();
  const location = useLocation();

  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categories = [
    "NOVEL ( कादंबरी )",
    "DRAMA ( नाटक )",
    "EXPERIENCE STATEMENT ( अनुभव कथन )",
    "HISTORICAL ( ऐतिहासिक )",
    "RELIGIOUS ( धार्मिक )",
    "AUTOBIOGRAPHY ( आत्मचरित्र )",
    "SPIRITUAL ( आध्यात्मिक )",
    "LITERATURE ( साहित्य )",
    "HEALTH ( आरोग्य )",
    "STORY ( कथा )",
    "POEM ( कविता )",
  ];

  useEffect(()=>{
    const fetchBooks=async ()=>{
      try{
        setLoading(true);
        const response=await api.get("/books/allBooks");
        console.log(response.data);
        if(Array.isArray(response.data)){
          setBooks(response.data);
        }else{
          console.warn("Data structure",response.data);
          setBooks([]);
        }
      }
      catch(err){
        console.error("Error fetching books",err);
        setError("Failed to fetch books. Please try again later.");
        setBooks([]);
      }
      finally{
        setLoading(false);
      }
    };
    fetchBooks();
  },[]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    }
  }, [location.search]);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || book.category === selectedCategory)
  );

  return (
    <div className="allbooks-container">
      <h2 className="mb-4 text-center">{t("AllBooks.title")}</h2>

      <input
        type="text"
        className="books-search"
        placeholder={t("AllBooks.searchPlaceholder") || "Search by book title, author..."}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        className="books-select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">{t("AllBooks.category")}</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="table-container">
        {loading ? (
          <p className="text-center mt-3">Loading books...</p>
        ) : error ? (
          <p className="text-center text-danger mt-3">{error}</p>
        ) : (
        <table className="books-table table table-striped table-hover">
          <thead>
            <tr>
              <th>{t("AllBooks.BookId")}</th>
              <th>{t("AllBooks.BookTitle")}</th>
              <th>{t("AllBooks.Author")}</th>
              <th>{t("AllBooks.Category")}</th>
              <th>{t("AllBooks.RackNo")}</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.category}</td>
                  <td>{book.rackNo}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  {t("AllBooks.noBookFound") || "No book found"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
        )}
      </div>
    </div>
  );
}

export default Books;
