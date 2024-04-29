import { RegisterForm } from '@/app/register/register';
import { Banner } from '@/app/register/banner';
import { BackButton, Help } from '../components/buttons';
import styles from '@/app/register/page.module.css';
import React from 'react';
export default function Page() {
  return (
    <div className={`flex flex-col md:grid md:grid-cols-2 ${styles.page}`}>
      <div className={`${styles.backbtn}`}>
        <BackButton className="text-black md:text-white" href="/" />
      </div>
      <div className="hidden md:block">
        <Banner />
      </div>
      <RegisterForm />

      <div className={`${styles.questions}`}>
        <Help />
      </div>
    </div>
  );
}
