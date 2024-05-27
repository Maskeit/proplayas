'use client';
import { PostList } from '@/app/components/blog/PostList';
import portada from '@/public/blog/playaBanner.jpg';
import styles from '@/app/components/blog/blog.module.css';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import { Small_Button } from '../components/buttons';

export default function Page() {
  return (
    <div className={styles.blog}>
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
