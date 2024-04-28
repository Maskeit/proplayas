import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { Small_Button } from './components/buttons';
import Image from 'next/image';
import { lusitana, opens, quicksand, montserrat } from './ui/fonts';

import { Menu } from './components/buttons';
export default function Page() {
  return (
    <main className={`flex min-h-screen flex-col p-0 ${styles.mainPage}`}>
      <div className={styles.menu}>
        <Menu/>
      </div>
      <div className={styles.banner}>
        <Image
          src="/proplayas_logo.svg"
          width={360}
          height={360}
          className={`hidden md:block ${styles.logo}`}
          alt="Screenshots"
        />

        <div className={styles.letter}>
          <p className={styles.titles}>Hola, somos</p>
          <section className={styles.animation}>
            <div className={styles.first}>
              <div>Ambiente</div>
            </div>
            <div className={styles.second}>
              <div>Sociales</div>
            </div>
            <div className={styles.third}>
              <div>Proplayas</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
