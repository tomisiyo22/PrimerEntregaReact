import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div className="position-absolute top-0 end-0 m-3">
      <h4 style={{ display: 'inline-block', marginRight: '5px' }}>(1)</h4>
      <Link to='/cart'><TiShoppingCart style={{ display: 'inline-block',fontSize: '30px' }} /></Link>
    </div>
  );
};

export default CartWidget;