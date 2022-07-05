import React, { useContext, useRef } from 'react'
import { UIContext } from '../../../context/ui';

type Props = {
    children: JSX.Element,
};

export const Modal = ({ children }: Props) => {
    const {ToggleModal,toggleModal} = useContext(UIContext)
    return (
        <div
        className={`container__modal ${ToggleModal?'modal__visible':'modal__hidden'}`}
        >
            <div 
            className='w-full h-full'
            onClick={()=>toggleModal(false)}
            >
            </div>
            <div className='absolute h-full'>
                {children}
            </div>
        </div>
    )
}