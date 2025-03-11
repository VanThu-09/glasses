"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

export default function Footer() {
    return (
        <div className=" md:block text-black  bg-gray-100 mt-44 bottom-0 left-0 right-0">
            <footer className="relative foote text-base-content flex justify-center gap-40 p-10 pt-20 pb-0 px-28">
                <div className='relative group w-72'>
                    <Image className='absolute object-cover bottom-0' src={"/map.png"} alt="" width={300} height={100}></Image>
                    <Link target="_blank" rel="noopener noreferrer" href={"https://www.google.com/maps/"} style={{ width: "max-content", height: "max-content" }} className='ms-16 px-10 py-5 flex absolute inset-0 bg-red-500 bg-opacity-80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <button className="" >
                            Tìm tao
                        </button>
                        <svg className='h-8 w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                    </Link>
                </div>
                <nav className='mb-12 flex flex-col'>
                    <Image className='' src="https://kinhmateyeplus.com/wp-content/uploads/2024/10/Mark.svg" alt="" width={70} height={70} />
                    <h6 className="font-semibold mt-4 text-lg">Services</h6>
                    <a className="link hover:text-rose-500 transition duration-300 hover:no-underline link-hover">Branding</a>
                    <a className="link hover:text-rose-500 transition duration-300 hover:no-underline link-hover">Design</a>
                    <a className="link hover:text-rose-500 transition duration-300 hover:no-underline link-hover">Marketing</a>
                    <a className="link hover:text-rose-500 transition duration-300 hover:no-underline link-hover">Advertisement</a>
                </nav>
                <nav className='flex flex-col'>
                    <h6 className="font-semibold text-lg">Company</h6>
                    <a className="link hover:text-rose-500 transition duration-300 hover:no-underline link-hover">About us</a>
                    <a className="link hover:text-rose-500 transition duration-300 hover:no-underline link-hover">Contact</a>
                    <a className="link hover:text-rose-500 transition duration-300 hover:no-underline link-hover">Jobs</a>
                    <a className="link hover:text-rose-500 transition duration-300 hover:no-underline link-hover">Press kit</a>
                </nav>
                <nav className='flex flex-col'>
                    <h6 className="font-semibold text-lg">Legal</h6>
                    <a className="link hover:text-rose-500 transition duration-300 hover:no-underline link-hover">Terms of use</a>
                    <a className="link hover:text-rose-500 transition duration-300 hover:no-underline link-hover">Privacy policy</a>
                    <a className="link hover:text-rose-500 transition duration-300 hover:no-underline link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className=" footer border-gray-300 border-t grid justify-items-center px-10 py-4">
                <div className='px-16 flex justify-between gap-10'>
                    <Link href={"#"} className='hover:text-rose-500 font-bold text-lg transition duration-300'>Hotline: 1900 2222</Link>
                    <aside className="grid-flow-col flex gap-3 items-center">
                        <p>
                            ACME Industries Ltd.
                            <br />
                            Providing reliable tech since 1992
                        </p>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <Link href={"#"} className="fill-current transition-transform duration-300 hover:-translate-y-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </Link>
                            <Link href={"#"} className="fill-current transition-transform duration-300 hover:-translate-y-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                                </svg>
                            </Link>
                            <Link href={"#"} className="fill-current transition-transform duration-300 hover:-translate-y-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </Link>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    )
}