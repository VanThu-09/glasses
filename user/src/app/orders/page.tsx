"use client";
import React, { useState, useEffect } from "react";
import { getOrder, cancelOrder } from "@/services/orderServices"; // Thêm cancelOrder
import { useRouter } from "next/navigation";

export default function Order() {
    const router = useRouter();
    const [filter, setFilter] = useState<string>("pending");
    const [selected, setSelected] = useState<number | null>(0);
    const [orderItems, setOrderItems] = useState<any[]>([]);
    const [product, setProduct] = useState([]);
    const words = ["pending", "confirmed", "delivered", "completed", "cancelled", "refunded"];

    const handleClick = (value: string, index: number) => {
        setFilter(value);
        setSelected(index);
    };

    const handleGetOrder = async () => {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const userId = user?.id;
        if (userId) {
            const res = await getOrder(userId, filter);
            const { data, product } = await res?.json();
            setOrderItems(data);
            setProduct(product)
            console.log({data, product})
        } else {
            router.push("/");
        }
    };

    useEffect(() => {
        handleGetOrder();
    }, [filter]);

    const handleCancelOrder = async (orderId: string) => {
        const confirmCancel = confirm("Bạn có chắc muốn hủy đơn hàng này?");
        if (!confirmCancel) return;

        try {
            const res = await cancelOrder(orderId);
            if (res?.ok) {
                alert("Đã hủy đơn hàng thành công!");
                handleGetOrder(); // Cập nhật danh sách đơn hàng sau khi hủy
            } else {
                alert("Hủy đơn hàng thất bại!");
            }
        } catch (error) {
            console.error("Lỗi hủy đơn hàng:", error);
            alert("Đã xảy ra lỗi khi hủy đơn hàng!");
        }
    };

    return (
        <div className="flex flex-col mx-60">
            {/* Danh sách trạng thái đơn hàng */}
            <div className="flex justify-around w-full border-b py-5 mb-8 bg-red-50 shadow">
                {words.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(item, index)}
                        className={`px-4 py-2 mb-2 ${selected === index ? "border-b border-red-300" : ""}`}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* Thông tin chi tiết đơn hàng */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-lg border rounded-md">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4 text-left text-sm font-semibold text-gray-600">Order Id</th>
                            <th className="p-4 text-left text-sm font-semibold text-gray-600">Product</th>
                            <th className="p-4 text-left text-sm font-semibold text-gray-600">Price</th>
                            <th className="p-4 text-left text-sm font-semibold text-gray-600">Status</th>
                            <th className="p-4 text-left text-sm font-semibold text-gray-600">Total Price</th>
                            <th className="p-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderItems.map((order, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-4 text-sm font-medium text-gray-700">
                                    <span className="text-indigo-600">{order.order_code}</span>
                                </td>
                                {
                                    Array.from(product[order.id]).map((item :any, index) => {
                                        return (<td className="p-4 flex items-center">
                                            <img
                                                className="w-20 h-20 object-cover mr-4"
                                                src={item.image}
                                                alt="Product"
                                            />
                                            <div>
                                                <h1 className="font-bold">{item.name}</h1>
                                                <p className="text-gray-500">Màu sắc: {item.color || "N/A"}</p>
                                            </div>
                                        </td>)
                                    })
                                }
                                <td className="p-4 text-sm text-gray-700">{order.total_price}đ</td>
                                <td className="p-4">
                                    <span className={`py-1 px-2 rounded-full ${order.status === "cancelled" ? "bg-red-100 text-red-500" : "bg-green-100 text-green-500"}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-gray-700">{order.total_price}đ</td>
                                <td className="p-4">
                                    {order.status !== "cancelled" && order.status !== "completed" && (
                                        <button
                                            onClick={() => handleCancelOrder(order.id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                        >
                                            Hủy đơn
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
