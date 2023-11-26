import { useState } from 'react'

import Form from './Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import Home from './home'
import { BrowserRouter , Routes , Route } from 'react-router-dom'


function App() {


  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Signup/>}></Route>
    <Route path='/login' element={<Form/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App
