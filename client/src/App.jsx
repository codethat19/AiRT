import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import {logo} from './assets';
import { Home, CreatePost } from './pages';


const App = () => {
  return (
    <BrowserRouter>
      <header className="bg-black w-full flex justify-between 
      items-center sm:px-8 px-4 py-4 
      border-b border-b-[#e6ebf4]">
      <Link to='/'>
      <div style={{display: "inline", fontWeight: "bold"}}className='text-lg text-white bg-black'>
        A
        <div style={{display: "inline"}} className='text-sm bg-black'>i</div>
        RT Powered by</div>
        <img src={logo} alt="logo" className="object-contain logo bg-black" /> 
      </Link>
      <Link to='/create-post' className='font-inter font-medium bg-[#0d6efd]
      text-white px-4 py-2 rounded-md'>Create</Link>
      </header>
      <main className='bg-[rgb(236, 179, 101)] sm:p-8 px-4 py-8
      w-full min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/create-post' element={<CreatePost /> }/>
        </Routes>
      </main>
      
    </BrowserRouter>
  )
}

export default App
