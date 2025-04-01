"use client"
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
export default function () {
    const images = [
        "https://assets2.clearly.ca/cdn-record-files/dressedon/1d7a9737-4193-45c9-b595-b2450123e65a/0QY3027__C4__SHOOT__om1.png?bgc=%23FFFFFF&impolicy=CLE_resize&wid=900",
        "https://assets2.clearly.ca/cdn-record-files/dressedon/41793995-5a43-41ea-b75b-b2450120e036/0QY3026__C3__SHOOT__om2.png?bgc=%23FFFFFF&impolicy=CLE_resize&wid=900",
        "https://assets2.clearly.ca/cdn-record-files/dressedon/17ecc04b-6a4e-4308-84e9-b24501251906/0QY3028__C2__SHOOT__om1.png?bgc=%23FFFFFF&impolicy=CLE_resize&wid=900",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className='mx-32'>
            <div>
                <div className="relative w-full mb-10">
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                            className="w-full h-80 object-cover transition-opacity duration-700"/>
                    </div>
                </div>
            </div>
            <p className='font-bold p-1 bg-red-500 rounded-md text-white' style={{ width: "max-content" }}>KÍNH MẮT GLASSES-VT</p>
            <h1 className='text-5xl mt-3'>Chuỗi cửa hàng gọng kính uy tín nhất Hà Nội</h1>
            <div className='grid grid-cols-2 mt-16 gap-14 '>
                <div className='col-span-1'>
                    <p className='text-2xl'>Với phương châm “Kính mắt Glasses-VT - Thân Thiện Với Đôi Mắt Mọi Người” & “Khách hàng là tài sản quý giá nhất của doanh nghiệp”</p>
                    <Link href={"#"} className='mt-5 flex border border-red-500 text-red-500 rounded-2xl p-2' style={{ width: "max-content" }}>
                        <p >Tìm hiểu thêm về Glasses-VT</p>
                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,0,0,1)"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                    </Link>
                </div>
                <div className='col-span-1'>
                    <p>Với 10 năm kính nghiệm trên thị trường kính mắt Việt, Glasses-VT tự hào là đơn vị cung cấp các sản phẩm và dịch vụ về kính mắt uy tín tại Việt Nam. Các sản phẩm được tuyển chọn kỹ lưỡng, đạt độ tinh xảo và chất lượng cao, hướng đến trải nghiệm tốt nhất cho khách hàng.</p>
                </div>
            </div>
        </div>
    )
}
