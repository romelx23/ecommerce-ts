import React, { FC, useState } from 'react';

interface Props{
    title?: string;
    active?: boolean;
    children: JSX.Element | JSX.Element[];
}

export const Accordion:FC<Props> = ({ title, children, active }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col rounded-md bg-white shadow-md border transition-[border] hover:border hover:border-gray-400 my-1 hover:cursor-pointer focus:border focus:border-black">
      <div className="accordion-title w-full flex justify-between px-3 py-2" onClick={() => {
        setIsActive(!isActive);
      }}>
        <div>{title?title:'titulo'}</div>
        <div>{isActive?'+':'-'}</div>
      </div>
      <div className={`transition origin-top ${isActive ?'accordion-show':'accordion-hidden'}`}>{children}</div>
    </div>
  );
};
