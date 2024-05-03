import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="layout">
            {children}
            {/* Puedes añadir aquí componentes como Navbar o Footer */}
        </div>
    );
};

export default Layout;
