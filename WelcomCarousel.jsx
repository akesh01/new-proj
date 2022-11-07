import Carousel from "react-bootstrap/Carousel";
import "./WelcomCarousel.css";
function WelcomCarousel() {


  return (
    <div className="carousel-container">
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="./images/Rectangle 8.png"
            alt="First slide"
          />
          <div className="carousel-caption d-none d-md-block"> 
            <h5>Welcome to</h5>
            <h6>Catholic Board of Education</h6>
            <p>
              Education is the process of facilitating learning, or the
              acquisition of knowledge, skills & values.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="./images/Rectangle 8.png"
            alt="Second slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Welcome to</h5>
            <h6>Catholic Board of Education</h6>
            <p>
              Education is the process of facilitating learning, or the
              acquisition of knowledge, skills & values.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="./images/Rectangle 8.png"
            alt="Third slide"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Welcome to</h5>
            <h6>Catholic Board of Education</h6>
            <p>
              Education is the process of facilitating learning, or the
              acquisition of knowledge, skills & values.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default WelcomCarousel;
