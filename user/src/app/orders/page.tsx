"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
export default function Order() {
    const [filter, setFilter] = useState<string>("All singles")
    const [selected, setSelected] = useState<number | null>(null);
    const words = ['All single', 'Pending', 'Confirmed', 'Delivered', 'Completed', 'Cancelled', 'Refunded'];
    const handleClick = (value: string, index: number) => {
        setFilter(value)
        setSelected(index);
    };
    return (
        <div className='flex flex-col mx-20'>
            <form className="my-2 ">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm border-gray-300 rounded-md border  dark:focus:ring-gray-500 dark:focus:border-gray-500"
                        placeholder="Enter search name"
                        required
                    />
                </div>
            </form>
            <div>
                <div className='flex justify-around w-full border-b py-5 mb-8 bg-red-50 shadow'>
                    {words.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(item, index)}
                            className={`px-4 py-2 mb-2 ${selected === index ? 'border-b border-red-300' : ''}`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
            <div className='flex justify-around w-full border rounded-md py-5 bg-white shadow'>
                <div className='mx-8 my-3 bg-white rounded-md'>
                    <div
                        className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200 mt-4"
                    >
                        <div className="data">
                            <p className="font-semibold text-base leading-7 text-black">Order Id: <span
                                className="text-indigo-600 font-medium">HD-01</span></p>
                            <p className="font-semibold text-base leading-7 text-black mt-4">Order Payment : <span
                                className="text-gray-400 font-medium">Fri, 28 Feb 2025 14:31:00 GMT</span>
                            </p>
                        </div>
                    </div>
                    <div className='border-b p-8 gap-2 grid grid-cols-12'>
                        <div className='col-span-2'>
                            <img className='w-32 h-32 border' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt=''></img>
                        </div>
                        <div className='col-span-5' style={{ width: 'max-content', height: 'max-content' }}>
                            <h1 className='font-bold'>GỌNG KÍNH BLANCY 1012 - C12</h1>
                            <div className='flex gap-1 mt-1'>
                                <h1 className='font-bold'>Màu sắc: </h1>
                                <p>Trắng</p>
                            </div>
                        </div>
                        <div className='col-span-2 flex gap-8'>
                            <div>
                                <p>Price</p>
                                <p className='text-indigo-500 mt-6'>360.000đ</p>
                            </div>
                            <div>
                                <p>Status</p>
                                <p className='text-green-500 bg-slate-100 rounded-full mt-5 py-1 px-2'
                                >Cancelled</p>
                            </div>
                        </div>
                        <div className='col-span-3 ms-24'>
                            <div>
                                <p>Expected Delivery Time</p>
                                <p className='text-green-500 mt-6'>
                                    Fri Feb 28 2025
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='p-8 flex justify-between'>
                        <p className='font-semibold'>Payment method: <span
                            className='text-slate-400'>VNPAY</span></p>
                        <p className='font-semibold'>Shipping Type: <span className='text-blue-500'>
                            standard
                        </span></p>
                        <p className='font-semibold'>Shipping: <span className='text-blue-500'>
                            25.000đ
                        </span></p>

                        <p className='font-semibold'>Total price:
                            <span className='text-blue-500'>
                                390.000đ
                            </span><span className='text-red-500'>(+10% tax)</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
