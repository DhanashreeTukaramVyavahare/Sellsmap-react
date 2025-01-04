import React from 'react'
import Helmet from '../components/helmet/Helmet';
import "../styles/cart.css";
import CommonSection from '../components/ui/CommonSection';
import { Container, Row ,Col } from 'reactstrap';
import tdImg from "../assets/images/phone-01.jpg";
import {motion} from 'framer-motion';
import {cartActions} from '../redux/slices/cartSlice';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const Cart = () => {
  const cartItems = useSelector(state=>state.cart.cartItems);
  const totalAmount = useSelector(state=>state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart"/>
      <section>
        <Container>
          <Row>
            <Col lg="9">
            {
            cartItems.length === 0 ? <h2 className='fs-4 text-center'>No items in the cart</h2>:<table className='table border'>
               <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item,index) => (
                   <Tr item= {item} key={index}/>
                  ))}
              </tbody>
            </table>
            }
            
            </Col>
            <Col lg="3">
            <div>
              <h6 className="d-flex align-items-center justify-content-between fw-bold">
                subtotal
              </h6>
              <span className="fs-4 fw-bold">
                ${totalAmount}
                </span>
            </div>
            <p className="fs-6 mt-2">Taxes abd Shipping will calculate in checkout</p>
            <div>
             
              <motion.button whileTap={{scale:1.2}} className='buy_btn w-100'>
                <Link to='/checkout'>Checkout</Link>
                </motion.button>
              <motion.button whileTap={{scale:1.2}} className='buy_btn w-100'>
              <Link to='/shop'>Continue Shoping</Link>
              </motion.button>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
 const Tr=({item}) => {
  const dispatch = useDispatch();
  const deleteProduct =()=>{
    dispatch(cartActions.deleteItem(item.id));
  }
  return   <tr>
  <td> 
    <img src={item.imgUrl} alt="Imgnotfound" />
  </td>
  <td>{item.productName}</td>
  <td>{item.price}</td>
  <td>{item.quantity}</td>
  <td>
    <motion.i whileTap={{scale :1.2}} onClick={deleteProduct}class="ri-delete-bin-6-line"></motion.i>
  </td>
</tr>
 }
export default Cart

