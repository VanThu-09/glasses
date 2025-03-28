"use client"
import React, { useEffect, useState, useRef, ChangeEvent } from 'react';
import Link from 'next/link';
import { ChevronDown } from "lucide-react";
export default function Products() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
    const [minPrice, setMinPrice] = useState<number>(100000);
    const [maxPrice, setMaxPrice] = useState<number>(5000000);
    const [currentPrice, setCurrentPrice] = useState<number>(200000); 

    const toggleDropdown = (index: string) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const handleSelectOption = (index: string, option: string) => {
        setSelectedOptions((prev) => ({ ...prev, [index]: option }));
        setOpenDropdown(null);
    };
    const filters = [
        { title: "Danh mục sản phẩm", options: ["Chưa phân loại"] },
        { title: "Giới tính", options: ["Nam", "Nữ", "Gay"] },
        { title: "Kiểu dáng", options: ["Vuông", "Tròn", "Tam giác", "Đa giác"] },
        { title: "Chất liệu", options: ["Nhựa", "Kim loại"] },
    ];

    function handlePriceChange(event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
    }

    return (
        <div className='mx-32 mb-20 mt-10'>
            <div className='text-4xl font-serif'>Products</div>
            <div className="bg-red-600 p-3 flex my-5 items-center space-x-3 rounded-lg">
                <span className="text-white text-xl font-bold">Bộ lọc</span>
                {filters.map((filter, index) => (
                    <div key={index} className="relative">
                        <button
                            className="bg-white px-4 py-2 rounded-md flex items-center cursor-pointer"
                            onClick={() => toggleDropdown(index.toString())}
                        >
                            <span>{selectedOptions[index.toString()] || filter.title}</span>
                            <ChevronDown
                                className={`ml-2 transition-transform duration-300 ${openDropdown === index.toString() ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>

                        {/* Dropdown list */}
                        {openDropdown === index.toString() && (
                            <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-md rounded-md z-10">
                                {filter.options.map((option, optIndex) => (
                                    <div
                                        key={optIndex}
                                        className="p-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => handleSelectOption(index.toString(), option)}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <div className="relative">
                    <button
                        className="bg-white px-4 py-2 rounded-md flex items-center cursor-pointer"
                        onClick={() => toggleDropdown("price")}
                    >
                        <span>{minPrice.toLocaleString()} VNĐ - {maxPrice.toLocaleString()} VNĐ</span>
                        <ChevronDown
                            className={`ml-2 transition-transform duration-300 ${openDropdown === "price" ? "rotate-180" : "rotate-0"}`}
                        />
                    </button>

                    {openDropdown === "price" && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-md rounded-md p-4 z-10">
                            {/* Thanh trượt Min */}
                            <input
                                type="range"
                                min={100000}
                                max={maxPrice - 50000} 
                                value={minPrice}
                                className="range range-xs w-full"
                                onChange={(e) => setMinPrice(Number(e.target.value))}
                            />
                            <div className="text-xs text-left">Tối thiểu: {minPrice.toLocaleString()} VNĐ</div>

                            {/* Thanh trượt Max */}
                            <input
                                type="range"
                                min={minPrice + 50000} 
                                max={5000000}
                                value={maxPrice}
                                className="range range-xs w-full mt-2"
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                            />
                            <div className="text-xs text-left">Tối đa: {maxPrice.toLocaleString()} VNĐ</div>
                        </div>
                    )}
                </div>

            </div>
            <div className='grid grid-cols-4 gap-4 mt-10'>
                <Link href={"/productsDetails"} className='col-span-1 grid gap-2'>
                    <img className='w-72 border' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt=''></img>
                    <p className=' text-gray-400 text-sm'>LGBT</p>
                    <h1 className='font-bold'>GỌNG KÍNH BLANCY 1012 - C12</h1>
                    <p className='font-bold text-red-500'>360.000đ</p>
                </Link>
                <Link href={"/productsDetails"} className='col-span-1 grid gap-2'>
                    <img className='w-72 border' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt=''></img>
                    <p className=' text-gray-400 text-sm'>LGBT</p>
                    <h1 className='font-bold'>GỌNG KÍNH BLANCY 1012 - C12</h1>
                    <p className='font-bold text-red-500'>360.000đ</p>
                </Link>
                <Link href={"/productsDetails"} className='col-span-1 grid gap-2'>
                    <img className='w-72 border' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt=''></img>
                    <p className=' text-gray-400 text-sm'>LGBT</p>
                    <h1 className='font-bold'>GỌNG KÍNH BLANCY 1012 - C12</h1>
                    <p className='font-bold text-red-500'>360.000đ</p>
                </Link>
                <Link href={"/productsDetails"} className='col-span-1 grid gap-2'>
                    <img className='w-72 border' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt=''></img>
                    <p className=' text-gray-400 text-sm'>LGBT</p>
                    <h1 className='font-bold'>GỌNG KÍNH BLANCY 1012 - C12</h1>
                    <p className='font-bold text-red-500'>360.000đ</p>
                </Link>
                <Link href={"/productsDetails"} className='col-span-1 grid gap-2'>
                    <img className='w-72 border' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt=''></img>
                    <p className=' text-gray-400 text-sm'>LGBT</p>
                    <h1 className='font-bold'>GỌNG KÍNH BLANCY 1012 - C12</h1>
                    <p className='font-bold text-red-500'>360.000đ</p>
                </Link>
            </div>
        </div>
    )
}

function setSelectedOptions(arg0: (prev: any) => any) {
    throw new Error('Function not implemented.');
}
