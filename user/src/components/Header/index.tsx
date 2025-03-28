"use client"
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Kiểm tra xem token có trong localStorage không
        const token = localStorage.getItem("accessToken");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("accessToken"); // Xóa token
        setIsLoggedIn(false); // Cập nhật giao diện
    };

    const UserDropdown = () => {
        const [isOpen, setIsOpen] = useState(false);
        const menuRef = useRef(null);

        return (
            <ul className={`menu dropdown-content menu-sm bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow ${isOpen ? "block" : "hidden"}`}>
                <li><Link href="#">Profile</Link></li>
                <li><Link href={"/orders"}>Your Order</Link></li>
                <li><Link href="#">Settings</Link></li>
                {isLoggedIn ? (
                    <li><button onClick={handleLogout}>Logout</button></li>
                ) : (
                    <li><Link href={"/log/index.html"}>Login</Link></li>
                )}
            </ul>
        );
    };
    return (
        <div className='text-black  sticky shadow top-0 z-[50]' style={{ height: "max-content" }}>
            <div className="navbar bg-base-100 flex justify-between">
                <div className='flex gap-8'>
                    <Link href={"/"} className="grid justify-items-center">
                        <Image className='' src="https://kinhmateyeplus.com/wp-content/uploads/2024/10/Mark.svg" alt="" width={50} height={50} />
                        <h1 className="hover:text-rose-500 transition duration-300 font-semibold text-xl">GlassesVT</h1>
                    </Link>
                </div>
                <div>
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="flex">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <Link href="/cart">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm bg-red-500 rounded-full p-1 text-white indicator-item">1</span>
                                </div>
                            </Link>
                        </div>
                        <div ref={menuRef} className="dropdown dropdown-end relative">
                            <button className="btn btn-ghost btn-circle avatar" onClick={() => setIsOpen(!isOpen)}>
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="User Avatar"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    />
                                </div>
                            </button>
                            <ul className={`menu dropdown-content menu-sm bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow ${isOpen ? "block" : "hidden"}`}>
                                <li><Link href="/profile">Profile</Link></li>
                                <li><Link href={"/orders"}>Your Order</Link></li>
                                <li><Link href="#">Settings</Link></li>
                                {isLoggedIn ? (
                                    <li><button onClick={handleLogout}>Log Out</button></li>
                                ) : (
                                    <li><Link href={"/log/index.html"}>Log In</Link></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}