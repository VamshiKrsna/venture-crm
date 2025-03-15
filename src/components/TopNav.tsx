import Image from 'next/image';
import LogoFull from '@/assets/logoFull.svg';

export default function TopNav(){
    return(
        <div>
            <Image src={LogoFull} alt="Logo" width={115} height={28} />
        </div>
    );
}