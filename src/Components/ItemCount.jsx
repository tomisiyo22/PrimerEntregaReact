import { Button } from '@chakra-ui/react'
import Swal from 'sweetalert2'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
const ItemCount = ({ producto }) => {


    const { sumar, restar, contador, agregarAlCarrito } = useContext(CartContext);
  
    const mostrarMensaje = () => {
      if (contador === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No puedes agregar 0 productos al carrito.',
        });
      } else {
        Swal.fire(`Has agregado al carrito ${contador} unidades`);
        agregarAlCarrito(producto, contador);
      }
    };
  
    return (
      <div className='centradoBtn'>
        <Button colorScheme='teal' size='xs' mr='4' onClick={restar}>
          -
        </Button>
        <Button onClick={mostrarMensaje}>Agregar al carrito {contador}</Button>
        <Button colorScheme='teal' size='xs' ml='4' onClick={sumar}>
          +
        </Button>
      </div>
    );
  };
  
  export default ItemCount;
  