import React, { FC } from 'react';
import { Footer } from '../ui';
import { Header } from '../ui/Header/Header';
interface Props {
    children: React.ReactNode;
}

export const LayoutProducts:FC<Props> = ({children}) => {
  return (
    <div className="animation">
      <div className='p-4 w-full'>
      <Header/>
        {children}
    </div>
      <Footer/>
    </div>
  )
}
