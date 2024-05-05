'use client'
import styles from '@/app/homec/home.module.css';
import { HomeContent, HomeBanner } from '@/app/homec/home-content';
import SideNav from './components/sidenav';
import { Menu } from '@/app/components/buttons';
import { useState } from 'react';


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
      <HomeBanner/>
      <HomeContent/>
    </main>
  );
}
