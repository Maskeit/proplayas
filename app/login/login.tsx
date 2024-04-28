import React from 'react'
import styles from './login.module.css';
import { BackButton } from '@/app/components/buttons';
import {UserCircleIcon , LockClosedIcon } from '@heroicons/react/24/outline';
import {ArrowRightOnRectangleIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
export const LoginForm = ()=>{
  return (
    <div className={`${styles.loginContainer}`}>

        <div className={styles.loginBox}>
            <h1 className={styles.loginTitle}>Inicia Sesión</h1>
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
            <div className={styles.checkboxGroup}>
                <input type="checkbox" id="rememberMe" className={styles.checkbox} />
                <label htmlFor="rememberMe" className={styles.checkboxLabel}>Recordarme</label>
            </div>
            <button type="submit" className={styles.loginButton}>
                Iniciar sesión  
                <ArrowRightOnRectangleIcon color='#pink' width='24px' />
            </button>
            <Link href='/login/forgot' className={styles.forgotPassword}>
                Olvidé mi contraseña
            </Link>
            </form>
        </div>
    </div>
  )
}