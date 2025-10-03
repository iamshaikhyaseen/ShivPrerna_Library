import "./Books.css"; 
import bg2 from "../../../assets/bgMain2.jpg";
import { useTranslation } from "react-i18next";

function Books() {
  const { t } = useTranslation();

  const books = [
    t("rareBooksPage.book1", { returnObjects: true }),
    t("rareBooksPage.book2", { returnObjects: true }),
    t("rareBooksPage.book3", { returnObjects: true }),
    t("rareBooksPage.book4", { returnObjects: true }),
  ];

  return (
    <div className="BooksContain">
      <div className="Books">
        {books.map((book, index) => (
          <div key={index} className="RareBookcard">
            <img src={bg2} className="RareBookImg" alt={book.title} />
            <div className="card-body">
              <h5 className="card-title">{book.title}</h5>
              <p>{book.author}</p>
              <p className="RareBookcardText">{book.description}</p>
              <a href="#" className="RareBookbtn btn btn-primary">
                {book.explore}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
