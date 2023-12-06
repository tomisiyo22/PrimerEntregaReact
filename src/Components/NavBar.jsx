import React from 'react';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <>
        <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   BicimaniaXTREMME
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Nosotros</a></li>
    <li><a className="dropdown-item" href="#">Más productos</a></li>
    <li><a className="dropdown-item" href="#">¿Dónde estamos ubicados?</a></li>
  </ul>
</div>
           <h1 className="text-center mt-5">¡BICIMANIA XTREMME!</h1> 
           <CartWidget />
        </>
    );
};

export default NavBar;