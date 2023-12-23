import React from 'react';
import Item from './Item';

const ItemList = ({ bicicletas }) => {
  

  return (
    <div>
      {bicicletas.map((bicicletas) => (
        <Item 
          key={bicicletas.id}
          nombre={bicicletas.nombre}
          descripcion={bicicletas.descripcion}
          precio={bicicletas.precio}
          id={bicicletas.id}
        />
      ))}
    </div>
  );
};

export default ItemList;