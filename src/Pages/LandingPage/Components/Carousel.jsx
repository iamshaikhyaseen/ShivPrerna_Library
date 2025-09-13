import img1 from "../../../assets/Image1.png";
import img2 from "../../../assets/Image2.png";
import img3 from "../../../assets/Image3.png";
import img4 from "../../../assets/Image4.png";
import img5 from "../../../assets/Image5.png";

function Carousel() {
  return (
    <div className="Carousel" >
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="btn active"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            className="btn active"
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            className="btn active"
            aria-label="Slide 3"></button>
            <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            className="btn active"
            aria-label="Slide 4"></button>
            <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            className="btn active"
            aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="img1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Library Image 1</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="img2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Library Image 2</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="img3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Library Image 3</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="img4" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Library Image 4</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="img5" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Library Image 5</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span className="btn carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span className="btn carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
