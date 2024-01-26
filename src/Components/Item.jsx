import React from 'react';
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Image  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const Item = ({ nombre, id, imagen, descripcion }) => {
    return (
        <Card maxW='sm'>
          <Text textAlign="center" fontWeight="bold" textShadow=" 2px 2px 4px rgba(0, 0, 0, 0.5)" mb="10px">{descripcion}</Text>
          <Image src={imagen} alt={nombre} borderRadius='20px' boxShadow='x1' rounded='10' />
        <CardBody>
         
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{nombre}</Heading>
            
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Link to={`/producto/${id}`}>
           <Button>Ver detalle</Button>
           </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
};

export default Item;