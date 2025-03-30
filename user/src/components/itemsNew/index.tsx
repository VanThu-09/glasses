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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);

            const res = await fetch("https://glassmanagement.vercel.app/api/product/get");
            if (!res.ok) return;

            const allProducts = await res.json();
            const shuffledProducts = allProducts.sort(() => 0.5 - Math.random()); // Xáo trộn danh sách sản phẩm
            const selectedProducts = shuffledProducts.slice(0, 8); // Chọn 8 sản phẩm đầu tiên

            setProducts(selectedProducts);
            setLoading(false);
        }

        fetchProducts();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="mx-32 my-20">
            <div className='text-center'>
                <p className='text-4xl'>Mẫu kính mắt mới</p>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-10">
                {products.map((product) => (
                    <Link key={product.id} href={`/productsDetails/${product.id}`} className="col-span-1 grid gap-2">
                        <img className="w-72" src={product.images?.split(",")[0]} alt={product.name} />
                        <p className="text-gray-400 text-sm">{product.category}</p>
                        <h1 className="font-bold">{product.name}</h1>
                        <p className="font-bold text-red-500">{(product.price || 0).toLocaleString()}đ</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}