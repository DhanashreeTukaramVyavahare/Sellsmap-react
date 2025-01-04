import React, { usestate, useEffect } from "react";
import "../styles/home.css";
import Helmet from "../components/helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../components/ui/ProductList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/ui/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = usestate([]);
  const [bestSellingProducts, setBestSellingProducts] = usestate([]);
  const [mobileProducts , setMobileProducts] = usestate([]);
  const [wirelessProducts , setWirelessProducts] = usestate([]);
  const [popularProducts , setPopularProducts] =usestate([]);
  const year = new Date().getFullYear();
  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === "chair"
    );
    const bestSellingProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );
    setTrendingProducts(filteredProducts);
    setBestSellingProducts(bestSellingProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitile">Trending Products in {year}</p>
                <h2>Make your Enterior More Attractive and Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore ea eum sapiente quaerat doloribus accusamus.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="ImageNotfound" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services></Services>
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best_sells">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Selling Products</h2>
            </Col>
            <ProductsList data={bestSellingProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock_top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Arm Chair</h3>
              </div>
              <Clock></Clock>
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy_btn store_btn"
              >
                <Link to="/shop">Visit Store </Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img src={counterImg} alt="imagenotfound" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className="popular_product">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title mb-5">Popular Products</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;