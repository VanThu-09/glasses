"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
    return (
        <div className="navbar bg-white top-0 shadow-sm fixed z-30 ">
            <div className=''>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0} 
                        className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href={"/dashboard/profile"}>Profle</Link></li>
                        <li><Link href={"#"}>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}