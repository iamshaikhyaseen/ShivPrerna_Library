import "./EventCard1.css";
import { useTranslation } from "react-i18next";

import E11 from "../../../assets/Events/Event1.1.webp";
import E12 from "../../../assets/Events/Event1.2.webp";
import E13 from "../../../assets/Events/Event1.3.webp";
import E21 from "../../../assets/Events/Event2.1.webp";
import E22 from "../../../assets/Events/Event2.2.webp";
import E23 from "../../../assets/Events/Event2.3.webp";
import E31 from "../../../assets/Events/Event3.1.webp";
import E32 from "../../../assets/Events/Event3.2.webp";
import E33 from "../../../assets/Events/Event3.3.webp";
import E41 from "../../../assets/Events/Event4.1.webp";
import E42 from "../../../assets/Events/Event4.2.webp";
import E43 from "../../../assets/Events/Event4.3.webp";

function EventCard1() {
  const { t } = useTranslation();

  return (
    <div className="Contain">
      {/* First Event */}
      <div className="Event1">
        <div className="EventsCarousel">
          <div id="carouselEvent1" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselEvent1"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"></button>
              <button
                type="button"
                data-bs-target="#carouselEvent1"
                data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button
                type="button"
                data-bs-target="#carouselEvent1"
                data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={E11} className="d-block w-100" alt="Event1.1" />
              </div>
              <div className="carousel-item">
                <img src={E12} className="d-block w-100" alt="Event1.2" />
              </div>
              <div className="carousel-item">
                <img src={E13} className="d-block w-100" alt="Event1.3" />
              </div>
            </div>
            <div className="Change">
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselEvent1"
                data-bs-slide="prev">
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselEvent1"
                data-bs-slide="next">
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="Desc">
          <p>{t("eventsPage.cards.0.description")}</p>
        </div>
      </div>

      {/* Second Event */}
      <div className="Event2">
        <div className="Desc2">
          <p>{t("eventsPage.cards.1.description")}</p>
        </div>
        <div className="EventsCarousel">
          <div id="carouselEvent2" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselEvent2"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"></button>
              <button
                type="button"
                data-bs-target="#carouselEvent2"
                data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button
                type="button"
                data-bs-target="#carouselEvent2"
                data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={E21} className="d-block w-100" alt="Event2.1" />
              </div>
              <div className="carousel-item">
                <img src={E22} className="d-block w-100" alt="Event2.2" />
              </div>
              <div className="carousel-item">
                <img src={E23} className="d-block w-100" alt="Event2.3" />
              </div>
            </div>
            <div className="Change">
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselEvent2"
                data-bs-slide="prev">
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselEvent2"
                data-bs-slide="next">
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Third Event */}
      <div className="Event3">
        <div className="EventsCarousel">
          <div id="carouselEvent3" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselEvent3"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"></button>
              <button
                type="button"
                data-bs-target="#carouselEvent3"
                data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button
                type="button"
                data-bs-target="#carouselEvent3"
                data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={E31} className="d-block w-100" alt="Event3.1" />
              </div>
              <div className="carousel-item">
                <img src={E32} className="d-block w-100" alt="Event3.2" />
              </div>
              <div className="carousel-item">
                <img src={E33} className="d-block w-100" alt="Event3.3" />
              </div>
            </div>
            <div className="Change">
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselEvent3"
                data-bs-slide="prev">
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselEvent3"
                data-bs-slide="next">
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="Desc">
          <p>{t("eventsPage.cards.2.description")}</p>
        </div>
      </div>

      {/* Fourth Event */}
      <div className="Event4">
        <div className="Desc2">
          <p>{t("eventsPage.cards.3.description")}</p>
        </div>
        <div className="EventsCarousel">
          <div id="carouselEvent4" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselEvent4"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"></button>
              <button
                type="button"
                data-bs-target="#carouselEvent4"
                data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button
                type="button"
                data-bs-target="#carouselEvent4"
                data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={E41} className="d-block w-100" alt="Event4.1" />
              </div>
              <div className="carousel-item">
                <img src={E42} className="d-block w-100" alt="Event4.2" />
              </div>
              <div className="carousel-item">
                <img src={E43} className="d-block w-100" alt="Event4.3" />
              </div>
            </div>
            <div className="Change">
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselEvent4"
                data-bs-slide="prev">
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselEvent4"
                data-bs-slide="next">
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard1;
