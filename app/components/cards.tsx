import React from 'react';
import Image from 'next/image';
import styles from '@/app/components/card.module.css';

export type Card = {
  text: string;
  img: string;
  title: string;
  altext: string;
};

export const Card = ({ img, altext, title, text }:Card) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden`}>
        <div className={`relative`}>
            <Image className={`w-full h-32 object-cover`} src={img} alt={altext}/>
        </div>
        <div className={`p-8`}>
            <div className={`text-lg font-medium text-gray-900 mb-2`}>{title}</div>
            <p className={`text-gray-800 text-sm`}>{text}</p>
        </div>
    </div>
  );
};

