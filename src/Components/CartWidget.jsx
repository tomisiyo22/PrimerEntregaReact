import React from 'react';
import { TiShoppingCart } from "react-icons/ti";

const CartWidget = () => {
  return (
    <div className="position-absolute top-0 end-0 m-3">
      <h4 style={{ display: 'inline-block', marginRight: '5px' }}>(1)</h4>
      <TiShoppingCart style={{ display: 'inline-block',fontSize: '30px' }}  />
    </div>
  );
};

export default CartWidget;