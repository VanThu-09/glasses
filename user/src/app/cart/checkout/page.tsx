"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
export default function Checkout() {
    const handleCreateOrder = async () => {
        toString();
    }
    return (
        <div className='mx-20 my-10 md:mx-8 md:my-10 lg:mx-60 lg:my-16'>
            <div className='shadow rounded-lg bg-white'>
                <div className='p-10'>
                    <p className='text-2xl text-center font-bold'>Checkout</p>
                    <div className=' bg-white p-2 py-10 rounded-lg'>
                        <div className='grid grid-cols-3 p-1 border-2 rounded-md border-red-50'>
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
                            <div className='col-span-1 grid mt-5'>
                                <div className='flex gap-2 justify-center mt-1'>
                                    <h1 className='font-bold'>Số lượng: </h1>
                                    <p>1</p>
                                </div>
                                <div className='text-red-500 text-center mt-2 text-xl'>360.000đ</div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 mt-8'>
                        <div className='col-span-1 grid'>
                            <div>
                                <p className='font-bold'>01<br />Personal Details</p>
                            </div>
                            <div className='mt-36 md:mt-24'>
                                <p className='font-bold'>02<br />Shopping Address</p>
                            </div>
                            <div className='mt-36 md:mt-24'>
                                <p className='font-bold'>03<br />Payment Method</p>
                            </div>
                            <div className='mt-24'>
                                <p className='font-bold'>04<br />Note</p>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='col-span-1'>
                                        <input
                                            type="text"
                                            placeholder="Firstname"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className='col-span-1'>
                                        <input
                                            type="text"
                                            placeholder="Lastname"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-2'>
                                    <div className='col-span-1'>
                                        <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                                    </div>
                                    <div className='col-span-1'>
                                        <input
                                            type="text"
                                            placeholder="Phone"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-10'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div className='col-span-1'>
                                        <input
                                            type="text"
                                            placeholder="District"
                                            className="input input-bordered w-full max-w-xs"
                                        />
                                    </div>
                                    <div className='col-span-1'>
                                        <input
                                            type="text"
                                            placeholder="City"
                                            className="input input-bordered w-full max-w-xs" />
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <div className=''>
                                        <input
                                            type="text"
                                            placeholder="AddressDetails"
                                            className="input input-bordered w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-10 '>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div className='col-span-1'>
                                        <div className='flex gap-4'>
                                            <div className="form-control mt-5">
                                                <label className="label cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="radio-10"
                                                        value="VNPAY"
                                                        defaultChecked
                                                    />
                                                </label>
                                            </div>
                                            <Image src="/img/vnpay.png" alt='' height={70} width={90}
                                                style={{ height: "80px" }} />
                                        </div>
                                    </div>
                                    <div className='col-span-1'>
                                        <div className='flex gap-4'>
                                            <div className="form-control mt-5">
                                                <label className="label cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="radio-10"
                                                        value="COD"
                                                    />
                                                </label>
                                            </div>
                                            <Image src="/img/cod.png" alt='' height={50} width={90}
                                                style={{ height: "80px" }}></Image>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='mt-20'>
                                    <input
                                        type="text"
                                        placeholder="Note"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='flex gap-2 mt-20'>
                            <button className='border rounded max-w-fit py-2 px-3'>
                                <p>Pay later</p>
                            </button>
                            <Link href="/orders/orderID">
                                <button onClick={async () => await handleCreateOrder()} className='border rounded max-w-fit py-2 px-3 bg-blue-500 text-white'>
                                    <p>Pay now</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}