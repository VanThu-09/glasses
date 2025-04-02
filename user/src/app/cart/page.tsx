"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { updateCartItemQtt } from "@/services/cartServices";
import useCartStore from "../store/cartStore";
export default function Cart() {
    const [cartItems, setCartItems] = useState<
        {
            id: string;
            quantity: number;
            image: any;
            color_mapping: any;
            price: number;
            name: string;
            quantityInStock: number;
        }[]
    >([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [shippingFee, setShippingFee] = useState(25000);
    const [userId, setUserId] = useState(null);
    const router = useRouter();
    const {setCartItemNum, setCartItems: setCartitems, cart: {cartItemNum, cartItems: cartitems}} = useCartStore()

    const {
        setSelectedItem,
        cart: { selectedItem },
    } = useCartStore();
    const allSelected = selectedItem.length === cartItems.length && cartItems.length > 0;

    // Xử lý chọn / bỏ chọn tất cả
    const toggleSelectAll = () => {
        if (allSelected) {
            setSelectedItem([]);
        } else {
            setSelectedItem(cartItems.map((item) => item.id));
            setSelectedItem(cartItems.map((item) => item.id));
        }
    };

    // Xử lý chọn từng sản phẩm
    const toggleSelectItem = (id: string) => {
        const getAfterToggle = (prev: string[]) =>
            prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id];

        const selected = getAfterToggle(selectedItem);
        setSelectedItem(selected);
    };
    const fetchCart = async () => {
        try {
            const user = JSON.parse(localStorage.getItem("user") || "{}");
            const userId = user.id;
            setUserId(user?.id);
            const response = await fetch(`http://localhost:8000/api/cart/get/${userId}`);
            const data = await response.json();
            if (response.ok) {
                // Thêm thuộc tính quantity mặc định là 1 nếu chưa có
                console.log(data);
                const updatedCart = data.data.map((item: any) => ({
                    ...item,
                    quantity: item.quantity || 1,
                }));
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
    useEffect(() => {
        fetchCart();
    }, []);

    // Hàm tăng số lượng
    const increaseQuantity = async (id: string) => {
        const items = cartItems.filter((item) => item.id === id);
        console.log(items)
        const quantity = items[0].quantity;
        const afterIncrease = quantity + 1;
        const data = {
            userId,
            productId: id,
            quantity: afterIncrease,
        };
        if (afterIncrease > items[0].quantityInStock) {
            alert("Không thể thêm số sản phẩm vượt quá số lượng trong kho");
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
            const res = await updateCartItemQtt(data);
        }
    };

    // Hàm giảm số lượng (không giảm dưới 1)
    const decreaseQuantity = async (id: string) => {
        const items = cartItems.filter((item) => item.id === id);
        const quantity = items[0].quantity;
        const afterDecrease = quantity - 1;
        const data = {
            userId,
            productId: id,
            quantity: afterDecrease,
        };

        if (afterDecrease === 0) {
            const sureToDelete = confirm(`Bạn có muốn xóa sản phẩm ${items[0].name}`);
            if (sureToDelete) {
                const res = await updateCartItemQtt(data);
                const { message } = await res?.json();
                if (res?.ok) {
                    alert(`Xóa sản phẩm thành công ${items[0].name}`);
                    setCartItemNum(cartItemNum -1)
                    setCartitems(cartItems.filter((item) => item.id !== id))
                    await fetchCart();
                } else {
                    alert(message);
                }
            }
        } else {
            setCartItems(
                cartItems.map((item) =>
                    item.id === id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
            await updateCartItemQtt(data);
        }
    };

    // Hàm xóa sản phẩm khỏi giỏ hàng
    const handleRemove = async (productId: string) => {
        try {
            const user = JSON.parse(localStorage.getItem("user") || "{}");
            const userId = user?.id;

            const response = await fetch("https://glassmanagement.vercel.app/api/cart/delete", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId, productId }),
            });

            if (!response.ok) {
                throw new Error("Không thể xóa sản phẩm");
            }
            setCartItemNum(cartItemNum -1)
            setCartitems(cartItems.filter((item) => item.id !== productId))
            await fetchCart();
            // setCartItems(cartItems.filter(item => item.id !== productId));
        } catch (err: any) {
            console.error("❌ Lỗi khi xóa sản phẩm:", err);
            alert(`Lỗi: ${err.message}`);
        }
    };

    if (loading)
        return (
            <div className="flex my-10 flex-col gap-4 mx-60">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        );
    if (error) return <p className="mx-60">Vui lòng đăng nhập để vào giỏ hàng</p>;
    const handleCheckout = () => {
        // localStorage.setItem("checkoutCart", JSON.stringify(cartItems));
        // localStorage.setItem(
        //     "checkoutTotal",
        //     JSON.stringify(
        //         cartItems.reduce((sum, item) => sum + item.price * item.quantity, shippingFee)
        //     )
        // );
        if (selectedItem.length == 0) {
            alert("Vui lòng chọn sản phẩm trước khi thanh toán");
        } else {
            router.push("/cart/checkout"); // Chuyển hướng đến trang checkout
        }
    };
    return (
        <div className="grid grid-cols-4 gap-4 mx-60">
            <div className="col-span-3">
                {cartItems.length === 0 ? (
                    <p className="p-5">Giỏ hàng trống</p>
                ) : (
                    <>
                        <div className="flex justify-between items-center mb-4">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5"
                                    checked={allSelected}
                                    onChange={toggleSelectAll}
                                />
                                <span className="ml-2 font-semibold">Chọn tất cả</span>
                            </label>
                        </div>

                        <table className="table-auto w-full border-collapse border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2"></th>
                                    <th className="px-4 py-2">Sản phẩm</th>
                                    <th className="px-4 py-2">Giá</th>
                                    <th className="px-4 py-2">Số lượng</th>
                                    <th className="px-4 py-2">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="border border-gray-300">
                                        <td className="px-4 py-2 text-center">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5"
                                                checked={selectedItem.includes(item.id)}
                                                onChange={() => toggleSelectItem(item.id)}
                                            />
                                        </td>
                                        <td className="px-4 py-2">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    className="w-16 h-16"
                                                    src={item?.image}
                                                    alt={item.name}
                                                />
                                                <h1 className="font-bold">{item.name}</h1>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <p className="text-red-500 text-xl">
                                                {(item.price * item.quantity).toLocaleString()}đ
                                            </p>
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <div className="flex items-center justify-center">
                                                <button
                                                    onClick={() => decreaseQuantity(item.id)}
                                                    className="bg-gray-300 px-2 py-1 rounded-md">
                                                    -
                                                </button>
                                                <span className="mx-3">{item.quantity}</span>
                                                <button
                                                    onClick={() => increaseQuantity(item.id)}
                                                    className="bg-gray-300 px-2 py-1 rounded-md">
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <button
                                                onClick={() => handleRemove(item.id)}
                                                className="bg-red-300 px-3 py-1 rounded-lg">
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
            <div className="col-span-1 shadow rounded-md bg-red-50 p-5">
                <button onClick={handleCheckout} className="btn bg-rose-600 text-white w-full mt-5">
                    Mua hàng
                </button>
            </div>
        </div>
    );
}
