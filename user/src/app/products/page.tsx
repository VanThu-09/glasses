"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Products() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [products, setProducts] = useState<any[]>([]);
    const [filters, setFilters] = useState<{ title: string; options: string[] }[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const productsPerPage = 20;
    {products.forEach(product => console.log(product.id))}
    useEffect(() => {
        async function fetchFilters() {
            try {
                const response = await fetch("https://glassmanagement.vercel.app/api/product/get-filter-option");
                const data = await response.json();

                setFilters([
                    { title: "Danh mục sản phẩm", options: data.categories || [] },
                    { title: "Giới tính", options: data.genders.filter(Boolean) || [] },
                    { title: "Kiểu dáng", options: data.styles.filter(Boolean) || [] },
                    { title: "Chất liệu", options: data.materials || [] },
                ]);
            } catch (error) {
                console.error("Error fetching filter options:", error);
            }
        }
        fetchFilters();
    }, []);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("https://glassmanagement.vercel.app/api/product/get-paginated", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        page: currentPage,
                        limit: productsPerPage,
                        filter: {
                            category: selectedOptions["0"] || undefined,
                            gender: selectedOptions["1"] || undefined,
                            style: selectedOptions["2"] || undefined,
                            material: selectedOptions["3"] || undefined,
                        },
                    }),
                });

                const data = await response.json();
                setProducts(data.data || []);
                setTotalPages(data.totalPages || 1);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchProducts();
    }, [currentPage, selectedOptions]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    const toggleDropdown = (index: string) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const handleSelectOption = (index: string, option: string) => {
        setSelectedOptions((prev) => ({ ...prev, [index]: option }));
        setCurrentPage(1);
        setOpenDropdown(null);
    };

    return (
        <div className="mx-32 mb-20 mt-10">
            <div className="text-4xl font-serif">Products</div>
            <div className="bg-red-600 p-3 flex my-5 items-center space-x-3 rounded-lg">
                <span className="text-white text-xl font-bold">Bộ lọc</span>
                {filters.map((filter, index) => (
                    <div key={index} className="relative">
                        <button
                            className="bg-white px-4 py-2 rounded-md flex items-center cursor-pointer"
                            onClick={() => toggleDropdown(index.toString())}
                        >
                            <span>{selectedOptions[index.toString()] || filter.title}</span>
                            <ChevronDown className={`ml-2 transition-transform duration-300 ${openDropdown === index.toString() ? "rotate-180" : "rotate-0"}`} />
                        </button>
                        {openDropdown === index.toString() && (
                            <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-md rounded-md z-10">
                                {filter.options.map((option, optIndex) => (
                                    <div key={optIndex} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleSelectOption(index.toString(), option)}>
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-4 gap-4 mt-10">
                {products.map((product) => (
                    <Link
                        key={product.id}
                        href={`/productsDetails/${product.id}`}
                        className="col-span-1 grid gap-2"
                        
                    >
                        <img
                            className="w-72 border"
                            src={product.image_thumbs?.den || "/placeholder.png"}
                            alt={product.name || "Sản phẩm"}
                        />
                        <p className="text-gray-400 text-sm">{product.category}</p>
                        <h1 className="font-bold">{product.name}</h1>
                        <p className="font-bold text-red-500">{product.price ? `${product.price}đ` : "Giá liên hệ"}</p>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center mt-5 space-x-3">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
                >
                    Trước
                </button>
                <span className="px-4 py-2">Trang {currentPage} / {totalPages}</span>
                <button
                    disabled={currentPage >= totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
                >
                    Sau
                </button>
            </div>
        </div>
    );
}
