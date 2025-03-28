"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


export default function () {
    const [data, setData] = useState([]);
    
    const [timeLeft, setTimeLeft] = useState(7000);
    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);
    const formatTime = (time: number) => String(Math.max(0, time)).padStart(2, "0");
    const hours = formatTime(Math.floor(timeLeft / 3600));
    const minutes = formatTime(Math.floor((timeLeft % 3600) / 60));
    const seconds = formatTime(timeLeft % 60);
    return (
        <div className='mx-32 my-20'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-5'>
                    <svg className='w-16 h-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,0,0,1)"><path d="M13.9461 2.09411C12.8248 1.13855 11.1756 1.13856 10.0544 2.0941L8.70636 3.24286C8.54619 3.37935 8.34705 3.46183 8.13728 3.47857L6.3718 3.61946C4.90327 3.73665 3.73714 4.90278 3.61995 6.3713L3.47907 8.13678C3.46234 8.34654 3.37983 8.54573 3.24334 8.70589L2.09458 10.0539C1.13904 11.1752 1.13905 12.8243 2.0946 13.9455L3.24336 15.2936C3.37983 15.4538 3.46232 15.6529 3.47906 15.8627L3.61997 17.6281C3.73716 19.0966 4.9033 20.2627 6.37184 20.3799L8.13729 20.5209C8.34705 20.5376 8.54615 20.6201 8.70631 20.7566L10.0543 21.9053C11.1756 22.8608 12.8248 22.8609 13.9461 21.9053L15.2941 20.7566C15.4542 20.6201 15.6533 20.5376 15.8631 20.5208L17.6286 20.3799C19.0971 20.2628 20.2632 19.0967 20.3805 17.6281L20.5213 15.8627C20.538 15.6529 20.6206 15.4537 20.757 15.2935L21.9058 13.9456C22.8614 12.8243 22.8614 11.1751 21.9058 10.0539L20.757 8.70585C20.6205 8.54568 20.5381 8.34654 20.5214 8.13679L20.3805 6.37131C20.2633 4.9028 19.0971 3.73663 17.6286 3.61945L15.8631 3.47856C15.6533 3.46182 15.4542 3.37935 15.2941 3.24286L13.9461 2.09411ZM14.8284 7.75718L16.2426 9.1714L9.17151 16.2425L7.7573 14.8282L14.8284 7.75718ZM10.2322 10.232C9.64638 10.8178 8.69664 10.8178 8.11085 10.232C7.52506 9.6463 7.52506 8.69652 8.11085 8.11073C8.69664 7.52494 9.64638 7.52494 10.2322 8.11073C10.818 8.69652 10.818 9.6463 10.2322 10.232ZM13.7677 15.8889C13.1819 15.3031 13.1819 14.3534 13.7677 13.7676C14.3535 13.1818 15.3032 13.1818 15.889 13.7676C16.4748 14.3534 16.4748 15.3031 15.889 15.8889C15.3032 16.4747 14.3535 16.4747 13.7677 15.8889Z"></path></svg>
                    <p className='text-5xl text-red-500 font-bold'>On sale</p>
                    <div>
                        <div className="flex gap-2 ms-5">
                            <p className='font-bold text-2xl'>Kết thúc sau: </p>
                            <div className="flex gap-3 text-2xl rounded-xl text-white">
                                <div className="bg-gray-800 rounded-md px-1">
                                    <span className="countdown">{hours}</span>
                                </div>
                                <span className='text-black'>:</span>
                                <div className="bg-gray-800 rounded-md px-1">
                                    <span className="countdown">{minutes}</span>
                                </div>
                                <span className='text-black'>:</span>
                                <div className="bg-gray-800 rounded-md px-1">
                                    <span className="countdown">{seconds}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <Link href={"/products"} className='mt-5 flex border border-red-500 text-red-500 rounded-3xl p-2' style={{ width: "max-content" }}>
                        <p className=''>Xem tất cả</p>
                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,0,0,1)"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                    </Link>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-4 mt-10'>
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