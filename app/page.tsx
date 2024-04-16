import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css'
import { Small_Button } from './components/buttons';
import Image from 'next/image';
import { lusitana, opens, quicksand, montserrat } from './ui/fonts';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-0">

      <div className={styles.banner}>
          <Image
              src="/proplayas_logo.svg"
              width={360}
              height={360}
              className={`hidden md:block ${styles.logo}`}
              alt="Screenshots"/>
          <div className={styles.letter}>
            <p className={`${styles.titles} ${montserrat.className} antialiased`}>
              Colabora con la red de</p>
              <section className={`${styles.animation} ${montserrat.className}` }>
                <div className={styles.first}> <div>Alianza</div>  </div>
                <div className={styles.second}> <div>Ambiente</div> </div>
                <div className={styles.third}> <div>Proplayas</div> </div>
              </section>
            
            <Small_Button text="unirse"/>
          </div>
      </div>

    </main>
  );
}
