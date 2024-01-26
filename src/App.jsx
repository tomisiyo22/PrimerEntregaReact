import CartWidget from './Components/CartWidget'
import Item from './Components/Item'
import ItemCount from './Components/ItemCount'
import ItemDetailContainer from './Components/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShoppingCartContext from './context/ShoppingCartContext'
import Form from './Components/Form'







function App() {
 

  return (
    <>
   

    <BrowserRouter>

    <ShoppingCartContext>

    <NavBar />

    <Routes>

      <Route exact path='/' element={<ItemListContainer />} />
      <Route exact path='/cart' element={<CartWidget />} />
      <Route exact path='/item' element={<ItemCount />} />
      <Route exact path='/categoria/:id' element={<ItemListContainer />} />
      <Route exact path='/producto/:id' element={<ItemDetailContainer />} />
      <Route exact path='/Form' element={<Form />} />
      
    
    </Routes>

    </ShoppingCartContext>
     
    </BrowserRouter>
    
    </>
  )
}

export default App
