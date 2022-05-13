import React, { FC, useState } from 'react';

interface Props{
    title?: string;
    children: JSX.Element | JSX.Element[];
}

export const Accordion:FC<Props> = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item flex flex-col rounded-md bg-blue-100 my-1 hover:cursor-pointer focus:border focus:border-black">
      <div className="accordion-title w-full flex justify-between px-3 py-2" onClick={() => setIsActive(!isActive)}>
        <div>{title?title:'titulo'}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{children}</div>}
    </div>
  );
};
