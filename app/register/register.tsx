import React from 'react'
import styles from './register.module.css';
import { BackButton } from '@/app/components/buttons';
import {UserCircleIcon , LockClosedIcon } from '@heroicons/react/24/outline';
import {ArrowRightOnRectangleIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
export const RegisterForm = ()=>{
  return (
    <div className={`${styles.loginContainer}`}>
        <div className={styles.loginBox}>
            <h1 className={styles.loginTitle}>Registrate</h1>
            <form className={styles.loginForm}>
            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="email">Correo electrónico</label>
                <input type="email" id='email' name='email' placeholder="" className={styles.inputField} required />
                <div className={styles.icon}>
                    <UserCircleIcon width='24px'/>
                </div>
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="password">Contraseña</label>
                <input  type="password" name='password' id='password'  className={styles.inputField} required/>
                <div className={styles.icon}>
                    <LockClosedIcon width='24px'/>
                </div>
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="password">Repite tu contraseña</label>
                <input  type="password" name='password2' id='password2'  className={styles.inputField} required/>
                <div className={styles.icon}>
                    <LockClosedIcon width='24px'/>
                </div>
            </div>
            <button type="submit" className={styles.loginButton}>
                Registrarse
                <ArrowRightOnRectangleIcon width='24px' />
            </button>
            <Link href='/login' className={styles.forgotPassword}>
                Ya tengo una cuenta
            </Link>
            </form>
        </div>
    </div>
  )
}