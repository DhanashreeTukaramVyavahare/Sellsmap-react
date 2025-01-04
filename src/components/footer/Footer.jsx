import React from 'react';
import Helmet from '../helmet/Helmet';
import './footer.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col ,list, ListGroup, ListGroupItem } from 'reactstrap';
import logo from "../../assets/images/eco-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (

    <footer className="footer ">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <img src={logo} alt="imagenotfound" />
              <div>
                <h1>sellsMap</h1>
              </div>

            </div>
            <p className="footer_text mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Reprehenderit excepturi hic non fugiat 
               sapiente consectetur natus deserunt odio ipsa nam.</p>
          </Col>

         


          <Col lg="3">
          <div className="footer_quicklinks ">
            <h4 className="quick_link-titles">Top Categories</h4>
            <ListGroup className="mb-3">
              <ListGroupItem className="ps-0 border-0 ">
                <Link to ="#">Mobile phones</Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to ="#">Laptop</Link>
              </ListGroupItem> 
              <ListGroupItem className="ps-0 border-0">
                <Link to ="#">Sofa</Link>
              </ListGroupItem>
               <ListGroupItem className="ps-0 border-0">
                <Link to ="#">Chairs</Link>
              </ListGroupItem>
            </ListGroup>
            </div>
          </Col>
          <Col lg="2">
          <div className="footer_quicklinks">
            <h4 className="quick_link-titles">Useful Links</h4>
            <ListGroup className="mb-3">
              <ListGroupItem className="ps-0 border-0 ">
                <Link to ="/shop">Shop</Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to ="/cart">cart</Link>
              </ListGroupItem> 
              <ListGroupItem className="ps-0 border-0">
                <Link to ="/login">Login</Link>
              </ListGroupItem>
               <ListGroupItem className="ps-0 border-0">
                <Link to ="#">privacy policy</Link>
              </ListGroupItem>
            </ListGroup>
            </div>
          </Col>
          <Col lg="3">
          <div className="footer_quicklinks">
            <h4 className="quick_link-titles">Contact</h4>
            <ListGroup className="mb-3">
              <ListGroupItem className="icons d-flex align-items-center gap-2 ps-0 border-0 ">
                <span>
                  <i class="ri-map-pin-line"></i>
                  <Link to="#">
                  <p>Deccan,pune -411001</p>
                  </Link>
                </span>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 icons d-flex align-items-center gap-2 ps-0 border-0">
                <span>
                 <i class="ri-phone-line"></i>
                  <p>+91 78654 38920</p>
                </span>
              </ListGroupItem> 
              <ListGroupItem className="ps-0 border-0 icons d-flex align-items-center gap-2 ps-0 border-0">
                <span>
                <Link to="#">
                   <i class="ri-facebook-line"></i>
                   
                   <p>sellsMap@facebook</p></Link>
                </span>
              </ListGroupItem>
               <ListGroupItem className="ps-0 border-0 icons d-flex align-items-center gap-2 ps-0 border-0">
                <Link to="#">
                <span><i class="ri-twitter-line"></i></span></Link>
                <p>sellsMap@twitter</p>
              </ListGroupItem>
            </ListGroup>
            </div>
          </Col>
          
        </Row>
      </Container>
      <div className="footer_size">
      <Col lg="12" className="copyright_footer">
          <p className="footer_copyright text-center">
            Copyright {year} <span><i class="ri-copyright-line"></i></span>
            sells map devloped by dhanshree vyavahare .All Rights Reserved

          </p>
          </Col>
          </div>
    </footer>
  )
}

export default Footer;

