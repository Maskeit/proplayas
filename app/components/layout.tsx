'use client';
import SideNav from './sidenav';
import { Footer } from './footer';
import { useState } from 'react';
import { Menu } from './buttons';

export default function Layout({ children }) {
  const [isActive, setIsActive] = useState(false);
  const toggleSidebar = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <Menu toggleSidebar={toggleSidebar} isActive={isActive} />
      <SideNav toggleSidebar={toggleSidebar} isActive={isActive} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
