import { Inter } from "next/font/google";
import { Globe } from "lucide-react";
import Image from "next/image";
import Dashboard from "@/assets/Dashboard.png";

const InterMedium = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600']
});

export default function Hero() {
    return (
        <div className="relative flex flex-col">
            {/* Top Overlay */}
            <div className="h-[120px]"></div>
            
            <div className="relative flex justify-between pl-[110px] pr-0">
                {/* Description Container */}
                <div className="h-[420px] w-[624px]">
                    <h1 className="text-[black] text-[84px] font-medium flex flex-col leading-[1]">
                        <span>Revolutionized</span>
                        <span>Customer</span>
                        <span>Relationship</span>
                    </h1>
                    <div className="h-[24px] mt-[16px] text-[20px] text-[#727272] leading-[1.2]">
                        Streamline Operations, Boost Efficiency, and Drive Growth
                    </div>
                    {/* CTA */}
                    <div className="mt-[30px] h-[98px]">
                        {/* Buttons */}
                        <div className="h-[51px] w-[288px] flex gap-4">
                            <a href="/get-started" className="text-white text-base font-medium hover:bg-white hover:text-black transition-colors duration-300 bg-black border border-black h-[48px] w-[138px] flex items-center justify-center rounded-sm">Get Started</a>
                            <a href="/learn-more" className="text-black text-base font-medium hover:bg-black hover:text-white transition-colors duration-300 bg-white border border-black h-[48px] w-[138px] flex items-center justify-center rounded-sm">Learn More</a>
                        </div>
                        {/* SubText below buttons */}
                        <div className="h-[21px] w-[355px] text-[14px] mt-[20px] ml-[15px]">
                            <p className="flex items-center gap-1">
                                Used and helping over more <span className="font-bold"> 200+ Companies </span> <Globe className="w-4 h-4" />
                            </p>
                        </div>
                    </div>
                </div>
                {/* Dashboard Image - Enlarged and Positioned at the right corner */}
                <div className="absolute right-0 -top-[80px] h-[750px] flex justify-end w-auto z-10"> 
                    <Image 
                        src={Dashboard} 
                        alt="Dashboard Preview" 
                        width={900} 
                        height={750} 
                        className="object-contain"
                    />
                </div>
            </div>
            
            {/* Bottom Overlay */}
            <div className="h-[120px]"></div>
        </div>
    );
}
