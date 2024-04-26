import React, { useState } from 'react'
import '@/app/components/buttons.component.css'
import { QuestionMarkCircleIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

import { useRouter } from 'next/router';

export type Buttons = {
    text: string;
};

export type Props = {
  color: string;
  href: string;
}

export const Small_Button = ({text} :Buttons ) => {
  return (
    <button className='sm-btn'>{text}</button>
  )
}

export const BackButton = ({color, href} : Props) =>{
  return (
      <ArrowLeftCircleIcon color={color} width='45px' />
  );

}

export const Help = () =>{
  return (
    <QuestionMarkCircleIcon fill='#ccc' color='#fff' width='45px'/>
  )
}