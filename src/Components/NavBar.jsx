import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'



const NavBar = () => {
    return (
        <>
        <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   BicimaniaXTREMME
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to='/'>Nosotros</Link></li>
    <li><Link className="dropdown-item" to={'/'}>Bicicletas</Link> </li>
    <li><Link className="dropdown-item" to={'/categoria/bicimontagne'}>Mountain Bikes</Link></li>
    <li><Link className="dropdown-item" to={'/categoria/urbanbike'}>Urban Bikes</Link></li>
    <li><Link className="dropdown-item" to={'/categoria/fitness'}>Fitness Bikes</Link></li>
    <li><Link className="dropdown-item" to=''>¿Dónde estamos ubicados?</Link></li>
  </ul>
</div>
            <Link to={'/'}>
<h1 className="text-center mt-5">¡BICIMANIA XTREMME!</h1>
            </Link>
          
         
           <CartWidget />
        </>
    );
};

export default NavBar;