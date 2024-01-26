import React from 'react';
import { useState } from 'react';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  useToast,
} from '@chakra-ui/react';

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);

  const db = getFirestore();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);

      toast({
        title: 'Orden enviada',
        description: `Tu orden ha sido recibida. ID de la orden: ${docRef.id}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error al enviar la orden', error);
      toast({
        title: 'Error',
        description: 'Hubo un error al enviar la orden. Inténtalo de nuevo.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const order = {
   cliente: {nombre, email} 
    
  };

  const ordersCollection = collection(db, "orden");

  return (
    <Flex direction="column" align="center" mt="8">
      <form onSubmit={handleSubmit} width="80%" maxW="400px">
        <FormControl mb="4">
          <FormLabel>Nombre</FormLabel>
          <Input
            type="text"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </FormControl>
        <FormControl mb="4">
          <FormLabel>Correo</FormLabel>
          <Input
            type="email"
            placeholder="Correo"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="100%">
          Enviar
        </Button>
      </form>
      {orderId && (
        <Text mt="4" fontSize="lg">
          Tu orden ha sido recibida. ID de la orden: {orderId}
        </Text>
      )}
    </Flex>
  );
};

export default Form;
