'use client'
import styles from '@/app/homec/home.module.css';
import SideNav from './components/sidenav';
import { Menu } from '@/app/components/buttons';
import { useState } from 'react';
import { FullPageScroll } from './components/FullPageScroll';
import { HomeBanner, ProplayasInfo, Activities, ScientistNodes } from '@/app/homec/home-content';

export default function Page() {

  const [isActive, setIsActive] = useState(false);
  const toggleSidebar = () => {
    setIsActive(!isActive);
  };


  return (
    <main className={`flex min-h-screen flex-col p-0 ${styles.mainPage}`}>
      <div className={styles.menu}>
        <Menu toggleSidebar={toggleSidebar} isActive={isActive}/>
      </div>
      <SideNav toggleSidebar={toggleSidebar} isActive={isActive}/>
      <FullPageScroll>
              <HomeBanner />
              <ProplayasInfo />
              <Activities />
              <ScientistNodes />
    </FullPageScroll>
    </main>
  );
}
