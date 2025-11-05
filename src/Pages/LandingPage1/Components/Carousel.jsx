import img1 from "../../../assets/EnrollNow/img1.jpg";
import img2 from "../../../assets/EnrollNow/img_2.jpg";
import img3 from "../../../assets/EnrollNow/img_3.jpg";
import img4 from "../../../assets/EnrollNow/img_4.jpg";
import img5 from "../../../assets/EnrollNow/img_5.jpg";
import "./Carousel.css";

function Carousel() {
  return (
    <div className="LandingPageCarousel">
      {/* Bootstrap Carousel Wrapper */}
      <div id="carouselExampleCaptions" className="carousel">

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {[0,1,2,3,4].map((index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "btn active" : "btn"}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          {[img1, img2, img3, img4, img5].map((img, idx) => (
            <div key={idx} className={`carousel-item ${idx === 0 ? "active" : ""}`}>
              <img src={img} className="d-block carousel-img" alt={`Slide ${idx + 1}`} />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="btn carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="btn carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
