"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function YouKnow() {
    return (
        <div className='bg-gray-200 w-full mt-16'>
            <div className='grid grid-cols-7 mx-52 py-16'>
                <div className='col-span-3'>
                    <div className='grid gap-4'>
                        <div>
                            <Link href={"#"} className=' flex border border-red-500 text-red-500 rounded-3xl p-3' style={{ width: "max-content" }}>
                                <p className='text-sm font-bold'>Sức khoẻ đôi mắt</p>
                                <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,0,0,1)"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                            </Link>
                        </div>
                        <p className='text-2xl text-gray-500'>Bạn có biết rằng?</p>
                        <p className='text-5xl font-bold'>Kính là </p>
                        <p className='text-7xl text-red-500'>thời trang</p>
                        <img className='w-96' src={"https://kinhmateyeplus.com/wp-content/uploads/2025/01/Layer-2.png"} alt=''></img>
                    </div>
                </div>
                <div className='col-span-4'>
                    <div className='grid grid-cols-5 gap-7'>
                        <div className='col-span-2'>
                            <img className='w-full h-44 object-cover' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/17.jpg" alt="" />
                        </div>
                        <div className='col-span-3 '>
                            <p className='text-xl mb-3'>Gọng Kính Cận Chất Lượng Phù Hợp Với Khuôn Mặt</p>
                            <p className='text-sm mb-3'>Kính mắt giờ đã không còn dừng lại ở một sản phẩm về sức khoẻ, mà còn mang đến vẻ đẹp thời trang và mang đậm dấu ấn cá nhân. Vậy chọn gọng kính cận chất lượng như thế nào cho phù hợp, cùng tìm hiểu...</p>
                            <Link className='font-bold hover:text-red-500 transform duration-300' href={"#"}>Đọc thêm</Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-5 gap-7 mt-16'>
                        <div className='col-span-2'>
                            <img className='w-full h-44 object-cover' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/Hay-cung-Eye-Plus-kham-pha-nhung-thiet-ke-doc-dao-va-dep-mat-de-toa-sang-moi-ngay_________Hotline-0904-915-377call-zaloShopee-https-shope.ee-qM6BdcH1p.jpg" alt="" />
                        </div>
                        <div className='col-span-3 '>
                            <p className='text-xl mb-3'>5 Cách Nhận Biết Kính Chống Ánh Sáng Xanh Hiệu Quả</p>
                            <p className='text-sm mb-3'>5 Cách Nhận Biết Kính Chống Ánh Sáng Xanh Hiệu Quả Kính chống ánh sáng xanh đã trở thành một phụ kiện không thể thiếu trong cuộc sống hiện đại. Với sự phổ biến của các thiết bị điện tử như máy tính, điện thoại di động, và màn hình…</p>
                            <Link className='font-bold hover:text-red-500 transform duration-300' href={"#"}>Đọc thêm</Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-5 gap-7 mt-16'>
                        <div className='col-span-2'>
                            <img className='w-full h-44 object-cover' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/451012759_869472495086362_1879315800885911921_n.jpg" alt="" />
                        </div>
                        <div className='col-span-3 '>
                            <p className='text-xl mb-3'>Acetate Là Gì? Chất Liệu Kính Acetate Có Tốt Không?</p>
                            <p className='text-sm mb-3'>Acetate Là Gì? Chất Liệu Kính Acetate Có Tốt Không? Acetate là một chất liệu phổ biến và cao cấp được sử dụng trong việc sản xuất gọng kính. Từ lâu, acetate đã trở thành lựa chọn ưu tiên của các nhà thiết kế và thương hiệu kính nổi tiếng…</p>
                            <Link className='font-bold hover:text-red-500 transform duration-300' href={"#"}>Đọc thêm</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}