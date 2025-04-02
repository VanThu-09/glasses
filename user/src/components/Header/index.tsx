"use client"
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useCartStore from '@/app/store/cartStore';
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cartNum, setCartNum] = useState(0);   
    const {setCartItemNum, cart: {cartItemNum}} = useCartStore()
    useEffect(() => {
        const checkLoginStatus = () => {
            const token = localStorage.getItem("accessToken");
            setIsLoggedIn(!!token); // Nếu có token -> true, không có -> false
        };

        checkLoginStatus(); // Kiểm tra ngay khi component render
        window.addEventListener("storage", checkLoginStatus); // Nghe sự kiện thay đổi localStorage

        return () => window.removeEventListener("storage", checkLoginStatus);
    }, []);
    const getItemNum = async () => {
        try {
            const user = JSON.parse(localStorage.getItem("user") || "{}");
            const userId = user.id;
            const response = await fetch(`http://localhost:8000/api/cart/get/${userId}`);
            const data = await response.json();
            if (response.ok) {
                const updatedCart = data.data

                setCartItemNum(updatedCart.length)
            } else {
                throw new Error(data.message);
            }
        } catch (err: Error | any) {
            console.log("Error header", err)
        }
    };
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        window.dispatchEvent(new Event("storage")); // Cập nhật trạng thái đăng nhập
    };

    useEffect(() => {
        getItemNum()
    }, []);
    return (
        <div className='text-black  sticky shadow top-0 z-[50]' style={{ height: "max-content" }}>
            <div className="navbar bg-base-100 flex justify-between p-4">
                <div className='flex gap-8'>
                    <Link href={"/"} className="grid justify-items-center">
                        <Image className='' src="https://kinhmateyeplus.com/wp-content/uploads/2024/10/Mark.svg" alt="" width={50} height={50} />
                        <h1 className="hover:text-rose-500 transition duration-300 font-bold text-xl ">GlassesVT</h1>
                    </Link>
                </div>
                {isLoggedIn ?<div className='flex gap-5'>
                    <button>
                        <svg className='w-6 h-6 text-center' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
                    </button>
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
                                    <span className="badge badge-sm bg-red-500 rounded-full p-1 text-white indicator-item">{cartItemNum}</span>
                                </div>
                            </Link>
                        </div>
                        <div ref={menuRef} className="dropdown dropdown-end relative">
                            <button className="btn btn-ghost btn-circle avatar" onClick={() => setIsOpen(!isOpen)}>
                                <div className="">
                                    <svg className='w-6 h-6 text-center' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path></svg>
                                </div>
                            </button>
                            <ul className={`menu dropdown-content menu-sm bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow ${isOpen ? "block" : "hidden"}`}>
                                <li><Link href="/profile">Profile</Link></li>
                                <li><Link href="/orders">Your Order</Link></li>
                                <li><button onClick={handleLogout}>Log Out</button></li>
                            </ul>
                        </div>
                    </div>
                </div> : <button className='bg-red-200 p-3 rounded-lg text-sm font-medium' ><Link href="/log/index.html">Log In</Link></button>}
            </div>
        </div>
    )
}