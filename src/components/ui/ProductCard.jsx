import React from 'react';
import { motion } from 'framer-motion';
import  "../../styles/product-card.css"
import { Col } from 'reactstrap';
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from '../../redux/slices/cartSlice';
import { toast } from 'react-toastify';



const ProductCard = ({item}) => {
   const dispatch = useDispatch();
   const addToCart = () => {
    dispatch(cartActions.addItem({
      id:item.id,
      productName : item.productName,
      price:item.price,
      imgUrl : item.quantity,
    }));
    toast.success("Product Added Successfully");
   }
  return (
    <Col lg="3" md="4" className='mb-2'>
    <div className="product_item">
      <div className="product_img">
      <Link to={`/shop/${item.id}`}>

        <motion.img 
        whileHover={{scale:1.1}} 
        src={item.imgUrl} 
        alt="ImageNotFound"/> 
        </Link>
        <Link to={`/shop/${item.id}`}>

        <div className="p-2 product_info">
          <h3 className="product_name" >{item.productName} </h3>
          <span>{item.category}</span>
        </div>
        </Link>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2 ">
            <span className="price">
               ₹+{item.price}
            </span>
            <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i class="ri-add-line"></i>
            </motion.span>
        </div>
      </div>
    
    </div>
    </Col>
  )
}

export default ProductCard;