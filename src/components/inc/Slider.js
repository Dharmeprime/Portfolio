import React from "react";
import Hostinger from '../images/hostinger.png';
import Smile from '../images/smile.png';
import Blue from '../images/bluehost.png';

function Slider(){
  return(
    <div className="container">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Hostinger} class="d-block img-fluid mx-auto" alt="..." style={{height:'50%'}} />
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>First slideer label</h5>
              <p>Some representative placeholder content for the first slides.</p> */}
            </div>
          </div>
          <div class="carousel-item">
            <img src={Smile} class="d-block img-fluid mx-auto" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p> */}
            </div>
          </div>
          <div class="carousel-item">
            <img src={Blue} class="d-block img-fluid h-25 mx-auto" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              {/* <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p> */}
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Slider;