"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './register.module.css';
import { UserCircleIcon, LockClosedIcon, ArrowRightOnRectangleIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { register } from '@/app/lib/auth/auth'
import Loader from '../components/loader';

export const RegisterForm = () => {
    const router = useRouter();
    const [userData, setUserData] = useState({
        email: '',
        roles: ['ROLE_USER'],
        password: '',
        plainPassword: '',
    });

    const [error, setError]  = useState("");
    const [alert, setAlert] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };
    const validatePassword = (password: string) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (userData.password !== userData.plainPassword) {
            triggerError('Las contraseñas no coinciden.');
            return;
        }

        if (!validatePassword(userData.password)) {
            triggerError('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.');
            return;
        }

        setLoading(true);
        try {
            const response = await register(userData);
            setLoading(false);
            //router.push('/login');
        } catch (error) {
            triggerError('No se pudo completar el registro, intente más tarde.');
            setLoading(false);
        }
    };
          
    const triggerError = (message: any) => {
        setError("");
        setTimeout(() => {
        setError(message);
        }, 100);
    };

    const [showPassword, setShowPassword] = useState(false); // Estado para alternar visibilidad de la contraseña

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Alternar visibilidad de la contraseña
    };

    return (
        <div className={`${styles.loginContainer}`}>
            <div className={styles.loginBox}>
                <h1 className={styles.loginTitle}>Regístrate</h1>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
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
                        {error && <span className={styles.errorMessage}>{error}</span>}
                        {loading ? (
                            <Loader />) : (
                            <button type="submit" className={styles.loginButton}>
                                Registrarse
                                <ArrowRightOnRectangleIcon width='24px' />
                            </button>
                        )}
                        <Link href='/login' className={styles.forgotPassword}>Ya tengo una cuenta</Link>
                </form>
            </div>
        </div>
    )
}
