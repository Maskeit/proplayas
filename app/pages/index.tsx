import React from 'react';
import Layout from '@/app/layout/Layout';
import AcmeLogo from '@/app/components/acme-logo';
import Button from '@/app/components/button';

const HomePage = () => {
  return (
    <Layout>
      <div className="home">
        <div className="banner">
          <img src="/images/beach.jpg" alt="Beach background" className="background-image" />
          <div className="content">
            <AcmeLogo />
            <h1>ProPlayas</h1>
            <Button label="Learn More" />  // Asegúrate de que Button acepte props correctamente
          </div>
        </div>
      </div>
      <style jsx>{`
         .home {
            position: relative;
            width: 100%;
            height: 300px;
            overflow: hidden;
          }
         .banner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
          }
         .background-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            z-index: -1;
          }
         .content {
            z-index: 1;
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
        `}</style>
    </Layout>
  );
};

export default HomePage;
