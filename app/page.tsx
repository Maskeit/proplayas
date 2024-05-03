import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Small_Button } from './components/buttons';
import Image from 'next/image';
import { HomeContent, NodosCientificos, Banner } from './ui/homec/home-content';
import { lusitana, opens, quicksand, montserrat } from './ui/fonts';
import style from '@/app/ui/homec/page.module.css';

import { Menu } from './components/buttons';
export default function Page() {
  return (
    <main className={`flex min-h-screen flex-col p-0 ${style.mainPage}`}>
      <div className={style.menu}>
        <Menu/>
      </div>
      <Banner/>
      <HomeContent/>
      <NodosCientificos/> 
    </main>
  );
}
