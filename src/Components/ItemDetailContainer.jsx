import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getFirestore, getDoc, doc} from "firebase/firestore"
import Loader from './Loader';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()


  useEffect(() => {
    const db = getFirestore();
    const docBicicletas = doc(db, "Bicicletas", id);
    getDoc(docBicicletas)
    .then((snapshot) => {
      setItem(
        { ...snapshot.data(), id: snapshot.id }
      )
      setLoading(false);
    })
  },[id])

    
      

  return (
        <div>
          {loading ? (
            <Loader />
          ) : (
        
        item && <ItemDetail item={item} /> )}
        
        </div>
      
    
  )
};

export default ItemDetailContainer;
