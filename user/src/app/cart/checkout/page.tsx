"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/navigation';

export default function Checkout() {
    interface CartItem {
        id: string;
        name: string;
        image_thumbs: { [key: string]: string };
        color_mapping: { [key: string]: string };
        quantity: number;
        price: number;
    }
    const router = useRouter();
    const [cartItems, setCartItems] = useState<CartItem[]>([]); 
    const [total, setTotal] = useState(0);
    const [qrCode, setQrCode] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<string>("VNPAY"); // Phương thức thanh toán
    const [isPaid, setIsPaid] = useState(false); // Trạng thái khi người dùng đã nhấn Pay now

    const [userInfo, setUserInfo] = useState({
        name: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("checkoutCart") || "[]");
        const totalAmount = JSON.parse(localStorage.getItem("checkoutTotal") || "0");
        setCartItems(cartData);
        setTotal(totalAmount);

        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUserInfo({
                    name: parsedUser.name || "",
                    phone: parsedUser.phone || "",
                    address: parsedUser.address || ""
                });
            } catch (error) {
                console.error("Lỗi khi parse user:", error);
            }
        }
    }, []);

    const handleCreateOrder = async () => {
        const orderData = {
            orderId: `HD-${Date.now()}`,
            userInfo,
            cartItems,
            total,
            paymentMethod,
            status: paymentMethod === "COD" ? "Chưa thanh toán" : "Đã thanh toán",
        };
    
        localStorage.setItem("orderData", JSON.stringify(orderData));
    
        if (paymentMethod === "COD") {
            router.push("/orders/orderId"); // Chuyển đến trang orderId
        } else {
            try {
                setLoading(true);
                const response = await axios.post("https://api.vietqr.io/v2/generate", {
                    accountNo: "1033374275",
                    accountName: "Nguyen Van Thu",
                    acqId: "970436",
                    amount: total,
                    addInfo: `Thanh toán bởi ${userInfo.name} cho sản phẩm: ${cartItems.map(item => item.name).join(", ")}`,
                    template: "compact"
                }, {
                    headers: {
                        "x-client-id": "YOUR_CLIENT_ID",
                        "x-api-key": "YOUR_API_KEY",
                        "Content-Type": "application/json"
                    }
                });
    
                localStorage.setItem("qrCode", response.data.data.qrDataURL);
                setQrCode(response.data.data.qrDataURL);
                setIsPaid(true);
            } catch (error) {
                console.error("Lỗi khi tạo mã QR:", error);
            } finally {
                setLoading(false);
            }
        }
    };
    
    return (
        <div className='mx-20 my-10 md:mx-8 md:my-10 lg:mx-60 lg:my-16'>
            <div className='shadow rounded-lg bg-white p-10'>
                <p className='text-2xl text-center font-bold'>Checkout</p>
                <div className='bg-white p-2 py-10 rounded-lg'>
                    {cartItems.map((item) => (
                        <div key={item.id} className='grid grid-cols-3 p-1 border-2 rounded-md border-red-50'>
                            <div className='col-span-2 flex gap-5'>
                                <img className='w-32 h-32' src={item.image_thumbs['den']} alt={item.name} />
                                <div className='mt-5'>
                                    <h1 className='font-bold'>{item.name}</h1>
                                    <div className='flex gap-2 mt-1'>
                                        <h1 className='font-bold'>Màu sắc: </h1>
                                        <p>{Object.keys(item.color_mapping).join(", ")}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1 text-center mt-5'>
                                <p className='font-bold'>Số lượng:  <span className='text-red-500'>{item.quantity}</span></p>
                            </div>
                        </div>
                    ))}
                    <div className='text-right text-xl font-bold mt-5'>Tổng tiền: <span className='text-red-500'>{total.toLocaleString()}đ</span></div>
                </div>

                <div className='grid grid-cols-3 mt-8'>
                    <div className='col-span-1'>
                        <p className='font-bold'>01<br />Personal Details</p>
                        <p className='font-bold mt-36 md:mt-24'>02<br />Shopping Address</p>
                        <p className='font-bold mt-36 md:mt-24'>03<br />Payment Method</p>
                        <p className='font-bold mt-24'>04<br />Note</p>
                    </div>

                    <div className='col-span-2'>
                        <input type="text" placeholder="Name" className="input input-bordered w-full"
                            value={userInfo.name}
                            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                        />

                        <input type="text" placeholder="Phone" className="input input-bordered w-full mt-2"
                            value={userInfo.phone}
                            onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                        />

                        <input type="text" placeholder="AddressDetails" className="input input-bordered w-full mt-10"
                            value={userInfo.address}
                            onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                        />

                        <div className='mt-20'>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='col-span-1'>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex gap-4">
                                            <div className="form-control mt-5">
                                                <label className="label cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="payment"
                                                        value="VNPAY"
                                                        checked={paymentMethod === "VNPAY"}
                                                        onChange={() => setPaymentMethod("VNPAY")}
                                                    />
                                                </label>
                                            </div>
                                            <Image src="/img/vnpay.png" alt="VNPAY" height={70} width={90} style={{ height: "80px" }} />
                                        </div>
                                    </div>
                                </div>

                                <div className='col-span-1'>
                                    <div className='flex gap-4'>
                                        <div className="form-control mt-5">
                                            <label className="label cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="payment"
                                                    value="COD"
                                                    checked={paymentMethod === "COD"}
                                                    onChange={() => setPaymentMethod("COD")}
                                                />
                                            </label>
                                        </div>
                                        <Image src="/img/cod.png" alt="COD" height={50} width={90} style={{ height: "80px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <input type="text" placeholder="Note" className="input input-bordered w-full mt-20" />
                        
                        {isPaid && paymentMethod === "VNPAY" && qrCode && (
                            <div className="mt-5">
                                <p className="text-lg font-bold">Quét mã QR để thanh toán:</p>
                                <Image src={qrCode} alt="QR Code" width={200} height={200} />
                            </div>
                        )}
                        
                        <div className='flex justify-end mt-20'>
                            <Link href={"/cart"} className='border rounded max-w-fit py-2 px-3'>
                                <p>Pay later</p>
                            </Link>
                            <button onClick={handleCreateOrder} className='border rounded max-w-fit py-2 px-3 bg-blue-500 text-white' disabled={loading}>
                                {loading ? "Processing..." : "Pay now"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
