"use client"
import React, { useState } from 'react';
import styles from './register.module.css';
import { UserCircleIcon, LockClosedIcon, ArrowRightOnRectangleIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const RegisterForm = () => {
    const [userData, setUserData] = useState({
        email: '',
        roles: ['admin'],
        password: '',
        plainPassword: '',    
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (userData.password !== userData.plainPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }
        
        try {
            const response = await fetch('http://localhost:8000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/ld+json',
                    'Accept': 'application/ld+json'
                },
                body: JSON.stringify(userData)
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json(); // Obtener la respuesta
            console.log('Respuesta del servidor:', data);
            alert('Usuario creado exitosamente');
            // Redirigir o limpiar el formulario después de la creación exitosa del usuario
        } catch (error) {
            console.error('Error:', error);
            alert("Hubo un error al registrarse");
        }
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Alternar visibilidad de la contraseña
    };

    return (
        <div className={`${styles.loginContainer}`}>
            <div className={styles.loginBox}>
                <h1 className={styles.loginTitle}>Regístrate</h1>
                <form className={styles.loginForm} onSubmit={handleSubmit}> {/* Asegúrate de usar onSubmit en el formulario */}
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="email">Correo electrónico</label>
                        <input type="email" id='email' name='email' placeholder="" className={styles.inputField} required onChange={handleChange}/>
                        <div className={styles.icon}>
                            <UserCircleIcon width='24px'/>
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
                            <LockClosedIcon width='24px'/>
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="plainPassword">Repite tu contraseña</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='plainPassword'
                            id='plainPassword'
                            className={styles.inputField}
                            required
                            onChange={handleChange}
                        />
                        <div className={styles.icon}>
                            <LockClosedIcon width='24px'/>
                        </div>
                    </div>
                    <button type="submit" className={styles.loginButton}>
                        Registrarse
                        <ArrowRightOnRectangleIcon width='24px' />
                    </button>
                    <Link href='/login' className={styles.forgotPassword}>Ya tengo una cuenta</Link>
                </form>
            </div>
        </div>
    )
}
