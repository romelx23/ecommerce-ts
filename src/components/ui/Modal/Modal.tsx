import React, { useContext, useRef } from 'react'
import { UIContext } from '../../../context/ui';

type Props = {
    children: JSX.Element,
};

export const Modal = ({ children }: Props) => {
    const {ToggleModal,toggleModal} = useContext(UIContext)
    return (
        <div 
        onClick={()=>toggleModal(false)}
        className={`container__modal ${ToggleModal?'modal__visible':'modal__hidden'}`}>
            {children}
        </div>
    )
}