import Link from 'next/link';
import '../components/sidenav.css'
import NavLinks from '@/app/components/nav-links';
import Proplayas, { ProplayasSidebar } from '@/app/components/proplayas-logo';
import { PowerIcon, ArrowLeftIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { CloseMenu } from './buttons'; 


export default function SideNav({toggleSidebar, isActive}) {
  const sidebarClass = `sidenav ${isActive ? 'active' : ''}`;
  return (
    <aside className={sidebarClass}>
      <div className={`flex h-full flex-col px-3 py-4 md:px-2 `} >
        <div className=' mb-2 h-10 items-center flex justify-between bg-white rounded-md p-4 md:h-20'>

        <Link
          href="/">
          <div className="flex w-32 gap-9 md:w-40 ">
            <ProplayasSidebar />
          </div>
        </Link>
        <CloseMenu toggleSidebar={toggleSidebar}/>
        </div>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md  md:block"></div>
          <form>
            <Link href="/login">
            <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <PowerIcon className="w-6"/>
                <p>Iniciar sesion</p>
            </button>
            </Link>
          </form>
        </div>
      </div>
    </aside>
  );
}

export  const SideNavDash = ({toggleSidebar, isActive}) => {
  const sidebarClass = `sidenav ${isActive ? 'active' : ''}`;
  return (
    <aside className={sidebarClass}>
      <div className={`flex h-full flex-col px-3 py-4 md:px-2 `} >
        <div className=' mb-2 h-10 items-center flex justify-between bg-white rounded-md p-4 md:h-20'>

        <Link
          href="/">
          <div className="flex w-32 gap-9 md:w-40 ">
            <ProplayasSidebar />
          </div>
        </Link>
        <CloseMenu toggleSidebar={toggleSidebar}/>
        </div>

        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-white md:block"></div>
          <form>
            <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <PowerIcon className="w-6" />
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
}

