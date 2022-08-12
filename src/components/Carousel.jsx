import React from "react";
import "../stylesheets/Carousel.css";
import img1 from "../resources/imgCarouselUno.jpg";
import img2 from "../resources/imgCarouselDos.jpg";
import img3 from "../resources/imgCarouselTres.jpg";

function Carousel() {
  return (
    <div className="contenedor-carousel">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active gradient">
            <img
              src={img1}
              class="rounded  d-block w-100 img-carousel"
              alt="..."
            />
          </div>
          <div class="carousel-item gradient">
            <img
              src={img2}
              class="rounded  d-block w-100 img-carousel"
              alt="..."
            />
          </div>
          <div class="carousel-item gradient">
            <img
              src={img3}
              class="rounded  d-block w-100 img-carousel"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
