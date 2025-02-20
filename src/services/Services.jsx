import React from 'react'
import './services.css';
import { Container,Col, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';
//import { section } from 'framer-motion/client';
import serviceData from '../assets/data/serviceData';

const Services = () => {
  return (
    <section className="services">
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          {
            serviceData.map((item, index) => (
              <Col lg='3' md='4' key={index}>
                <motion.div whileHover={{scale:1.1}}className="services_item" style={{background:`${item.bg}`}}>
                  <span>
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </motion.div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default Services
