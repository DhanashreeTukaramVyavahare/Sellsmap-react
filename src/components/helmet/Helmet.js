import React from 'react';

const Helmet = (props) => {
  // Correct syntax for setting the document title
  document.title = `SellsMap - ${props.title || 'Home'}`;

  return (
    <div>
      {props.children}
    </div>
  );
};

export default Helmet;
