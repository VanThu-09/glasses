"use client";
import React from 'react';
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
export default function ProductsDetails() {
    const images = [
        "https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png",
        "https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png",
        "https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png",
        "https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    const [count, setCount] = useState(1);
    return (
        <div>
            <div className='mx-32 mt-20'>
                <div className='grid grid-cols-7 gap-2'>
                    <div className='col-span-3'>
                        <div className="w-full max-w-2xl mx-auto relative">
                            <div className="relative flex justify-center">
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-11 top-1/2 transform -translate-y-1/2  text-red-500 shadow bg-white p-2 rounded-full"
                                >
                                    &#10094;
                                </button>
                                <img
                                    src={images[currentIndex]}
                                    alt="Slideshow"
                                    className="w-10/12 object-cover rounded-lg shadow-md"
                                />
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-11 top-1/2 transform -translate-y-1/2 text-red-500 shadow bg-white p-2 rounded-full"
                                >
                                    &#10095;
                                </button>
                            </div>
                            <div className="flex justify-center gap-2 mt-4">
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${index === currentIndex ? "border-red-200" : "border-gray-100"
                                            }`}
                                        onClick={() => setCurrentIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <p className='text-2xl'>
                            GỌNG KÍNH BLANCY 1012 - C12 Trắng
                        </p>
                        <p className='text-xl mt-10 font-bold bg-orange-50 p-3 text-red-500'>
                            360.000đ
                        </p>
                        <div className='my-5'>
                            <p className='mb-2'>Chất liệu nhựa nguyên khối cao cấp nay có thêm kiểu dáng MẮT MÈO cho các chị em thoải mái với mọi lựa chọn.</p>
                            <p>Gọng kính BL 1012 dáng mắt mèo cá tính có điểm nhấn nổi bật nằm ở thiết kế hai bên càng kính. Form dáng cá tính, và độc đáo, thích hợp làm mới vẻ ngoài của người sử dụng.</p>
                        </div>
                        <p>
                            Kho còn: <span className='text-gray-400'>54</span>
                        </p>
                        <div className='grid grid-cols-2 gap-4 mt-10'>
                            <div className='col-span-1 grid gap-2 hover:text-red-500 transition duration-300'>
                                <div className='flex justify-center'>
                                    <div className="flex border rounded-3xl p-2 w-full justify-between">
                                        <button
                                            className="rounded-lg px-3 hover:bg-gray-300 text-xl duration-300:opacity-50"
                                            onClick={() => setCount(count - 1)}
                                         duration-300={count === 1}
                                        >
                                            －
                                        </button>
                                        <span className="text-xl font-semibold">{count}</span>
                                        <button
                                            className="rounded-lg px-2 hover:bg-gray-300 text-xl"
                                            onClick={() => setCount(count + 1)}
                                        >
                                            ＋
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1 grid gap-2 hover:text-red-500 transition duration-300'>
                                <button className='rounded-3xl p-2 text-lg font-bold border-black border w-full'>
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                        <button className='mt-5 bg-red-500 rounded-3xl p-2 w-full'>
                            <p className='text-center text-2xl text-white'>Mua ngay</p>
                        </button>
                    </div>
                    <div className='col-span-1 ms-7'>
                        <div className='grid gap-1 border-b shadow p-2'>
                            <svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,0,0,1)"><path d="M8.96456 18C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456ZM15 7H3V15.0505C3.63526 14.4022 4.52066 14 5.5 14C6.8962 14 8.10145 14.8175 8.66318 16H14.3368C14.5045 15.647 14.7296 15.3264 15 15.0505V7ZM17 13H21V12.715L18.9917 10H17V13ZM17.5 19C18.1531 19 18.7087 18.5826 18.9146 18C18.9699 17.8436 19 17.6753 19 17.5C19 16.6716 18.3284 16 17.5 16C16.6716 16 16 16.6716 16 17.5C16 17.6753 16.0301 17.8436 16.0854 18C16.2913 18.5826 16.8469 19 17.5 19ZM7 17.5C7 16.6716 6.32843 16 5.5 16C4.67157 16 4 16.6716 4 17.5C4 17.6753 4.03008 17.8436 4.08535 18C4.29127 18.5826 4.84689 19 5.5 19C6.15311 19 6.70873 18.5826 6.91465 18C6.96992 17.8436 7 17.6753 7 17.5Z"></path></svg>
                            <p className='font-bold text-xs mt-2'>MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</p>
                            <p className='text-xs'>Với tất cả các đơn hàng có giá trị trên 400,000đ</p>
                        </div>
                        <div className='grid gap-1 border-b shadow p-2'>
                            <svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(246,5,5,1)"><path d="M12 4C9.25144 4 6.82508 5.38626 5.38443 7.5H8V9.5H2V3.5H4V5.99936C5.82381 3.57166 8.72764 2 12 2C17.5228 2 22 6.47715 22 12H20C20 7.58172 16.4183 4 12 4ZM4 12C4 16.4183 7.58172 20 12 20C14.7486 20 17.1749 18.6137 18.6156 16.5H16V14.5H22V20.5H20V18.0006C18.1762 20.4283 15.2724 22 12 22C6.47715 22 2 17.5228 2 12H4Z"></path></svg>
                            <p className='font-bold text-xs mt-2'>CHÍNH SÁCH ĐỔI TRẢ DỄ DÀNG</p>
                            <p className='text-xs'>Đổi hàng 7 ngày với gọng kính, bảo hành 1 năm về thay ốc ve, nắn chỉnh gọng</p>
                        </div>
                        <div className='grid gap-1 border-b shadow p-2'>
                            <svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(246,4,4,1)"><path d="M19.9381 8H21C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8ZM3 10V14H4V10H3ZM20 10V14H21V10H20ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path></svg>
                            <p className='font-bold text-xs mt-2'>TỔNG ĐÀI HỖ TRỢ 0904.915.377</p>
                            <p className='text-xs'>Chúng tôi luôn sẵn lòng giải đáp mọi câu hỏi</p>
                        </div>
                        <div className='grid gap-1 border-b shadow p-2'>
                            <svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(250,7,7,1)"><path d="M4.02381 3.78307C4.12549 3.32553 4.5313 3 5 3H19C19.4687 3 19.8745 3.32553 19.9762 3.78307L21.9762 12.7831C21.992 12.8543 22 12.927 22 13V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V13C2 12.927 2.00799 12.8543 2.02381 12.7831L4.02381 3.78307ZM5.80217 5L4.24662 12H9C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12H19.7534L18.1978 5H5.80217ZM16.584 14C15.8124 15.7659 14.0503 17 12 17C9.94968 17 8.1876 15.7659 7.41604 14H4V19H20V14H16.584Z"></path></svg>
                            <p className='font-bold text-xs mt-2'>HƯỚNG DẪN MUA HÀNG</p>
                            <p className='text-xs'>Cách thức mua hàng</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 bg-rose-50 p-8'>
                <div className='flex mx-36 gap-20'>
                    <div className='flex gap-4' style={{ width: "max-content" }}>
                        <img className='w-16 h-10' src="https://kinhmateyeplus.com/template/assets/images/detail/i-product-img2.png" alt="" />
                        <div>
                            <p>Mắt kính rộng:</p>
                            <p className='font-bold'>55mm</p>
                        </div>
                    </div>
                    <div className='flex gap-4' style={{ width: "max-content" }}>
                        <img className='w-16 h-10' src="https://kinhmateyeplus.com/template/assets/images/detail/i-product-img4.png" alt="" />
                        <div>
                            <p>Cầu kính:</p>
                            <p className='font-bold'>16mm</p>
                        </div>
                    </div>
                    <div className='flex gap-4' style={{ width: "max-content" }}>
                        <img className='w-16 h-10' src="https://kinhmateyeplus.com/template/assets/images/detail/i-product-img5.png" alt="" />
                        <div>
                            <p>Chiều dài gọng:</p>
                            <p className='font-bold'>144mm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 mx-40'>
                <p className='text-3xl'>ĐẶC ĐIỂM GỌNG KÍNH NHỰA CAO CẤP BL 1012</p>
                <ul className='list-disc ms-5 mt-5 grid gap-3'>
                    <li>Màu sắc: <span className='font-bold'>C12 TRẮNG</span></li>
                    <li>Kiểu dáng: <span className='font-bold'>Mắt mèo</span></li>
                    <li>Chất liệu: <span className='font-bold'><span className='font-bold'>C12 TRẮNG</span></span></li>
                    <li><span className='font-bold'>Nhựa nguyên khối cao cấp</span></li>
                </ul>
                <p className='mt-10 text-3xl'>MUA GỌNG KÍNH NHỰA CAO CẤP CAO CẤP GIÁ TỐT TẠI <span className='text-red-500 font-bold'>GLASSES-VT</span></p>
                <div className='mt-20'>
                    <p className='text-2xl'>Sản phẩm khác</p>
                    <div className='grid grid-cols-4 gap-4 mt-5'>
                        <div className='col-span-1 grid gap-2 hover:text-red-500 transition duration-300'>
                            <img src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt="" width={300} height={300} />
                            <p className='font-bold'>GỌNG KÍNH BLANCY 1012 - C12 Trắng</p>
                            <p className='text-red-500 font-bold'>360.000đ</p>
                        </div>
                        <div className='col-span-1 grid gap-2 hover:text-red-500 transition duration-300'>
                            <img src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt="" width={300} height={300} />
                            <p className='font-bold'>GỌNG KÍNH BLANCY 1012 - C12 Trắng</p>
                            <p className='text-red-500 font-bold'>360.000đ</p>
                        </div>
                        <div className='col-span-1 grid gap-2 hover:text-red-500 transition duration-300'>
                            <img src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt="" width={300} height={300} />
                            <p className='font-bold'>GỌNG KÍNH BLANCY 1012 - C12 Trắng</p>
                            <p className='text-red-500 font-bold'>360.000đ</p>
                        </div>
                        <div className='col-span-1 grid gap-2 hover:text-red-500 transition duration-300'>
                            <img src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt="" width={300} height={300} />
                            <p className='font-bold'>GỌNG KÍNH BLANCY 1012 - C12 Trắng</p>
                            <p className='text-red-500 font-bold'>360.000đ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}