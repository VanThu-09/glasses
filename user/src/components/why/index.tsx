"use client"
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
export default function () {
    return (
        <div className='bg-red-500 w-full text-white'>
            <div className='grid gap-4 py-10 px-32 items-center'>
                <div>
                    <p className='text-3xl'>Vì sao</p>
                </div>
                <div>
                    <p className='text-5xl font-bold'>chọn chúng tôi?</p>
                </div>
                <div className='mt-5 grid grid-cols-3 gap-4'>
                    <div className='border-e grid gap-2'>
                        <p className='text-6xl font-bold'>10</p>
                        <p className='text-2xl text-gray-400'>Cửa hàng</p>
                        <p>Phủ sóng các quận trung tâm HN tiện lợi và phục vụ khách hàng nhanh chóng.</p>
                    </div>
                    <div className='border-e grid gap-2'>
                        <p className='text-6xl font-bold'>10</p>
                        <p className='text-2xl text-gray-400'>Năm tuổi</p>
                        <p>Thấu hiểu thị hiếu khách hàng, mẫu mã của Eye Plus đa dạng, phù hợp với nhiều yêu cầu khác nhau.</p>
                    </div>
                    <div className=' grid gap-2'>
                        <p className='text-6xl font-bold'>800.000</p>
                        <p className='text-2xl text-gray-400'>Khách hàng hài lòng</p>
                        <p>Sự tin yêu của khách hàng và tôn trọng trải nghiệm là tiêu chí phụng sự của Eye Plus.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
