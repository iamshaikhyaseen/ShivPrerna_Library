import "./Books.css";
import Rye from "../../../assets/bgMain2.jpg";
import Mockingbird from "../../../assets/bgMain1.jpg";
import Book1984 from "../../../assets/Book-1984.png";
import PrideAndPrejudice from "../../../assets/Book-P&P.png";

import { useTranslation } from "react-i18next";

function Books() {
  const { t } = useTranslation();

  // Fetch translation data for each book
  const books = [
    t("rareBooksPage.book1", { returnObjects: true }),
    t("rareBooksPage.book2", { returnObjects: true }),
    t("rareBooksPage.book3", { returnObjects: true }),
    t("rareBooksPage.book4", { returnObjects: true }),
  ];

  // Create an array of images in the same order as the books
  const bookImages = [Rye, Mockingbird, Book1984, PrideAndPrejudice];

  return (
    <div className="BooksContain">
      <div className="Books">
        {books.map((book, index) => (
          <div key={index} className="RareBookcard">
            <img
              src={bookImages[index]} // assign image based on index
              className="RareBookImg"
              alt={book.title}
            />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p className="card-author">{book.author}</p>
              <p className="RareBookcardText">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
