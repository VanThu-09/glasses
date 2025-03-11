"use client"
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
export default function Products() {
    return (
        <div className='mx-32 my-20'>
            <div className='text-4xl font-serif'>Products</div>
            <div className='grid grid-cols-4 gap-4 mt-10'>
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