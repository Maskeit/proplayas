import React, { useState } from 'react'
import '@/app/components/buttons.component.css'
import {Bars3Icon, QuestionMarkCircleIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { link } from 'fs';

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
    <Link href={href}>
      <ArrowLeftCircleIcon color={color} width='45px' />
    </Link>
  );

}

export const Help = () =>{
  return (
    <QuestionMarkCircleIcon fill='#ccc' color='#fff' width='45px'/>
  )
}

export const Menu = () =>{
  return(
    <Bars3Icon fill='#000' color='#fff' width='60px'/>
  )
}