import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { opens } from '@/app/ui/fonts';
import logo from '@/public/proplayas_logo.svg'
import Image from 'next/image';


export default function ProplayasLogo() {
  return (
    <div className={`${opens.className} flex flex-row items-center justify-around leading-none text-white`}>
      <Image src={logo} width={60} alt='Logo_proplayas'/>
      <p className="text-[30px] ml-2">Proplayas</p>
    </div>
  );
}

export const ProplayasSidebar = () =>{
  return(
    <div className={`${opens.className} flex flex-row items-center justify-between gap-4 leading-none text-black`}>
      <Image src={logo} width={60} alt='Logo_proplayas'/>
      <p className="text-[20px] ">Proplayas</p>
    </div>
  )
}
