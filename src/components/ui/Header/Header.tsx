import React from 'react'
import { Navbar } from '../Navbar/Navbar';

export const Header = () => {
  return (
    <header
      className={'z-20 sticky -top-px pt-px transition-shadow bg-white shadow-md py-2 px-4 rounded-lg print:hidden'}
    >
      <Navbar />
    </header>
  )
}
