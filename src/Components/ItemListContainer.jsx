import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loader from './Loader';

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "Bicicletas");

    getDocs(itemsCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); 
      });

  }, []);

  const productosFiltrados = products.filter((producto) => {
    return producto.categoria === id;
  });

  return (
    <div>
      {loading ? (
        <Loader /> 
      ) : (
        <>
          {id ? <ItemList products={productosFiltrados} /> : <ItemList products={products} />}
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
