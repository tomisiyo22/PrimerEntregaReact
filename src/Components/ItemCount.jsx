import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

const ItemCount = () => {
    const [contador, setContador] = useState(0);

    const mostrarMensaje = ()=> {
        if(contador === 1) {
            alert(`Agregado al carrito ${contador} unidad`)
        } else
        alert(`Agregado al carrito ${contador} unidades`)
    } 

    const incrementarContador = () => {
        if(contador <=9) {
        setContador(contador + 1);
    }};

    const decrementarContador = () => {
        if(contador >= 1) {
        setContador(contador - 1);
    }};

    return (
        <div>
            <Button colorScheme='teal' size='xs' onClick={incrementarContador}>
                +
            </Button>
            <Button colorScheme='teal' size='xs' onClick={mostrarMensaje}>
                Agregar al carrito {contador}
            </Button>
            <Button colorScheme='teal' size='xs' onClick={decrementarContador}>
                -
            </Button>
        </div>
    );
};

export default ItemCount;