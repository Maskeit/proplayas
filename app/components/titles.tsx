import React from 'react';
import styles from '@/app/components/titles.module.css';

export type Titlesh1 = {
  text: string;
};
export type Titlesh2 = {
  text: string;
};
export type Parrafos = {
  text: string;
};

export const Titlesh1 = ({ text }: Titlesh1) => {
  return <h1 className={`${styles.th1}`}>{text}</h1>;
};

export const Titlesh2 = ({ text }: Titlesh2) => {
  return <h2 className={styles.th2}>{text}</h2>;
};

export const Parrafos = ({ text }: Parrafos) => {
  return <p className={styles.parrafo}>{text}</p>;
};
