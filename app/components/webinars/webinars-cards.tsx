import React, {useState} from 'react';
import Image from 'next/image';
import { Modal } from './modal';
import styles from '@/app/components/webinars/webinars.module.css';

export type CardProps = {
    img: string;
    altext: string;
    title: string;
    person: string;
    date: string;
    hour: string;
    platform: string;
    description: string;
};

export const Card: React.FC<CardProps> = ({ img, altext, title, person, date, hour, platform, description }) => {
    const [showModal, setShowModal] = useState(false);
    
    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <>
        <div className={`relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-auto h-5/6`}>
            <div className={`relative h-1/3 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 flex items-center justify-center`}>
                <Image className={`object-center object-cover`} src={img} alt={altext} />
            </div>
            
            <div className={`p-6`}>
                <h5 className={`block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900`}>
                    {title}
                </h5>
                
                <p className={`block font-sans text-sm antialiased font-medium leading-snug tracking-normal text-blue-gray-700`}>
                    Organizado por: {person}
                </p>
                <p className={`block font-sans text-sm antialiased font-medium leading-snug tracking-normal text-blue-gray-700`}>
                    Fecha: {date}
                </p>
                <p className={`block font-sans text-sm antialiased font-medium leading-snug tracking-normal text-blue-gray-700`}>
                    Hora: {hour}
                </p>
                <p className={`block font-sans text-sm antialiased font-medium leading-snug tracking-normal text-blue-gray-700`}>
                    Plataforma: {platform}
                </p>
                <p className={`block font-sans text-base antialiased font-light leading-relaxed text-inherit mt-4`}>
                    {description}
                </p>
            </div>

            <div className={`p-6 pt-0`}>
                <button
                    className={`align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none 
                    disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 
                    focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
                    type="button"
                    onClick={handleOpenModal}
                >
                    Inscribirse al Webinar
                </button>
                </div>
            </div>
            
            <Modal showModal={showModal} onClose={handleCloseModal} />
        </>
    );
};

