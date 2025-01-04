import React from 'react';
import Routes from  '../../routers/Routers'; // Import Routes and Route for routing
import Header from '../header/Header';
import Footer from '../footer/Footer';

// You can remove the Routers import unless you want to use it explicitly
// import Routers from '../../routers/Routers';

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routes />
      </div>
      <Footer />
    </>
  );
}

export default Layout