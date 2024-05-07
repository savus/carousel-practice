import "../src/css/main.css";
import { CarouselComponent } from "./Components/CarouselComponent";
import { ImageSlider } from "./Components/ImageSlider";
import { sliderImages } from "./slider-images";

function App() {
  return (
    <>
      <div className="carousel-container">
        <div className="carousel-card prev">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil fuga
          quis nemo placeat asperiores doloribus rem corporis veritatis ex
          minus, laboriosam iusto quae voluptate in provident autem. Nisi,
          doloribus debitis.
          <div className="name">John</div>
        </div>
        <div className="carousel-card active">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
          voluptatibus amet, possimus cum est illo! Maiores, voluptates. Fugiat,
          consectetur beatae quisquam expedita, ab eligendi rerum corporis
          suscipit recusandae dolorum eum.
          <div className="name">Jake</div>
        </div>
        <div className="carousel-card next">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
          voluptatibus amet, possimus cum est illo! Maiores, voluptates. Fugiat,
          consectetur beatae quisquam expedita, ab eligendi rerum corporis
          suscipit recusandae dolorum eum.
          <div className="name">jane</div>
        </div>
        <div className="carousel-card">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
          voluptatibus amet, possimus cum est illo! Maiores, voluptates. Fugiat,
          consectetur beatae quisquam expedita, ab eligendi rerum corporis
          suscipit recusandae dolorum eum.
          <div className="name">sam</div>
        </div>
        <div className="carousel-card">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
          voluptatibus amet, possimus cum est illo! Maiores, voluptates. Fugiat,
          consectetur beatae quisquam expedita, ab eligendi rerum corporis
          suscipit recusandae dolorum eum.
          <div className="name">Mike</div>
        </div>
        <div className="carousel-card">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
          voluptatibus amet, possimus cum est illo! Maiores, voluptates. Fugiat,
          consectetur beatae quisquam expedita, ab eligendi rerum corporis
          suscipit recusandae dolorum eum.
          <div className="name">This guy</div>
        </div>
      </div>
      <div className="btn-group">
        <button className="left-arrow">Left</button>
        <button className="right-arrow">Right</button>
      </div>
      <CarouselComponent />
      <ImageSlider imageUrls={sliderImages} />
    </>
  );
}

export default App;
