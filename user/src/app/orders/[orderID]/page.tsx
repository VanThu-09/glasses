"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
export default function OrderID() {
    return (
        <div className='flex flex-col mx-20'>
            <div>
                <div className='text-center mb-10 grid gap-4'>
                    <h1 className='text-4xl font-bold'>Payment Successful</h1>
                    <p className='text-gray-400'>Thanks for making a purchare you can check our order summary from below</p>
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
                        {/* <div className="cursor-pointer text-center text-xl font-bold border-4 bg-green-300 px-3 py-1 rounded-full">
                            Pay Now
                        </div> */}
                        <div className="cursor-pointer text-center text-xl font-bold border-4 bg-gray-300 px-3 py-1 rounded-full">
                            Paid
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
