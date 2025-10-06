import LibraryOpening1 from "../../../assets/History/LibraryOpening1.png";
import LibraryOpening2 from "../../../assets/History/LibraryOpening2.png";
import LibraryOpening3 from "../../../assets/History/LibraryOpening3.png";
import LibraryOpening4 from "../../../assets/History/LibraryOpening4.png";
import LibraryOpening5 from "../../../assets/History/LibraryOpening5.png";
import "./Carousel.css";

function Carousel() {
  return (
    <div className="CarouselContainer">
      <div className="HistoryCarousel">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={LibraryOpening2}
                className="d-block w-100"
                alt="History1"
              />
            </div>

            <div className="carousel-item">
              <img
                src={LibraryOpening1}
                className="d-block w-100"
                alt="History2"
              />
            </div>

            <div className="carousel-item">
              <img
                src={LibraryOpening3}
                className="d-block w-100"
                alt="History3"
              />
            </div>

            <div className="carousel-item">
              <img
                src={LibraryOpening4}
                className="d-block w-100"
                alt="History4"
              />
            </div>

            <div className="carousel-item">
              <img
                src={LibraryOpening5}
                className="d-block w-100"
                alt="History5"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
