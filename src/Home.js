import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="49538094"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538085"
            title="Kenwood kMix Stand Mixer for
                      Baking, Stylish Kitchen Mixer With
                      k-beater, Dough Hook and Whisk, 5 Litre 
                      Glass Bowl"
            price={239.0}
            image="https://m.media-amazon.com/images/I/716kTJI4jtL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="49538095"
            title="Samsung 108 cm (43 inches) Crystal 4K Pro Series Ultra HD Smart LED TV UA43AUE70AKLXL (Black) (2021 Model)"
            price={450.82}
            image="https://m.media-amazon.com/images/I/71OENr3lFxL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="49538086"
            title="(Renewed) Honor 2 BT Watch 2 with Battery- Charcoal Black (14-Days Battery Battery Life_Compatible with Android and iOS)"
            price={131.41}
            image="https://m.media-amazon.com/images/I/61W4meSdVQL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id="49538059"
            title="Redgear A-15 Wired Gaming Mouse with Upto 6400 DPI, RGB & Driver Customization for PC(Black)"
            price={5.14}
            image="https://m.media-amazon.com/images/I/61MUoISbzjL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="49538792"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={1803.66}
            image="https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
