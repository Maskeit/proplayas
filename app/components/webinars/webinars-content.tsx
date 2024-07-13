import React from 'react';
import Image from 'next/image';
import placeholder from '@/public/home/placeholder.webp'
import styles from './webinars.module.css'
import logo from '@/public/proplayas_logo.svg'
import background from '@/public/home/portada-playa.jpg'
import { lusitana, opens, quicksand, montserrat } from '@/app/ui/fonts';
import { Titlesh1 } from '../../components/titles';
import { Card } from '../../components/webinars/webinars-cards';
import { Modal } from '../../components/webinars/modal';


export const Banner = () => {
    return(
        <div className={`${styles.area} ${styles.centerContent} mb-0`}>
            <p className={`text-white object-center text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest font-bold`}>WEBINARS</p>
			<ul className={`${styles.circles}`}>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
    );
}

export const Webinars = () => {
    return (
        <section>
            <article className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 sm:p-6 md:p-8 lg:p-12`}>
            <Card
                img={placeholder}
                altext='Portada del Webinar'
                title="Titulo del Webinar"
                person="Webinar Owner"
                date="July 12"
                hour="15:30"
                platform="Zoom"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Morbi nec purus ullamcorper, eleifend dui in, aliquet libero. 
                                Nam urna neque, hendrerit vel risus quis, feugiat mollis leo. 
                                Proin vel congue est."
                />

            <Card
                img={placeholder}
                altext='Portada del Webinar'
                title="Titulo del Webinar"
                person="Webinar Owner"
                date="July 12"
                hour="15:30"
                platform="Zoom"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Morbi nec purus ullamcorper, eleifend dui in, aliquet libero. 
                                Nam urna neque, hendrerit vel risus quis, feugiat mollis leo. 
                                Proin vel congue est."
                />

            <Card
                img={placeholder}
                altext='Portada del Webinar'
                title="Titulo del Webinar"
                person="Webinar Owner"
                date="July 12"
                hour="15:30"
                platform="Zoom"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Morbi nec purus ullamcorper, eleifend dui in, aliquet libero. 
                                Nam urna neque, hendrerit vel risus quis, feugiat mollis leo. 
                                Proin vel congue est."
                />
            </article>
        </section>
    );
}