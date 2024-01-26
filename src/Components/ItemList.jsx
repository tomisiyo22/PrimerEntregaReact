import React from 'react';
import Item from './Item';

const ItemList = ({ products}) => {
  

  return (
    <div>
      {products.map((bicicletas) => (
        <Item 
          key={bicicletas.id}
          nombre={bicicletas.nombre}
          descripcion={bicicletas.descripcion}
          precio={bicicletas.precio}
          id={bicicletas.id}
          imagen={bicicletas.imagen}
        />
      ))}
    </div>
  );
};

export default ItemList;