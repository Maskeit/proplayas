import styles from '@/app/homec/home.module.css';
import { HomeContent, HomeBanner, HomeMenu } from '@/app/homec/home-content';

export default function Page() {
  return (
    <main className={`flex min-h-screen flex-col p-0 ${styles.mainPage}`}>
      <HomeMenu/>
      <HomeBanner/>
      <HomeContent/>
    </main>
  );
}
