import React from 'react';
import styles from './banner.module.css';
import Image from 'next/image';
import tortuga from '@/public/tortuga-marina.jpeg';
import logoPropPlayas from '@/public/proplayas_logo.svg';

export const Banner = () => {
  return (
    <div className={`${styles.bannerContainer}`}>

        <div className={`${styles.logoOver} md:flex-col lg:flex-row`}>
            <Image
                className={`${styles.logoImg}`}
                src={logoPropPlayas}
                alt='proplayasLogo'
            />
            <span className={`${styles.redProplayas}`}>Red Iberoamericana Proplayas</span>      
        </div>

        <Image
            className={`${styles.imagen} md:w-1/2 hidden md:block`}
            alt='tortuga'
            src={tortuga}
        />
    </div>
  )
}