"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function ItemsNew() {
    return (
        <div className='mx-32 mt-16'>
            <div className='text-center'>
                <p className='text-4xl'>Mẫu kính mắt mới</p>
            </div>
            <div className='grid grid-cols-4 gap-4 mt-5'>
                <Link href={"/productsDetails"} className='col-span-1 grid gap-2'>
                    <img className='w-72' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt=''></img>
                    <p className=' text-gray-400 text-sm'>LGBT</p>
                    <h1 className='font-bold'>GỌNG KÍNH BLANCY 1012 - C12</h1>
                    <p className='font-bold text-red-500'>360.000đ</p>
                </Link>
                <Link href={"/productsDetails"} className='col-span-1 grid gap-2'>
                    <img className='w-72' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt=''></img>
                    <p className=' text-gray-400 text-sm'>LGBT</p>
                    <h1 className='font-bold'>GỌNG KÍNH BLANCY 1012 - C12</h1>
                    <p className='font-bold text-red-500'>360.000đ</p>
                </Link>
                <Link href={"/productsDetails"} className='col-span-1 grid gap-2'>
                    <img className='w-72' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt=''></img>
                    <p className=' text-gray-400 text-sm'>LGBT</p>
                    <h1 className='font-bold'>GỌNG KÍNH BLANCY 1012 - C12</h1>
                    <p className='font-bold text-red-500'>360.000đ</p>
                </Link>
                <Link href={"/productsDetails"} className='col-span-1 grid gap-2'>
                    <img className='w-72' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt=''></img>
                    <p className=' text-gray-400 text-sm'>LGBT</p>
                    <h1 className='font-bold'>GỌNG KÍNH BLANCY 1012 - C12</h1>
                    <p className='font-bold text-red-500'>360.000đ</p>
                </Link>
                <Link href={"/productsDetails"} className='col-span-1 grid gap-2'>
                    <img className='w-72' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt=''></img>
                    <p className=' text-gray-400 text-sm'>LGBT</p>
                    <h1 className='font-bold'>GỌNG KÍNH BLANCY 1012 - C12</h1>
                    <p className='font-bold text-red-500'>360.000đ</p>
                </Link>
            </div>
        </div>
    )
}