import React, { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { Flex, Stack, Heading, Text, Button, ButtonGroup, IconButton, Divider, Card, CardBody, CardFooter, Image } from '@chakra-ui/react';
import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, setCart, agregarAlCarrito, setContador } = useContext(CartContext);

  const handleRemoveItem = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    setCart(newCart);
  };

  const handleEmptyCart = () => {
    setCart([]);
    setContador(0);
  };

  const handleAddOne = (productId) => {
    agregarAlCarrito({ id: productId }, 1);
  };

  const handleRemoveOne = (productId) => {
    agregarAlCarrito({ id: productId }, -1);
  };

  const fullPrice = () => {
    if (!Array.isArray(cart) || cart.length === 0) {
      return 0;
    } else {
      return cart.reduce((acu, item) => acu + item.precio * item.contador, 0);
    }
  };
  

  return (
    <Flex direction="column" align="center" mt="8">
      <Heading as="h1" mb="4" size="xl">
        Tu carrito
      </Heading>
      {cart.length === 0 ? (
        <Text mb="4" fontSize="lg">El carrito está vacío</Text>
      ) : (
        <Stack spacing="4" width="80%" maxW="600px">
          {cart.map((item) => (
            <Card key={item.id} boxShadow="dark-lg" p="4" rounded="md" bg="white" width="100%">
              <CardBody>
                <Image
                  src={item.imagen}
                  alt={item.nombre}
                  borderRadius="md"
                  boxSize='100%'
                  objectFit="cover"
                  mb="4"
                />

                <Stack spacing="4">
                  <Heading size="md" textAlign="center">
                    {item.titulo}
                  </Heading>
                  <Text textAlign="center">{item.descripcion}</Text>
                  <Text textAlign="center" color="blue.600" fontSize="lg">
                    ${item.precio * item.contador} x {item.contador}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter justifyContent="center">
                <ButtonGroup spacing="2">
                  <IconButton
                    onClick={() => handleRemoveOne(item.id)}
                    colorScheme="blue"
                    aria-label="Quitar uno"
                    icon={<MinusIcon />}
                  />
                  <Button
                    onClick={() => handleRemoveItem(item.id)}
                    colorScheme="red"
                  >
                    Eliminar
                  </Button>
                  <IconButton
                    onClick={() => handleAddOne(item.id)}
                    colorScheme="blue"
                    aria-label="Agregar uno"
                    icon={<AddIcon />}
                  />
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}

          <Button colorScheme="blue" onClick={handleEmptyCart} width="100%">
            Vaciar Carrito
          </Button>
          <Heading as="h2" size="lg" mt="4">
            Precio final: ${fullPrice()}
          </Heading>
          <Button colorScheme="gray" width="100%" mt="4">
            <Link to="/Form">Finalizar compra</Link>
          </Button>
        </Stack>
      )}
    </Flex>
  );
};

export default Cart;
