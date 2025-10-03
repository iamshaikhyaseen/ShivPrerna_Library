import b1 from "../../../assets/bgMain1.jpg";
import "./BookCard.css";
import { useTranslation } from "react-i18next";

function BookCard() {
  const { t } = useTranslation();

  // Book data
  const books = [
    {
      id: 1,
      img: b1,
      name: "To Kill a Mockingbird",
      author: "Author: Harper Lee",
      description:
        "A story about justice, morality, and racial prejudice in the American South.",
    },
    {
      id: 2,
      img: b1,
      name: "1984",
      author: "Author: George Orwell",
      description:
        "A dystopian novel about surveillance, totalitarianism, and resistance.",
    },
    {
      id: 3,
      img: b1,
      name: "Pride and Prejudice",
      author: "Author: Jane Austen",
      description:
        "A romantic novel exploring love, class, and family in Georgian England.",
    },
  ];

  return (
    <div>
      <div className="Headding">
        <h1>{t("landingPage.newArrival.title")}</h1>
      </div>

      <div className="container">
        {books.map((book) => (
          <div key={book.id} className="Bookcard" style={{ width: "18rem" }}>
            <img src={book.img} className="img card-img-top" alt={book.name} />
            <div className="card-body">
              <h3 className="card-title">{t(`landingPage.newArrival.cards.${book.id - 1}.bookName`)}</h3>
              <h5 className="card-title">{t(`landingPage.newArrival.cards.${book.id - 1}.author`)}</h5>
              <p className="Bookcard-text">{t(`landingPage.newArrival.cards.${book.id - 1}.description`)}</p>
              <button className="Bookbtn btn btn-dark">
                {t("landingPage.newArrival.cards.0.explore")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookCard;
