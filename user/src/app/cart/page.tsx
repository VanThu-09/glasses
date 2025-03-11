"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Cart() {
    const [count, setCount] = useState(1);
    const pricePerItem = 360000;
    return (
        <div className='grid grid-cols-4 gap-4 mx-20'>
            <div className='col-span-3 border-8 border-red-50 rounded-md' style={{ height: "max-content" }}>
                <div className='grid grid-cols-3 p-1'>
                    <div className='col-span-2 flex gap-5'>
                        <img className='w-32 h-32' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt=''></img>
                        <div className='mt-5'>
                            <h1 className='font-bold'>GỌNG KÍNH BLANCY 1012 - C12</h1>
                            <div className='flex gap-2 mt-1'>
                                <h1 className='font-bold'>Màu sắc: </h1>
                                <p>Trắng</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div>
                            <div>
                                <div className='flex justify-center'>
                                    <div className="flex border rounded-lg w-32 justify-between">
                                        <button
                                            className="rounded-lg px-2 hover:bg-gray-300 text-xl disabled:opacity-50"
                                            onClick={() => setCount(count - 1)}
                                            disabled={count === 1}
                                        >
                                            －
                                        </button>
                                        <span className="text-lg font-semibold">{count}</span>
                                        <button
                                            className="rounded-lg px-2 hover:bg-gray-300 text-xl"
                                            onClick={() => setCount(count + 1)}
                                        >
                                            ＋
                                        </button>
                                    </div>
                                </div>
                                <div className='text-red-500 text-center mt-2 text-xl'>
                                    {(count * pricePerItem).toLocaleString()}đ
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <div className="btn bg-red-300">
                                Remove
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                    className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-1 shadow rounded-md'>
                <div className='lg:col-span-2 bg-red-50 rounded-lg w-full' style={{ height: "max-content" }}>
                    <div className='p-5'>
                        <div>
                            <h1 className='text-xl font-semibold border-b pb-3'>Order Summary</h1>
                        </div>
                        <div>
                            <h1 className='text-lg font-semibold pt-10 pb-3'>Shipping</h1>
                            <select
                                className="select select-info w-full max-w-xs"
                            >
                                <option disabled>Select method</option>
                                <option value={"standard"}>Standard shipping - 25.000đ</option>
                                <option value={"fast"}>Express delivery - 75.000đ</option>
                            </select>
                        </div>
                        <div className='mt-3 divide-y divide-slate-300'>
                            <div className='py-3 flex justify-between'>
                                <p>Subtotal</p>
                                <p>360.000đ</p>
                            </div>
                            <div className='py-3 flex justify-between'>
                                <p>Shipping</p>
                                <p>25.000đ</p>
                            </div>
                            <div className='py-3 flex justify-between'>
                                <p>Tax</p>
                                <p>10%</p>
                            </div>
                            <div className='py-3 flex justify-between'>
                                <p>Total</p>
                                <p>421.000đ</p>
                            </div>
                        </div>
                        <div className='justify-center flex w-full'>
                            <Link href={"/cart/checkout"} className="w-full">
                                <button type="submit" className="btn bg-rose-600 text-white w-full mt-5 text-nowrap">Check
                                    out
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}