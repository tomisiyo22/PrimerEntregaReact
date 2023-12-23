import CartWidget from './Components/CartWidget'
import Item from './Components/Item'
import ItemCount from './Components/ItemCount'
import ItemDetailContainer from './Components/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'






function App() {
 

  return (
    <>
   

    <BrowserRouter>

    <NavBar />

    <Routes>

      <Route exact path='/' element={<ItemListContainer />} />
      <Route exact path='/cart' element={<CartWidget />} />
      <Route exact path='/item' element={<ItemCount />} />
      <Route exact path='/categoria/:categoriaId' element={<ItemListContainer />} />
      <Route exact path='/producto/:id' element={<ItemDetailContainer />} />
    
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
