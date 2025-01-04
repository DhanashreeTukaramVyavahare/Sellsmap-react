import React, {useRef , useEffect} from 'react';
import './header.css';
import { Container, Row } from 'reactstrap';
import logo from '../../assets/images/eco-logo.png';
import { NavLink,useNavigate} from 'react-router-dom';
import userIcon from '../../assets/images/user-icon.png';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const nav_links = [
    { path: '/home', display: 'Home' },
    { path: '/shop', display: 'Shop' },
    { path: '/cart', display: 'Cart' },
];

const Header = () => {
    const navigate = useNavigate();
    const totalQuantity = useSelector(state =>state.cart.totalQuantity);
    const headerRef = useRef(null);
    const stickyHeaderFunction = () =>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
                headerRef.current.classList.add('sticky_header');
            }
            else{
                headerRef.current.classList.remove('sticky_header');

            }
        });
    }
    useEffect(()=>{
        stickyHeaderFunction();
        return ()=> 
            window.removeEventListener('scroll',{stickyHeaderFunction});
        
    });
    const navigateToCart =()=>{
     navigate("/cart");
    }
    return (
        <header ref={headerRef} className="header">
            <Container>
                <Row>
                    <div className="nav_wrapper">
                        <div className="logo">
                            <img src={logo} alt="Logo not found" />
                            
                            <h1>sellsMap</h1>
                        </div>
                        <div className="Navgation">
                            <ul className="menu">
                                {nav_links.map((item, index) => (
                                    <li className="nav_item" key={index}>
                                        <NavLink to={item.path}
                                            className={(navData) =>
                                                navData.isActive ? 'nav_active' : ''
                                            }
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="nav_icons">
                            <span className="fav_icon">
                                <i className="ri-heart-fill"></i>
                                <span className="badge">5</span>
                            </span>
                            <span className="cart_icon"onClick={navigateToCart}>
                                <i className="ri-shopping-bag-line"></i>
                                <span className="badge">{totalQuantity}</span>
                            </span>
                            <span>
                                <motion.img
                                    whileTap={{ scale: 1.2 }}
                                    src={userIcon}
                                    alt="User Icon"
                                />
                            </span>
                        </div>
                        <div className="mobile_menu">
                            <span><i className="ri-menu-line"></i></span>
                       </div> 
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;