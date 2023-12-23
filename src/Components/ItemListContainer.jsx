import React from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {

  const { categoriaId } = useParams()
  
  const bicicletas = [
    { id: 1,nombre: 'Mountain Bike', descripcion: 'Ideal para terrenos accidentados y caminos sinuosos.', precio: 500000, categoria: 'bicimontagne' },
    { id: 2, nombre: 'Le Montagne', descripcion: 'Diseñada para la velocidad en carreteras y competiciones.', precio: 800000, categoria: 'bicimontagne'},
    { id: 3, nombre: 'Urban Bike', descripcion: 'Perfecta para desplazamientos diarios en entornos urbanos.', precio: 350000, categoria: 'urbanbike'},
    { id: 4,nombre: 'Fitness Bike', descripcion: 'Perfecta para no salir ni un segundo de tu casa', precio: 150000, categoria: 'fitness'},
    { id: 5, nombre: 'Fitness Bike 1', descripcion: 'Perfecta para tus entrenamientos en casa.', precio: 200000, categoria: 'fitness' },
    { id: 6, nombre: 'Fitness Bike 2', descripcion: 'Mejora tu salud con esta bicicleta de fitness.', precio: 250000, categoria: 'fitness' },
    { id: 7, nombre: 'Urban Bike 1', descripcion: 'Diseño moderno para desplazamientos urbanos.', precio: 400000, categoria: 'urbanbike' },
    { id: 8, nombre: 'Urban Bike 2', descripcion: 'Perfecta para la vida en la ciudad.', precio: 450000, categoria: 'urbanbike' },
    { id: 9, nombre: 'Mountain Bike 1', descripcion: 'Supera los terrenos más desafiantes con esta bicicleta de montaña.', precio: 600000, categoria: 'bicimontagne' },
    { id: 10, nombre: 'Mountain Bike 2', descripcion: 'Descubre nuevos caminos con esta bicicleta de montaña.', precio: 700000, categoria: 'bicimontagne' }
  ];

  const mostrarBicicletas = new Promise((resolve, rejected)=>{
    
     
      if (bicicletas.length > 0) {
        setTimeout(() => {
        resolve(bicicletas)
        }, 3000)
    } else {
      rejected("No se encontraron los productos");
    }
  
  });

    
  mostrarBicicletas
  .then((resultado)=>{
    //console.log(resultado)

  })
  .catch((error)=>{
    console.log('Ha sucedido un error ' + error)
  })



const productosFiltrados = bicicletas.filter((producto)=> producto.categoria == categoriaId)



    return (
        <div>
          {
          categoriaId ? <ItemList bicicletas={productosFiltrados}/>: <ItemList bicicletas={bicicletas}/>
          }
        </div>
    );
};

export default ItemListContainer;