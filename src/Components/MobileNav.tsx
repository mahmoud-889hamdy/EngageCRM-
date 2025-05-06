"use client"

import { navLinks } from "@/Constants/Nav-links"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"


const MobileNav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const togglMenu = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
        
        <div onClick={togglMenu} className="flex md:hidden cursor-pointer md:cursor-none">
            {!isOpen?(
                <Menu/>
            ):(<X></X>)}
        </div>
        <figure className={`absolute rounded-md right-2 origin-top ${isOpen?'top-20 scale-y-100 opacity-100 visible' :'scale-y-50 opacity-0 hidden'}  w-auto bg-slate-800 p-2 transition-all z-50"`}>
            <nav className="w-full h-full flex flex-col space-y-2 capitalize font-normal tracking-wide">
                {navLinks.map((link,index)=>(
                    
                    <Link key={index} href={`#${link}`} className="py-1  px-2 transition-all rounded-md hover:bg-slate-700  hover:text-sky-400" onClick={togglMenu}>{link}</Link>
                ))}
            </nav>
        </figure>
        
        </>
    )
}

export default MobileNav