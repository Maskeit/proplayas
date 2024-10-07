'use client';
import { PostList } from '@/app/blog/components/PostList';
import SideNav from '@/app/components/sidenav';
import portada from '@/public/blog/playaBanner.jpg';
import styles from '@/app/blog/components/blog.module.css';
import Image from 'next/image';
import { Menu } from '@/app/components/buttons';
import { useEffect, useState } from 'react';
import { Small_Button } from '../components/buttons';

export default function Page() {
  const [isActive, setIsActive] = useState(false);
  const toggleSidebar = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={styles.blog}>
      <div className={styles.menu}>
        <Menu toggleSidebar={toggleSidebar} isActive={isActive}/>
      </div>
      <SideNav toggleSidebar={toggleSidebar} isActive={isActive}/>
      <section className={styles.banner}>
        <Image src={portada} alt="" className={styles.imgBanner} />
        <div className={styles.bannerContent}>
          <h2 className={styles.titlesBanner}>Mantente informado con el blog</h2>
          <Small_Button text="Unirse" />
        </div>
      </section>

      <section className={styles.content}>
        <PostList />
      </section>
    </div>
  );
}
