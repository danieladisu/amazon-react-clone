/** @format */
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "../css/Home.css";

function BannerSlider() {
  const images = [
    "https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg?updatedAt=1682518711128",
    "https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?updatedAt=1682518713248",
    "https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg?updatedAt=1682518710477",

    "https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/1348517_in_prime_2_pd_3000x1200_Eng._CB663273097_.jpg.png?updatedAt=1682492547381",

    "https://ik.imagekit.io/AmazonClone1/amazon/61DUO0NqyyL._SX3000_.jpg?updatedAt=1682700215484",

    "https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg?updatedAt=1682518710680",
  ];

  const sliderSettings = {
    // centerMode: true,
    // centerPadding: 0,
    // objectFit: "contain",
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="home__container">
      <Slider {...sliderSettings} className="slider" variant="dark">
        {images.map((image, index) => (
          <img
            className="home__image"
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </Slider>
    </div>
  );
}

export default BannerSlider;
