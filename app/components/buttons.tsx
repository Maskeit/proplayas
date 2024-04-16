import React from 'react'
import '@/app/components/buttons.component.css'

export type Buttons = {
    text: string;
  };
export const Small_Button = ({text} :Buttons ) => {
  return (
    <button className='sm-btn'>{text}</button>
  )
}
