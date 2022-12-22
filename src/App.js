import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, About, Skills, Projects, Contact, PageNotFound } from './components';
const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App