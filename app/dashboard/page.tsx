'use client'
import SideNav from '@/app/components/sidenav';
import { useState } from 'react';
import { Menu } from '@/app/components/buttons';
import { TabButtons } from './components/Botones';
import { Formulario } from './components/Formulario';
import { Table } from './components/Table';
import { tabConfig, ContentType } from '../lib/types';

export default function Page() {
    const [isActive, setIsActive] = useState(true);
    const [activeTab, setActiveTab] = useState<ContentType>('Publicaciones');

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    const handleTabChange = (tab: ContentType) => setActiveTab(tab);

    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <Menu toggleSidebar={toggleSidebar} isActive={isActive} />
                <SideNav toggleSidebar={toggleSidebar} isActive={isActive} />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                <TabButtons onChange={handleTabChange} />
                <Formulario publicationType={activeTab} />
                <Table columns={tabConfig[activeTab].columns} data={tabConfig[activeTab].data} />
            </div>
        </div>
    );
}
