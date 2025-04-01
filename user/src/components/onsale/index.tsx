"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function OnSaleProducts() {
    interface Product {
        id: string;
        name: string;
        category: string;
        price: number;
        images: string;
    }

    const [products, setProducts] = useState<Product[]>([]);
    const [timeLeft, setTimeLeft] = useState(7000);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);

            const allProductRes = await fetch("https://glassmanagement.vercel.app/api/product/get", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });
            if (!allProductRes.ok) return;

            const allProducts = await allProductRes.json();
            let selectedProducts = allProducts.slice(0, 12);

            if (selectedProducts.length < 12) {
                const paginatedRes = await fetch("https://glassmanagement.vercel.app/api/product/get-paginated", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({
                        page: 1,
                        limit: 12 - selectedProducts.length,
                    }),
                });

                if (paginatedRes.ok) {
                    const paginatedData = await paginatedRes.json();
                    selectedProducts = [...selectedProducts, ...paginatedData.data];
                }
            }

            setProducts(selectedProducts);
            setLoading(false);
        }

        fetchProducts();
    }, []);
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const allProductRes = await fetch("https://glassmanagement.vercel.app/api/product/get", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!allProductRes.ok) {
                throw new Error(`Lỗi API: ${allProductRes.status} - ${allProductRes.statusText}`);
            }

            const text = await allProductRes.text();
            console.log("📢 API Response:", text);

            if (!text || text.trim() === "") {
                throw new Error("API trả về dữ liệu rỗng!");
            }

            const allProducts = JSON.parse(text);
            setProducts(allProducts);
        } catch (error) {
            console.error("❌ Lỗi khi lấy sản phẩm:", error);
            alert("Không thể lấy danh sách sản phẩm. Vui lòng thử lại!");
        } finally {
            setLoading(false);
        }
    };

    const formatTime = (time: number) => String(Math.max(0, time)).padStart(2, "0");
    const hours = formatTime(Math.floor(timeLeft / 3600));
    const minutes = formatTime(Math.floor((timeLeft % 3600) / 60));
    const seconds = formatTime(timeLeft % 60);

    if (loading) return (
        <div className="flex mx-60 my-10 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    );

    return (
        <div className="mx-60 my-20">
            <div className="flex justify-between">
                <div className="flex items-center gap-10">
                    <div className="flex items-center gap-2">
                        <p className="text-5xl text-red-500 font-bold">Nổi bật</p>
                    </div>
                </div>
                <Link href={"/products"} className='mt-5 flex border items-center border-red-500 text-red-500 rounded-3xl p-2 ' style={{ width: "max-content" }}>
                    <p >Xem tất cả</p>
                    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,0,0,1)"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                </Link>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-10">
                {products.map((product) => (
                    <Link key={product.id} href={`/productsDetails/${product.id}`} className="col-span-1 grid gap-2">
                        <img className="w-72 rounded-lg" src={product.images?.split(",")[0]} alt={product.name} />
                        <p className="text-gray-400 text-sm">{product.category}</p>
                        <h1 className="font-bold">{product.name}</h1>
                        <p className="font-bold text-red-500">{(product.price || 0).toLocaleString()}đ</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}