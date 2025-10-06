import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import booksData from "../../../BooksData.js";
import { useTranslation } from "react-i18next";
import "./AddBook.css";
import { api,privateApi } from "../../../axiosConfig.js";

function AddBook() {
  const { t } = useTranslation();
  const location = useLocation();

  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [loading,setLoading]=useState(true);
  const token=sessionStorage.getItem("auth");

  const [bookForm, setBookForm] = useState({
    id: 0,
    title: "",
    author: "",
    category: "",
  });

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

  // Detect category from URL
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

  // Open Add Book popup
  const openAddPopup = () => {
    setIsUpdateMode(false);
    setBookForm({ id: "", title: "", author: "", category: "" });
    setShowAddPopup(true);
  };

  // Open Update popup
  const openUpdatePopup = () => {
    if (!selectedBook) {
      alert("Please select a Book");
      return;
    }
    setIsUpdateMode(true);
    setBookForm({ ...selectedBook });
    setShowAddPopup(true);
  };

  // Add or Update book
  const handleSaveBook = async () => {
    if (!bookForm.id || !bookForm.title || !bookForm.author || !bookForm.category) {
      alert("Please fill in all fields");
      return;
    }

    if (isUpdateMode) {
      // setBooks(
        // books.map((b) => (b.id === bookForm.id ? { ...bookForm } : b))
        // );
        try{
        console.log("Book for updating: "+bookForm.id,bookForm.author,bookForm.category,bookForm.title);
        const bookObject={title:bookForm.title,author:bookForm.author,category:bookForm.category};
        const response=await privateApi.put(`/books/update/${bookForm.id}`,bookObject);
        console.log("updateBookResponse: ",response.data);
        setBooks(books.map(b => (b.id === bookForm.id ? response.data : b)));
        
      }catch(err){
        console.error("Error Adding Book: "+err);
      }
      
    } else {
      try{
        console.log("Book for adding: "+bookForm.id,bookForm.author,bookForm.category,bookForm.title);
        const bookObject={id:bookForm.id,title:bookForm.title,author:bookForm.author,category:bookForm.category};
        const response=await privateApi.post("/books/addBook",bookObject);
        console.log("addBookResponse: ",response.data);
        setBooks([...books,response.data]);
      }catch(err){
        console.error("Error Adding Book: "+err);
      }
    }

    setShowAddPopup(false);
    setSelectedBook(null);
    setBookForm({ id: "", title: "", author: "", category: "" });
  };

  // Select a book row
  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  // Delete book with confirmation
  const handleDeleteBook = async () => {
    if (!selectedBook) {
      alert("Please select a Book");
      return;
    }
    // setConfirmDelete(true);
    console.log("Deleting book: "+selectedBook.id);
    try{
      const response=await privateApi.delete(`/books/${selectedBook.id}`);
      console.log("DeleteResponse: "+response.data);
      setBooks(books.filter(b => b.id !== selectedBook.id));
    }catch(err){
      console.error("Book delete failed: "+err);
    }
    
  };

  // const confirmDeleteYes = () => {
  //   setBooks(books.filter((b) => b.id !== selectedBook.id));
  //   setSelectedBook(null);
  //   setConfirmDelete(false);
  // };

  // const confirmDeleteCancel = () => {
  //   setConfirmDelete(false);
  // };

  return (
    <div className="allbooks-container">
      <h2 className="mb-4 text-center">Manage Books</h2>

      <input
        type="text"
        className="books-search"
        placeholder={
          t("AllBooks.searchPlaceholder") || "Search by book title, author..."
        }
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

      {/* Action Buttons with spacing */}
      <div className="action-buttons">
        <button className="btn btn-success" onClick={openAddPopup}>
          Add-Book
        </button>
        <button className="btn btn-warning" onClick={openUpdatePopup}>
          Update
        </button>
        <button className="btn btn-danger" onClick={handleDeleteBook}>
          Delete
        </button>
      </div>

      {/* Books Table */}
      <div className="table-container">
        <table className="books-table table table-striped table-hover">
          <thead>
            <tr>
              <th>{t("AllBooks.BookId")}</th>
              <th>{t("AllBooks.BookTitle")}</th>
              <th>{t("AllBooks.Author")}</th>
              <th>{t("AllBooks.Category")}</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <tr
                  key={book.id}
                  className={selectedBook?.id === book.id ? "selected-row" : ""}
                >
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.category}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleSelectBook(book)}
                    >
                      Select
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  {t("AllBooks.noBookFound") || "No book found"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add / Update Book Popup */}
      {showAddPopup && (
        <div className="popup-overlay">
          <div className="popup-content-column">
            <h5>{isUpdateMode ? "Update Book" : "Add New Book"}</h5>
            <input
              type="text"
              placeholder="Book ID"
              value={bookForm.id}
              onChange={(e) => setBookForm({ ...bookForm, id: e.target.value })}
              disabled={isUpdateMode} // prevent changing ID on update
            />
            <input
              type="text"
              placeholder="Title"
              value={bookForm.title}
              onChange={(e) =>
                setBookForm({ ...bookForm, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Author"
              value={bookForm.author}
              onChange={(e) =>
                setBookForm({ ...bookForm, author: e.target.value })
              }
            />
            <select
              value={bookForm.category}
              onChange={(e) =>
                setBookForm({ ...bookForm, category: e.target.value })
              }
            >
              <option value="">Select Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <button className="btn btn-primary mt-3" onClick={handleSaveBook}>
              {isUpdateMode ? "Update Book" : "Add Book"}
            </button>
            <button
              className="btn btn-secondary mt-2"
              onClick={() => setShowAddPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Popup */}
      {confirmDelete && (
        <div className="popup-overlay">
          <div className="popup-content-column">
            <h5>Confirm Delete</h5>
            <p>Are you sure you want to delete "{selectedBook.title}"?</p>
            <div className="delete-popup-buttons">
              <button className="btn btn-secondary" onClick={confirmDeleteCancel}>
                Cancel
              </button>
              <button className="btn btn-danger" onClick={confirmDeleteYes}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddBook;