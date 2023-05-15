/** @format */

import "../css/Home.css";

import pImage from "../images/productImages/EricRies.jpg";
import Product from "./Product";

import BannerSlider from "./BannerSlider";

const images = {
  pImage1:
    "https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/laptop.jpg?updatedAt=1682581814189",

  pImage2:
    "https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/lautSpr%C3%A4che.jpg?updatedAt=1682581814964",

  pImage3:
    "https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1682492525282",

  pImage4:
    "https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/mbile.jpg?updatedAt=1682581815635",

  pImage5:
    "https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/tab4.jpg?updatedAt=1682492509347",

  pImage6:
    "https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/bgMonitor.jpg?updatedAt=1682581813564",

  pImage7:
    "https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/tab5.jpg?updatedAt=1682492492440",
};
const title = "Lorem ipsum dolor sit amet,eirmod tempor ";
function Home() {
  const generateRandomId = () => {
    const randomId = Math.random().toString(36).substring(2, 10);
    console.log(randomId);
    return randomId;
  };
  return (
    <div className="home">
      <BannerSlider />
      <div className="homeCenter">
        <div className="home__row">
          <Product
            id={generateRandomId()}
            title="Lorem ipsum dolor sit amet, consetetur sed diam nonumy eirmod tempor invidunt ut labore"
            price={264.96}
            rating={1}
            img="https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/SmartWatch.avif?updatedAt=1682581817666"
          />
          <Product
            id={generateRandomId()}
            
            title="Lorem ipsum dolor sit amet, consetetur  tempor invidunt ut labore"
            price={544.96}
            rating={2}
            img={images.pImage4}
          />
          <Product
            id={generateRandomId()}
            title="Lorem ipsum dolor sit amet nonumy eirmod tempor invidun"
            price={884.96}
            rating={3}
            img={images.pImage1}
          />

          <Product
            id={generateRandomId()}
            title="Lorem ipsum dolor sit amet, sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
            price={69.96}
            rating={0}
            img="https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/lautSpr%C3%A4che.jpg?updatedAt=1682581814964"
          />
        </div>
        <div className="home__row">
          <Product
            id={generateRandomId()}
            title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
            price={29.99}
            rating={4}
            img="https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/tab3.jpg?updatedAt=1682492490300"
          />
          <Product
            id={generateRandomId()}
            title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
            price={233.97}
            rating={4}
            img="https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/WmWatch.jpg?updatedAt=1682581816360"
          />
          <Product
            id={generateRandomId()}
            title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
            price={19.99}
            rating={2}
            img="https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/tab2.jpg?updatedAt=1682492510188"
          />
        </div>
        <div className="home__row">
          <Product
            id={generateRandomId()}
            title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
            price={69.98}
            rating={4}
            img="https://ik.imagekit.io/AmazonClone1/amazon-image/amazon-image/tab9.jpg?updatedAt=1682492520141"
          />
          <Product
            id={generateRandomId()}
            title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et"
            price={99}
            rating={4}
            img={images.pImage5}
          />
        </div>
        <div className="home__row">
          <Product
            id={generateRandomId()}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1099.96}
            rating={5}
            img={images.pImage6}
          />
        </div>
        <div className="home__row">
          <Product
            id={generateRandomId()}
            title={title}
            price={11.96}
            rating={1}
            img={pImage}
          />
          <Product
            id={generateRandomId()}
            title={title}
            price={11.96}
            rating={2}
            img={pImage}
          />
          <Product
            id={generateRandomId()}
            title={title}
            price={11.96}
            rating={3}
            img={pImage}
          />
          <Product
            id={generateRandomId()}
            title={title}
            price={11.96}
            rating={4}
            img={pImage}
          />
          <Product
            id={generateRandomId()}
            title={title}
            price={11.96}
            rating={0}
            img={pImage}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
