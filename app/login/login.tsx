"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Este import es clave para que funcione en el directorio app
import styles from './login.module.css';
import { LockClosedIcon, AtSymbolIcon, ArrowRightOnRectangleIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { login } from '../lib/auth/auth';
import Loader from '../components/loader';

export const LoginForm = () => {
    const router = useRouter();
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    
    const [error, setError]  = useState("");
    const [alert, setAlert] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({...userData, [name]: value });
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        try {
            const response = await login(userData.email, userData.password);
            setLoading(false);
            triggerError("");
            router.push('/');
        } catch (error: any) {            
            triggerError(error.message);
            setLoading(false);
        }
    };
    const triggerError = (message: any) => {
        setError("");
        setTimeout(() => {
        setError(message);
        }, 100);
    };
    
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={`${styles.loginContainer}`}>
            <div className={styles.loginBox}>
                <h1 className={styles.loginTitle}>Inicia Sesión</h1>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="email">Correo electrónico</label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            placeholder=""
                            className={styles.inputField}
                            required
                            onChange={handleChange}
                        />
                        <div className={styles.icon}>
                            <AtSymbolIcon width='24px' />
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="password">
                            Contraseña
                            <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer', marginLeft: '10px' }}>
                                {showPassword ? <EyeSlashIcon width='24px' /> : <EyeIcon width='24px' />}
                            </span>
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            id='password'
                            className={styles.inputField}
                            required
                            onChange={handleChange}
                        />
                        <div className={styles.icon}>
                            <LockClosedIcon width='24px' />
                        </div>
                    </div>
                    <div className={styles.checkboxGroup}>
                        <input type="checkbox" id="rememberMe" className={styles.checkbox} />
                        <label htmlFor="rememberMe" className={styles.checkboxLabel}>Recordarme</label>
                    </div>
                    {error && <span className={styles.errorMessage}>{error}</span>}
                    {loading ? (<Loader />) :(
                        <button type="submit" className={styles.loginButton}>
                            Iniciar sesión
                            <ArrowRightOnRectangleIcon width='24px' />
                        </button>
                    )}
                    <Link href='/login/forgot' className={styles.forgotPassword}>Olvidé mi contraseña</Link>
                </form>
            </div>
        </div>
    );
};
