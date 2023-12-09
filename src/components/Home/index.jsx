import React from 'react'
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../Common';
const Home = () => {
  return (
      <>
          <Header />
          <Outlet/>
          <Footer/>
      </>
  )
}

export default Home