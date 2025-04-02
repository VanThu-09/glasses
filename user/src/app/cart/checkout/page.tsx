"use client";
import React, { useState, useEffect, ChangeEvent, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import useCartStore from "@/app/store/cartStore";
import { paymentProduct } from "@/services/cartServices";
import { createOrder } from "@/services/orderServices";

export default function Checkout() {
    interface CartItem {
        id: string;
        name: string;
        image_thumbs: { [key: string]: string };
        image: string;
        color_mapping: { [key: string]: string };
        quantity: number;
        price: number;
        quantityInStock?: number;
    }
    const shipping = {
        standard: {
            name: "Giao hàng tiêu chuẩn",
            cost: "30000",
        },
        express: {
            name: "Giao hàng hỏa tốc",
            cost: "40000",
        },
    };

    const shippingMethods = [
        { value: "standard", label: "🚚 Giao hàng tiêu chuẩn", cost: 15000 },
        { value: "express", label: "⚡ Giao hàng nhanh", cost: 30000 },
    ];

    const {
        cart: { selectedItem, cartItems: cartIts , cartItemNum},
        setCartItems: setCartitems,
        setCartItemNum,setSelectedItem
    } = useCartStore();
    const router = useRouter();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<string>("VNPAY"); // Phương thức thanh toán
    const [isPaid, setIsPaid] = useState(false); // Trạng thái khi người dùng đã nhấn Pay now
    const noteRef = useRef<any>();
    const [selectedMethod, setSelectedMethod] = useState(shippingMethods[0].value);
    const handleChange = (event: any) => {
        setSelectedMethod(event.target.value);
    };

    const [userInfo, setUserInfo] = useState({
        name: "",
        phone: "",
        address: "",
    });

    const hanldeViewCheckoutPage = async () => {
        const cartData = JSON.parse(localStorage.getItem("checkoutCart") || "[]");
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const userId = user.id;
        const response = await fetch(`http://localhost:8000/api/cart/get/${userId}`);
        const data = await response.json();
        if (response.ok) {
            console.log(data);
            const updatedCart = data.data.filter((item: any) => selectedItem.includes(item.id));
            setCartItems(updatedCart);
            const totalAmount = Number(
                Array.from(updatedCart).reduce((prev: any, cur: any, curIndex) => {
                    return prev + cur.quantity * cur.price;
                }, 0)
            );
            setTotal(totalAmount);
        } else {
            throw new Error(data.message);
        }

        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUserInfo({
                    name: parsedUser.name || "",
                    phone: parsedUser.phone || "",
                    address: parsedUser.address || "",
                });
            } catch (error) {
                console.error("Lỗi khi parse user:", error);
            }
        }
    };

    const handleCreateOrder = async () => {
        const storeuser = localStorage.getItem("user") || "{}";
        const user = JSON.parse(storeuser);
        console.log(user);
        const customer_id = user?.id;
        const customer_name = user?.name;
        const customer_email = user?.email;
        const customer_phone = user?.phone;
        const customer_address = user?.address;
        const shipping_method = shippingMethods.filter((item) => (item.value = selectedMethod))[0]
            .value;
        const shipping_cost = shippingMethods.filter((item) => (item.value = selectedMethod))[0]
            .cost;
        const payment_method = paymentMethod;
        const note = noteRef.current?.value;
        const res = await createOrder(
            customer_id,
            customer_name,
            customer_email,
            customer_phone,
            customer_address,
            shipping_cost,
            shipping_method,
            payment_method,
            note
        );
        if (res?.ok) {
            const soldNum = selectedItem.length;
            setCartItemNum(cartItemNum - soldNum)
            const left = cartIts.filter((item :any) => selectedItem.includes(String(item.id)))
            setCartitems(left)
            setSelectedItem([])
        }
    };
    const handlePaymentBanking = async () => {
        setPaymentMethod("ZALOPAY");
        const prodsToPay = cartItems.filter((item) => selectedItem.includes(item.id));
        let amount = 0;
        const neededData = prodsToPay.map((item) => {
            amount += +item.quantity * +item.price;
            return {
                id: item.id,
                quantity: item.quantity,
                price: item.price,
            };
        });
        const redirectUrl = window.location.href;
        const res = await paymentProduct(neededData, amount, redirectUrl);
        const data = await res?.json();
        const { order_url } = data;
        window.location.assign(order_url);
    };

    useEffect(() => {
        if (selectedItem.length === 0) {
            router.push("/cart");
        }
    }, [selectedItem]);

    useEffect(() => {
        hanldeViewCheckoutPage();
    }, []);

    return (
        <div className="mx-52 my-10 md:mx-8 md:my-10 lg:mx-60 lg:my-16">
            {selectedItem.length > 0 ? (
                <div className="shadow rounded-lg bg-white p-10">
                    <p className="text-3xl text-left mb-8 font-bold text-red-500">Checkout</p>
                    <div className="mx-20">
                        <div bg-white p-2 py-10 rounded-lg>
                            <table className="w-full mt-6">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="p-4">Sản phẩm</th>
                                        <th className="p-4 text-center">Đơn giá</th>
                                        <th className="p-4 text-center">Số lượng</th>
                                        <th className="p-4 text-center">Thành tiền</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {cartItems.map((item) => {
                                        if (selectedItem.includes(item.id)) {
                                            return (
                                                <tr
                                                    key={item.id}
                                                    className="hover:bg-gray-50 transition">
                                                    <td className="p-4 flex items-center space-x-4">
                                                        <img
                                                            className="w-20 h-20 object-cover rounded-lg"
                                                            src={item.image}
                                                            alt={item.name}
                                                        />
                                                        <div>
                                                            <p className="font-bold text-gray-800">
                                                                {item.name}
                                                            </p>
                                                            <p className="text-gray-600 text-sm">
                                                                Màu sắc:{" "}
                                                                {Object.keys(
                                                                    item.color_mapping
                                                                ).join(", ")}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className="p-4 text-center text-gray-700">
                                                        {item.price.toLocaleString()}đ
                                                    </td>
                                                    <td className="p-4 text-center text-gray-700">
                                                        {item.quantity}
                                                    </td>
                                                    <td className="p-4 text-center font-bold text-red-500">
                                                        {(
                                                            item.price * item.quantity
                                                        ).toLocaleString()}
                                                        đ
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="text-right text-lg font-extrabold  rounded-lg ">
                            Tổng tiền{`(${selectedItem.length} sản phẩm):`}
                            <span className="text-red-500">{total.toLocaleString()}đ</span>
                        </div>
                    </div>

                    <div className="p-8 bg-white shadow-xl rounded-2xl w-full mx-auto">
                        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
                            Thông Tin Thanh Toán
                        </h2>
                        <div className="space-y-6">
                            {/* Personal Information */}
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <h3 className="font-semibold text-lg mb-4">
                                    01. Thông Tin Cá Nhân
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">
                                            Tên
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Hieu Bui"
                                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            value={userInfo.name}
                                            onChange={(e) =>
                                                setUserInfo({ ...userInfo, name: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-600">
                                            Số điện thoại
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Phone"
                                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                            value={userInfo.phone}
                                            onChange={(e) =>
                                                setUserInfo({ ...userInfo, phone: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Address Section */}
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <h3 className="font-semibold text-lg mb-4">
                                    02. Địa Chỉ Nhận Hàng
                                </h3>
                                <input
                                    type="text"
                                    placeholder="Nhập địa chỉ của bạn"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={userInfo.address}
                                    onChange={(e) =>
                                        setUserInfo({ ...userInfo, address: e.target.value })
                                    }
                                />
                            </div>

                            {/* Payment Method */}
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <h3 className="font-semibold text-lg mb-4">
                                    03. Phương Thức Thanh Toán
                                </h3>
                                <div className="flex gap-6">
                                    <button
                                        onClick={() => handlePaymentBanking()}
                                        className={`p-4 border-2 rounded-lg transition duration-300 ${
                                            paymentMethod === "VNPAY"
                                                ? "border-blue-500 bg-blue-100"
                                                : "border-gray-300"
                                        }`}>
                                        <Image
                                            src="/img/zalopay.png"
                                            alt="ZALOPAY"
                                            width={100}
                                            height={80}
                                        />
                                    </button>
                                    <button
                                        onClick={() => setPaymentMethod("COD")}
                                        className={`p-4 border-2 rounded-lg transition duration-300 ${
                                            paymentMethod === "COD"
                                                ? "border-blue-500 bg-blue-100"
                                                : "border-gray-300"
                                        }`}>
                                        <Image
                                            src="/img/cod.png"
                                            alt="COD"
                                            width={100}
                                            height={80}
                                        />
                                    </button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Phương thức vận chuyển
                                </label>
                                <select
                                    value={selectedMethod}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                                    {shippingMethods.map((method) => (
                                        <option key={method.value} value={method.value}>
                                            {method.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {/* Note Section */}
                            <div className="bg-gray-100 p-6 rounded-lg">
                                <h3 className="font-semibold text-lg mb-4">04. Ghi Chú</h3>
                                <input
                                    ref={noteRef}
                                    type="text"
                                    placeholder="Nhập ghi chú (nếu có)"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* QR Payment */}
                            {isPaid && paymentMethod === "VNPAY" && (
                                <div className="bg-gray-100 p-6 rounded-lg text-center">
                                    <h3 className="text-lg font-bold text-gray-700">
                                        Quét mã QR để thanh toán
                                    </h3>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end mt-20 gap-4">
                        <Link href={"/cart"} className="border rounded max-w-fit py-2 px-3">
                            <p>Hủy</p>
                        </Link>
                        <button
                            onClick={handleCreateOrder}
                            className="border rounded max-w-fit py-2 px-3 bg-blue-500 text-white"
                            disabled={loading}>
                            {loading ? "Processing..." : "Xác nhận đặt hàng"}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="protected_checkout fixed inset-0 flex justify-center items-center">
                    <div className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300">
                        <div
                            data-dialog="dialog-md"
                            className="relative m-4 p-4 w-2/5 rounded-lg bg-white shadow-sm">
                            <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
                                Thông tin
                            </div>
                            <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
                                Bạn cần chọn sản phẩm để mua trong giỏ hàng trước
                            </div>
                            <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
                                <button
                                    data-dialog-close="true"
                                    className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button">
                                    Cancel
                                </button>
                                <button
                                    data-dialog-close="true"
                                    className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                                    type="button">
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
