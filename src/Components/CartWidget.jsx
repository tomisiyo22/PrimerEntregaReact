// En CartWidget.jsx
import React, { useContext } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext';
import Cart from './Cart';

const CartWidget = () => {
  const { contador, isCartVisible, toggleCartVisibility, cart, setCart } = useContext(CartContext);

  const handleToggleCart = () => {
    if (cart.length > 0) {
      toggleCartVisibility();
    }
  };

  return (
    <div className="position-absolute top-0 end-0 m-3">
      <h4 style={{ display: 'inline-block', marginRight: '5px' }}>{contador}</h4>
      <Link to="/cart" onClick={handleToggleCart}>
        <TiShoppingCart style={{ display: 'inline-block', fontSize: '30px' }} />
      </Link>
      {isCartVisible && <Cart />}
    </div>
  );
};

export default CartWidget;
