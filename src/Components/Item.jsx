import React from 'react';
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const Item = ({ nombre, id }) => {
    return (
        <Card maxW='sm'>
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