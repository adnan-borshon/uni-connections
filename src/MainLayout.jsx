import React from 'react';
import Navbar from './Fixed Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Fixed Components/Footer';
import Home from './Components/Home';

function MainLayout() {
  return (
  <>
  <Navbar/>

  <Outlet/>
  <Footer/>
  </>
  );
}

export default MainLayout;