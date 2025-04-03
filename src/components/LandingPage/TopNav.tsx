import Image from 'next/image';
import LogoFull from '@/assets/logoFull.svg';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const InterMedium = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600']
});

export default function TopNav(){
    return(
        <div className="flex justify-center w-full bg-white">
            <div className='w-[1850px] h-[85px] px-20 flex justify-between items-center'>
                {/* // Clickable Logo that redirects to homepage */}
                <Link href="/">
                    <Image src={LogoFull} alt="Logo" className="w-30 h-9 cursor-pointer" />
                </Link>
                
                {/* // Navbar with contents */}
                <nav className="flex gap-10 pt-1.5">
                    <a href="/about" className="text-[#344054] text-base font-medium hover:text-gray-900">About</a>
                    <a href="/features" className="text-[#344054] text-base font-medium hover:text-gray-900">Features</a>
                    <a href="/pricing" className="text-[#344054] text-base font-medium hover:text-gray-900">Pricing</a>
                    <a href="/blog" className="text-[#344054] text-base font-medium hover:text-gray-900">Blog</a>
                </nav>

                {/* // Login and get started buttons */}
                <div className="flex gap-4 items-center pt-1.5">
                    <a href="/login" className="text-[#344054] text-base font-medium hover:text-gray-900">Log in</a>
                    <a href="/get-started" className="text-white text-base font-medium hover:bg-white hover:text-black transition-colors duration-300 bg-black border border-black h-[48px] w-[138px] flex items-center justify-center rounded-sm">Get Started</a>
                </div>
            </div>
        </div>
    );
}