"use client";
import React, { useState, useEffect } from 'react';

export default function OrderID() {
    const [orderData, setOrderData] = useState<any>(null);
    const [currentDateTime, setCurrentDateTime] = useState<string>("");
    const [expectedDelivery, setExpectedDelivery] = useState<string>("");

    useEffect(() => {
        const storedOrder = localStorage.getItem("orderData");
        if (storedOrder) {
            setOrderData(JSON.parse(storedOrder));
        }

        // Lấy ngày giờ hiện tại
        const now = new Date();
        setCurrentDateTime(now.toUTCString());

        // Tính ngày giao hàng dự kiến (3 ngày sau)
        const expectedDate = new Date();
        expectedDate.setDate(now.getDate() + 3);
        setExpectedDelivery(expectedDate.toDateString());
    }, []);

    if (!orderData) {
        return <p className="text-center text-xl">Loading order...</p>;
    }

    return (
        <div className='flex flex-col mx-60'>
            <div className='text-center mb-10 grid gap-4'>
                <h1 className='text-4xl font-bold'>Successful</h1>
                <p className='text-gray-400'>
                    Thanks for making a purchase! You can check your order summary below.
                </p>
            </div>

            <div className='flex justify-around w-full border rounded-md py-5 bg-white shadow'>
                <div className='mx-8 my-3 bg-white rounded-md'>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200 mt-4">
                        <div className="data">
                            <p className="font-semibold text-base leading-7 text-black">
                                Order Id: <span className="text-indigo-600 font-medium">{orderData.orderId}</span>
                            </p>
                            <p className="font-semibold text-base leading-7 text-black mt-4">
                                Order Payment: <span className="text-gray-400 font-medium">{currentDateTime}</span>
                            </p>
                        </div>
                    </div>

                    {orderData.cartItems.map((item: any, index: number) => (
                        <div key={index} className='border-b p-8 gap-2 grid grid-cols-12'>
                            <div className='col-span-2'>
                                <img className='w-32 h-32 border' src={item.image_thumbs["den"]} alt={item.name} />
                            </div>
                            <div className='col-span-7' style={{ width: 'max-content', height: 'max-content' }}>
                                <h1 className='font-bold'>{item.name}</h1>
                                <div className='flex gap-1 mt-1'>
                                    <h1 className='font-bold'>Màu sắc: </h1>
                                    <p>{Object.keys(item.color_mapping).join(", ")}</p>
                                </div>
                            </div>
                            <div className='col-span-2 flex gap-10'>
                                <div>
                                    <p>Price</p>
                                    <p className='text-indigo-500 mt-6'>{item.price.toLocaleString()}đ</p>
                                </div>
                                <div>
                                    <p>Status</p>
                                    <p className={`text-green-500  rounded-full mt-5 py-1 px-2`}>
                                        {orderData.status}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className='p-8 flex justify-between'>
                        <p className='font-semibold'>
                            Payment method: <span className='text-slate-400'>{orderData.paymentMethod}</span>
                        </p>
                        <p className='font-semibold'>
                            Shipping: <span className='text-blue-500'>25.000đ</span>
                        </p>
                        <p className='font-semibold'>
                            Total price: <span className='text-red-500'>{orderData.total.toLocaleString()}đ</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
