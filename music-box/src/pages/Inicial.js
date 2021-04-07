import React from 'react';
import HomePage from '../components/HomePage';
import NavBar from '../components/NavBar'
import MinhasMusicas from './MinhasMusicas';

export default function Inicial(){
  return(
    <div>
      <NavBar/>
      <MinhasMusicas/>
    </div>
  )
}