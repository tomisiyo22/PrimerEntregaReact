import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';

const CartModal = ({ isOpen, onClose, cart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.precio * item.contador, 0);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Detalle del Carrito</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.nombre}</p>
              <p>{item.descripcion}</p>
              <p>Precio: ${item.precio} x {item.contador}</p>
              <hr />
            </div>
          ))}
          <p>Total: ${totalPrice}</p>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CartModal;
