import React, { usestate , useRef,useEffect} from 'react'
import products from '../assets/data/products';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Helmet from '../components/helmet/Helmet';
import CommonSection from '../components/ui/CommonSection';
import "../styles/product-details.css";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductList from '../components/ui/ProductList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { image } from 'framer-motion/client';
import { toast } from 'react-toastify';


const ProductDetails = () => {
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const[rating ,setRating] = usestate(null);
  const [tab, setTab] = usestate("desc");
  const { id } = useParams();
  const product = products.find(item => item.id === id);
  const { imgUrl, productName, price, avgRating, reviews, shortDesc, category, description } = product;
  const dispatch = useDispatch();

  const relatedProducts = products.filter(item=>item.category === category);
  const submitHandler = (e) =>{
     e.preventDefault();
     const reviewUserName = reviewUser.current.value;
     const reviewUserMsg = reviewMsg.current.value;
    // console.log(reviewUserName.reviewUserMsg);
    const reviewObj ={
      userName : reviewUserName,
      text: reviewMsg,
      rating : rating,
    }
    console.log(reviewObj);
      toast.success("Review Submitted Sucessfully");
    };
    const addToCart = () =>{
      dispatch(cartActions.addItem({
        id,imgUrl,productName,price
      }));
      toast.success("Product Added Sucessfully");
    }
    useEffect(()=>{
      window.scrollTo(0,0);
    },[product]);
    
  return(
   <Helmet title={productName}>
    <CommonSection title={productName} />
    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg="6">
            <img src={imgUrl} alt="imgnotfound" />
          </Col>
          <Col lg="6">
            <div className="product_details">
              <p className='cat'>{category}</p>
              <h2>{productName}</h2>
              <div className="product_rating mb-4">
                <div>
                <motion.span whileTap ={{scale:"1.3"}} onClick={()=>setRating(1)}> <i class="ri-star-line"></i></motion.span>
                <motion.span whileTap ={{scale:"1.3"}} onClick={()=>setRating(2)}> <i class="ri-star-line"></i></motion.span>
                <motion.span whileTap ={{scale:"1.3"}} onClick={()=>setRating(3)}> <i class="ri-star-line"></i></motion.span>
                <motion.span whileTap ={{scale:"1.3"}} onClick={()=>setRating(4)}> <i class="ri-star-line"></i></motion.span>
                <motion.span whileTap ={{scale:"1.3"}} onClick={()=>setRating(5)}> <i class="ri-star-line"></i></motion.span>
                </div>
                <p>({avgRating}ratings)</p>

              </div>
              <span className='product_price'>₹ {price}</span>
              <p className='mt-3'>{shortDesc}</p>
              {/*<button className='buy_btn'>Buy Now</button>*/}
              <motion.button whileTap={{ scale: 1.2 }} className='buy_btn' onClick={addToCart}>
                <Link to="/cart">Add to Cart</Link>
              </motion.button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className='tab_wrapper d-flex align-items-center gap-5'>
              <h6 className={`${tab === "desc" ? 'active_tab' : ''}`} onClick={() => setTab("desc")}>Description</h6>
              <h6 className={`${tab === "rev" ? 'active_tab' : ''}`} onClick={() => setTab("rev")}>Reviews({reviews.length})</h6>
            </div>
            {
              tab === "desc" ? <div className='tab_content mt-4,'>
                <p>{description}</p>
              </div> : <div className='product_review mt-4,'>
                <div className="review_wrapper">
                  <ul>{
                    reviews.map((item, index) => (
                      <li className="mb-4" key={index}>
                        <h6>dhanashree vyavahare</h6>
                        <span>{item.rating}</span>
                        <p>{item.text}</p>
                      </li>
                    ))
                  }
                  </ul>
                  <div className="review_form ">
                    <h4>Add your reviews</h4>
                    <form action="" onSubmit={submitHandler}>
                      <div className="form_group">
                        <input type="text" placeholder="Enter Name"  ref={reviewUser} required/>
                      </div>
                      <div className="form_group d-flex align-items-center gap-3">
                        <span><i class="ri-star-line"></i></span>
                        <span><i class="ri-star-line"></i></span>
                        <span><i class="ri-star-line"></i></span>
                        <span><i class="ri-star-line"></i></span>
                        <span><i class="ri-star-line"></i></span>
                      </div>
                      <div className="form_group">
                        <textarea placeholder="review massage" rows="4" ref={reviewMsg} required></textarea>
                      </div>
                      <button className='buy_btn' type='submit'>Submit Review</button>
                    </form>
                  </div>
                </div>
              </div>
            }

          </Col>
          <Col lg="12" className='mt-5'>
          <h2 className="related_title">You Might Also Like</h2>
          </Col>
          <ProductList data={relatedProducts}/>
        </Row>
      </Container>
    </section>
  </Helmet>
);
};

export default ProductDetails;
