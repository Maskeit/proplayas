"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Este import es clave para que funcione en el directorio app
import styles from './login.module.css';
import { LockClosedIcon, AtSymbolIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const LoginForm = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';  // fallback al entorno local
    
        try {
            const response = await fetch("http://localhost:8000/auth", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(userData)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json(); // Obtener el token de la respuesta
            console.log('Token:', data.token);
    
            // Guardar el token en localStorage o sessionStorage
            localStorage.setItem('token', data.token);
    
            // Redirigir al usuario a la página /home
            router.push('/home');
        } catch (error) {
            console.error('Error:', error);
            alert('Error al iniciar sesión, revisa tus credenciales.');
        }
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
                        <label className={styles.label} htmlFor="password">Contraseña</label>
                        <input
                            type="password"
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
    );
};
