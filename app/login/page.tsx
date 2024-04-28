import { LoginForm } from '@/app/login/login';
import { Banner } from '@/app/login/banner';
import { BackButton, Help } from '../components/buttons';
import styles from '@/app/login/page.module.css';
import React from 'react';
export default function Page() {
    return (
    <div className={`flex flex-col md:grid md:grid-cols-2 ${styles.page}`}>
        <div className={`${styles.backbtn}`}>
            <BackButton color='#fff' href='/'/>
        </div>
        <div className="hidden md:block">
            <Banner/>
        </div>
            <LoginForm/>

        <div className={`${styles.questions}`}>
            <Help/>
        </div>
    </div>
    );
}

