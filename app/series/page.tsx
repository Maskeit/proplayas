'use client'
import styles from '@/app/homec/home.module.css';
import SideNav from '../components/sidenav';
import { Menu } from '@/app/components/buttons';
import { useState } from 'react';
import { Banner , Webinars} from '@/app/components/series/series-content';
import { Footer } from '../components/footer';

export default function Page() {

  const [isActive, setIsActive] = useState(false);
  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <main className={`flex min-h-screen flex-col p-0 ${styles.mainPage}`}>
      {/** SideBar */}
        <div className={styles.menu}>
          <Menu toggleSidebar={toggleSidebar} isActive={isActive}/>
        </div>
        <SideNav toggleSidebar={toggleSidebar} isActive={isActive}/>
      {/** SideBar */}

      <Banner />
      <Webinars />

      {/**<section>

      </section>


      <HomeBanner />
      <JoinUs />*/}
    </main>
  );
}
