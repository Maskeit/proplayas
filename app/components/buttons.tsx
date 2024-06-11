import React, { useState } from 'react'
import styles from '@/app/components/buttons.module.css'
import {Bars3Icon, QuestionMarkCircleIcon, ArrowLeftCircleIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';

export type Buttons = {
    text: string;
};

export type Props = {
  color: string;
  href: string;
}

export const Small_Button = ({text} :Buttons ) => {
  return (
    <button className={styles.smBtn}>{text}</button>
  )
}

export const BackButton = ({ className, href } : { className: string, href: string }) => {
  return (
    <Link href={href}>
      <ArrowLeftCircleIcon className={className} width='45px' />
    </Link>
  );
};


export const Help = () =>{
  return (
    <QuestionMarkCircleIcon fill='#ccc' color='#fff' width='45px'/>
  )
}

export const Menu = ({toggleSidebar, isActive}) =>{
  if (isActive) return null; // No mostrar el botón si el sidebar está activo

  return(
    <div className={styles.menu}>
      <Bars3Icon onClick={toggleSidebar} fill='#000' color='#fff' width='60px'/>
    </div>
  )
}

export const CloseMenu = ({toggleSidebar}) =>{
  return(
    <button onClick={toggleSidebar} className={styles.closeMenu}>
      <ChevronLeftIcon width='35px' color='#000'/>
    </button>
  )
}