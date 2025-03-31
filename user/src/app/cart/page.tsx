"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Cart() {
    const [cartItems, setCartItems] = useState<{ id: string; name: string; image_thumbs: any; color_mapping: any; price: number; quantity: number }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user') || '{}');
                const userId = user.id;
                const response = await fetch(`https://glassmanagement.vercel.app/api/cart/get/${userId}`);
                const data = await response.json();
                if (response.ok) {
                    // Thêm thuộc tính quantity mặc định là 1 nếu chưa có
                    const updatedCart = data.data.map((item: any) => ({ ...item, quantity: item.quantity || 1 }));
                    setCartItems(updatedCart);
                } else {
                    throw new Error(data.message);
                }
            } catch (err: Error | any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCart();
    }, []);

    // Hàm tăng số lượng
    const increaseQuantity = (id: string) => {
        setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };

    // Hàm giảm số lượng (không giảm dưới 1)
    const decreaseQuantity = (id: string) => {
        setCartItems(cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
    };

    // Hàm xóa sản phẩm khỏi giỏ hàng
    const handleRemove = (id: string) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    if (loading) return (
        <div className="flex w-full my-10 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    );
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="grid grid-cols-4 gap-4 mx-20">
            <div className="col-span-3">
                {cartItems.length === 0 ? (
                    <p className="p-5">Giỏ hàng trống</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} className="grid border-4 mb-4 border-red-100 rounded-md grid-cols-3 p-1">
                            <div className="col-span-2 flex gap-5">
                                <img className="w-32 h-32" src={item?.image_thumbs['den']} alt={item.name} />
                                <div className="mt-5">
                                    <h1 className="font-bold">{item.name}</h1>
                                    <div className="flex gap-2 mt-1">
                                        <h1 className="font-bold">Màu sắc: </h1>
                                        <p>{Object.keys(item.color_mapping)}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col items-center">
                                <p className="text-red-500 text-xl">{(item.price * item.quantity).toLocaleString()}đ</p>
                                <div className="flex items-center mt-2">
                                    <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-300 px-2 py-1 rounded-md">-</button>
                                    <span className="mx-3">{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)} className="bg-gray-300 px-2 py-1 rounded-md">+</button>
                                </div>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    className="bg-red-300 px-3 py-1 mt-3 rounded-lg"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div className="col-span-1 shadow rounded-md bg-red-50 p-5">
                <h1 className="text-xl font-semibold border-b pb-3">Order Summary</h1>
                <p className="text-lg pt-8 pb-3">Shipping</p>
                <select className="select select-info w-full">
                    <option disabled>Select method</option>
                    <option value="standard">Standard shipping - 25.000đ</option>
                    <option value="fast">Express delivery - 75.000đ</option>
                </select>
                <div className="mt-3 divide-y divide-slate-300">
                    <div className="py-3 flex justify-between">
                        <p>Subtotal</p>
                        <p>{cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()}đ</p>
                    </div>
                    <div className="py-3 flex justify-between">
                        <p>Shipping</p>
                        <p>25.000đ</p>
                    </div>
                    <div className="py-3 flex justify-between">
                        <p>Total</p>
                        <p>{(cartItems.reduce((sum, item) => sum + item.price * item.quantity, 25000)).toLocaleString()}đ</p>
                    </div>
                </div>
                <Link href="/cart/checkout">
                    <button className="btn bg-rose-600 text-white w-full mt-5">Check out</button>
                </Link>
            </div>
        </div>
    );
}
