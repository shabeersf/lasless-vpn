"use client"
import Image from "next/image"
import Link from "next/link"
import { AlignRight, X } from 'lucide-react';
import { useState } from "react";
const navUrls = [
    {
        label: "Features",
        url: "#features",
    },
    {
        label: "Pricing",
        url: "#pricing",
    },
    {
        label: "Testimonials",
        url: "#testimonials",
    },
    {
        label: "Help",
        url: "#help",
    },
]

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
    return (
        <div className="w-full max-w-[1440px] mx-auto px-4 py-4 md:py-8 relative">
            <div className="flex items-center gap-2 justify-between text- lg:text-base text-grayColor">
                <Link href="/">
                    <Image src="./Laslogo.svg" alt="logo" width={100} height={100} />
                </Link>
                <ul className="md:flex items-center lg:gap-4 gap-3 hidden ">
                    {
                        navUrls.map((links) => (
                            <li key={links.label} className="hover:text-primary" >
                                <Link href={links.url}>{links.label}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="md:flex items-center gap-3 text-sm lg:text-base hidden">
                    <button className=" text-grayColor ">
                        Sign In
                    </button>
                    <button className=" border-2 hover:border-white hover:bg-primary hover:text-white  border-primary py-1 rounded-full px-2.5">
                        Sign up
                    </button>
                </div>
                <div className="hidden max-md:block cursor-pointer" onClick={() => setOpenNav(true)}>
                    <AlignRight size={20} />
                </div>
            </div>
            <div className={`w-72 z-50 h-screen bg-white border-r border-slate-200 duration-300 fixed top-0 ${openNav ? "left-0" : "-left-72"}`}>
                <div className=" w-full flex items-center justify-between p-4">
                    <Link href="/">
                        <Image src="./Laslogo.svg" alt="logo" width={100} height={100} />
                    </Link>
                    <div className="hidden max-md:block cursor-pointer" onClick={() => setOpenNav(false)}>
                        <X size={20} />
                    </div>
                </div>
                <ul className="mt-3 flex flex-col justify-center items-center gap-4">
                {
                        navUrls.map((links) => (
                            <li onClick={() => setOpenNav(false)} key={links.label} className="hover:text-primary font-semibold" >
                                <Link href={links.url}>{links.label}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default Navbar