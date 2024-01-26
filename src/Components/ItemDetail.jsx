import React from 'react';
import {Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Image,} from '@chakra-ui/react'
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ item }) => {

  
  const { id } = useParams()


 
    return (
        <Card maxW='sm'>
          <Image src={item.imagen} alt={item.nombre} borderRadius='20px' boxShadow='x1' mx="auto" rounded='10' />
        <CardBody>
         
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{item.nombre}</Heading>

            <Text>
                {item.descripcion}, 
            </Text>
            <Text color='blue.600' fontSize='2x1'>
                ${item.precio} 
            </Text>  
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
             <ItemCount item={item}/>
          </ButtonGroup>
        </CardFooter>
      </Card>
    );
};

export default ItemDetail;