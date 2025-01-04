import React from 'react';
import '../styles/checkout.css';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/ui/CommonSection';
import {useSelector} from "react-redux";

const Checkout = () => {
  const totalQTY = useSelector(state=>state.cart.totalQuantity);
  const totalAmount = useSelector (state=>state.cart.totalAmount);

  return (

    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing_form'>
                <FormGroup className="form-group">
                  <Input type="text" placeholder='Enter your name' />
                </FormGroup>
                <FormGroup className="form-group">
                  <Input type="email" placeholder='Enter your Email' />
                </FormGroup>
                <FormGroup className="form-group">
                  <Input type="number" placeholder='Enter your MobileNumber' />
                </FormGroup>
                <FormGroup className="form-group">
                  <Input type="text" placeholder='Street Address' />
                </FormGroup>
                <FormGroup className="form-group">
                  <Input type="text" placeholder='City' />
                </FormGroup>
                <FormGroup className="form-group">
                  <Input type="text" placeholder='state' />
                </FormGroup>
                <FormGroup className="form-group">
                  <Input type="text" placeholder='Country' />
                </FormGroup>
                <FormGroup className="form-group">

                  <Input type="text" placeholder='Postal' />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout_cart">
                <h6>Total Qty: <span>{totalQTY}items</span></h6>
                <h6>subTotal: <span> ₹{totalAmount}</span></h6>
                <h6><span>Shipping : <br/>free Shipping</span><span>₹0</span></h6>
               
                <hr />
                <h4>Total Cost :<span>₹{totalAmount}</span></h4>

                <button className="buy_btn auth_btn w-100 ">Place an Order</button>

              </div>
            </Col>

          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

export default Checkout;
