import React from 'react'
import { usestate } from 'react';
import CommonSection from '../components/ui/CommonSection';
import Helmet from '../components/helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import "../styles/shop.css";
import products from '../assets/data/products';
import ProductsList from "../components/ui/ProductList"


const Shop = () => {
  const [productsData, setProductsData] = usestate(products);
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "all") {
      setProductsData(products);
    }
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(item => item.category === "sofa");
      setProductsData(filteredProducts);
    }
    if (filterValue === "chair") {
      const filteredProducts = products.filter(item => item.category === "chair");
      setProductsData(filteredProducts);
    }
    if (filterValue === "mobile") {
      const filteredProducts = products.filter(item => item.category === "mobile");
      setProductsData(filteredProducts);
    }
    if (filterValue === "wireless") {
      const filteredProducts = products.filter(item => item.category === "wireless");
      setProductsData(filteredProducts);
    }
    if (filterValue === "watch") {
      const filteredProducts = products.filter(item => item.category === "watch");
      setProductsData(filteredProducts);
    }
    if (filterValue === "laptop") {
      const filteredProducts = products.filter(item => item.category === "laptop");
      setProductsData(filteredProducts);
    }
    if (filterValue === "shoes") {
      const filteredProducts = products.filter(item => item.category === "shoes");
      setProductsData(filteredProducts);
    }
    if (filterValue === "toyes") {
      const filteredProducts = products.filter(item => item.category === "toyes");
      setProductsData(filteredProducts);
    }
  }
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProduct = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()) 
    || item.category.toLowerCase().includes(searchTerm.toLowerCase()));
    setProductsData(searchedProduct);
  }
  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Filter by category</option>
                  <option value="all">All</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="wireless">Wireless</option>
                  <option value="watch">Watch</option>
                  <option value="laptop">Laptop</option>
                  <option value="shoes">Shoes</option>
                  <option value="toys">Toys</option>


                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter_widget">
                <select>
                  <option value="#">Sort By </option>
                  <option value="ascending">Ascending</option>
                  <option value="decending">Descending</option>
                  <option value="prise">Prise</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search_box">
                <input type="text" placeholder='    Search.....' onChange={handleSearch} />
                <span><i class="ri-search-line"></i></span>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (<h1>No Product are Found!</h1>) :
              (<ProductsList data={productsData} />

              )}
          </Row>
        </Container>
      </section>
    </Helmet>

  )
}

export default Shop