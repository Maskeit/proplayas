'use client'
import styles from '@/app/components/webinars/webinars.module.css';
import SideNav from '../components/sidenav';
import { Menu } from '@/app/components/buttons';
import { useState } from 'react';
import { Banner , Webinars} from '@/app/components/webinars/webinars-content';
import { HomeBanner, ProplayasInfo, Activities, ScientistNodes, SocialNodes, BusinessNodes, Regulation, JoinUs} from '@/app/homec/home-content';
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
