import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import booksData from "../../../BooksData.js";
import { useTranslation } from "react-i18next";
import "./Books.css";

function Books() {
  const { t } = useTranslation();
  const location = useLocation();

  const [books, setBooks] = useState(booksData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "NOVEL ( कादंबरी )",
    "DRAMA ( नाटक )",
    "MAGAZINE ( मासिक )",
    "HISTORICAL ( ऐतिहासिक )",
    "RELIGIOUS ( धार्मिक )",
    "POLITICAL ( राजकीय )",
    "POEM ( कविता )",
    "LITERATURE ( साहित्य )",
    "FICTION ( काल्पनिक )",
    "NON_FICTION ( अकाल्पनिक )",
    "RECIPE ( रेसिपी )",
  ];

  // 👇 Detect category from URL
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
        <table className="books-table table table-striped table-hover">
          <thead>
            <tr>
              <th>{t("AllBooks.BookId")}</th>
              <th>{t("AllBooks.BookTitle")}</th>
              <th>{t("AllBooks.Author")}</th>
              <th>{t("AllBooks.Category")}</th>
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
      </div>
    </div>
  );
}

export default Books;
