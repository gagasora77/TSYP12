"use client";
import styles from '@/app/index';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { DLMode } from '@/components'
import { FaGithub } from "react-icons/fa";
import Logo from '@/public/Logo.png';

const Navbar = () => {
    const currentRoute = usePathname();
    console.log(currentRoute);

    return (
        <div className={styles.navContainer}>
            <div className={`${styles.innerWidth} text-exo2 mx-auto px-12 py-2 flex justify-between items-center select-none`}>
                <div>
                    <Link href="/" className={styles.navLogo}>
                        <Image src={Logo} alt="Logo" width={140} height={140} className="flex justify-center object-contain z-10 hover:scale-105 hover:drop-shadow-nav-logo-select-shadow" />
                    </Link>
                </div>
                <div className="flex gap-8">
                    <Link href="/" className={`${styles.navText} ${currentRoute === "/" ? "text-transparent bg-clip-text bg-selected-nav font-semibold after:content-[\'\'] after:bg-gradient-to-r from-dark-blue to-[#00539C] after:h-[2px] after:w-[100%] after:left-0 after:absolute after:bottom-[3px] before:content-[\'\'] before:bg-gradient-to-l from-dark-blue to-[#00539C] before:h-[2px] before:w-[100%] before:right-0 before:absolute before:-top-[3px]" : "text-secondary-black"} relative nav-link `}>
                        Home
                    </Link>
                    <Link href="/location" className={`${styles.navText} ${currentRoute === "/location" ? "text-transparent bg-clip-text bg-selected-nav font-semibold after:content-[\'\'] after:bg-gradient-to-r from-dark-blue to-[#00539C] after:h-[2px] after:w-[100%] after:left-0 after:absolute after:bottom-[3px] before:content-[\'\'] before:bg-gradient-to-l from-dark-blue to-[#00539C] before:h-[2px] before:w-[100%] before:right-0 before:absolute before:-top-[3px]" : ""} relative group`}>
                        Location
                    </Link>
                    <Link href="/program" className={`${styles.navText} ${currentRoute === "/program" ? "text-transparent bg-clip-text bg-selected-nav font-semibold after:content-[\'\'] after:bg-gradient-to-r from-dark-blue to-[#00539C] after:h-[2px] after:w-[100%] after:left-0 after:absolute after:bottom-[3px] before:content-[\'\'] before:bg-gradient-to-l from-dark-blue to-[#00539C] before:h-[2px] before:w-[100%] before:right-0 before:absolute before:-top-[3px]" : ""} relative group`}>
                        Program
                    </Link>
                    <Link href="/partners" className={`${styles.navText} ${currentRoute === "/partners" ? "text-transparent bg-clip-text bg-selected-nav font-semibold after:content-[\'\'] after:bg-gradient-to-r from-dark-blue to-[#00539C] after:h-[2px] after:w-[100%] after:left-0 after:absolute after:bottom-[3px] before:content-[\'\'] before:bg-gradient-to-l from-dark-blue to-[#00539C] before:h-[2px] before:w-[100%] before:right-0 before:absolute before:-top-[3px]" : ""} relative group`}>
                        Partners
                    </Link>
                    <Link href="/about" className={`${styles.navText} ${currentRoute === "/about" ? "text-transparent bg-clip-text bg-selected-nav font-semibold after:content-[\'\'] after:bg-gradient-to-r from-dark-blue to-[#00539C] after:h-[2px] after:w-[100%] after:left-0 after:absolute after:bottom-[3px] before:content-[\'\'] before:bg-gradient-to-l from-dark-blue to-[#00539C] before:h-[2px] before:w-[100%] before:right-0 before:absolute before:-top-[3px]" : ""} relative group`}>
                        About Us
                    </Link>
                    <Link href="/virtual" className={`${styles.navText} ${currentRoute === "/virtual" ? "text-transparent bg-clip-text bg-selected-nav font-semibold after:content-[\'\'] after:bg-gradient-to-r from-dark-blue to-[#00539C] after:h-[2px] after:w-[100%] after:left-0 after:absolute after:bottom-[3px] before:content-[\'\'] before:bg-gradient-to-l from-dark-blue to-[#00539C] before:h-[2px] before:w-[100%] before:right-0 before:absolute before:-top-[3px]" : ""} relative group`}>
                        Virtual TSYP
                    </Link>
                    <Link href="/faq" className={`${styles.navText} ${currentRoute === "/faq" ? "text-transparent bg-clip-text bg-selected-nav font-semibold after:content-[\'\'] after:bg-gradient-to-r from-dark-blue to-[#00539C] after:h-[2px] after:w-[100%] after:left-0 after:absolute after:bottom-[3px] before:content-[\'\'] before:bg-gradient-to-l from-dark-blue to-[#00539C] before:h-[2px] before:w-[100%] before:right-0 before:absolute before:-top-[3px]" : ""} relative group`}>
                        FAQ
                    </Link>
                    <a href="/https://github.com/gagasora77?tab=repositories">
                        <button>
                            <FaGithub className={styles.navIcon} style={{ fill: '#00539C' }} />
                        </button>
                    </a>
                    <DLMode />
                    <Link href="/contact" className={`${currentRoute === "/contact" ? "text-nav-select-color after:content-[\'\'] after:bg-gradient-to-r from-nav-select-color to-transparent after:h-[2px] after:w-[30%] after:left-0 after:absolute after:-bottom-[10px] before:content-[\'\'] before:bg-gradient-to-l from-nav-select-color to-transparent before:h-[2px] before:w-[30%] before:right-0 before:absolute before:-top-[5px]" : ""} relative group`}>
                        <button className={styles.navButton}>
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Navbar;