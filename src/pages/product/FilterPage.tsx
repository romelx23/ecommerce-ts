import React from 'react'
import { LayoutProducts } from '../../components/layout/LayoutProducts';
import { ListProducts } from '../../components/products/ListProducts';
import { Accordion } from '../../components/ui';

export const FilterPage = () => {
  return (
    <LayoutProducts>
        <div className="flex">
          <div className="w-96 min-h-full bg-purple-400 p-2">
            <div className="flex flex-col">
                <Accordion title='Categorías'>
                  <h1>Abarrotes</h1>
                  <h1>Verduras</h1>
                  <h1>Legumbres</h1>
                  <h1>Aceites</h1>
                </Accordion>
                <Accordion title='Marcas'>
                  <h1>Ace</h1>
                  <h1>Sapolio</h1>
                  <h1>Magi</h1>
                  <h1>Alacena</h1>
                </Accordion>
                <Accordion title='Precios'>
                  <h1>Ace</h1>
                  <h1>Sapolio</h1>
                </Accordion>
            </div>  
          </div>
        <ListProducts
            title= "Productos filtrados"
        />
        </div>
    </LayoutProducts>
  )
}
