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
    {
        products.forEach((product) => console.log(product.id));
    }
    useEffect(() => {
        async function fetchFilters() {
            try {
                const response = await fetch(
                    "https://glassmanagement.vercel.app/api/product/get-filter-option"
                );
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
                const response = await fetch(
                    "https://glassmanagement.vercel.app/api/product/get-paginated",
                    {
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
                    }
                );

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
        <div className="mx-60 mb-20 mt-10">
            <div className="text-4xl font-serif">Products</div>
            <div className="bg-red-600 p-3 flex my-5 items-center space-x-3 rounded-lg">
                <span className="text-white text-xl font-bold">Bộ lọc</span>
                {filters.map((filter, index) => (
                    <div key={index} className="relative">
                        <button
                            className="bg-white px-4 py-2 rounded-md flex items-center cursor-pointer"
                            onClick={() => toggleDropdown(index.toString())}>
                            <span>{selectedOptions[index.toString()] || filter.title}</span>
                            <ChevronDown
                                className={`ml-2 transition-transform duration-300 ${
                                    openDropdown === index.toString() ? "rotate-180" : "rotate-0"
                                }`}
                            />
                        </button>
                        {openDropdown === index.toString() && (
                            <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-md rounded-md z-10">
                                {filter.options.map((option, optIndex) => (
                                    <div
                                        key={optIndex}
                                        className="p-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() =>
                                            handleSelectOption(index.toString(), option)
                                        }>
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-4 gap-12 mt-10">
                {products.length !== 0
                    ? products.map((product) => (
                          <Link
                              key={product.id}
                              href={`/productsDetails/${product.id}`}
                              className="col-span-1 grid gap-2">
                              <img
                                  className="aspect-square w-full border"
                                  src={
                                      product.image_thumbs?.den ||
                                      product.image_thumbs?.bac ||
                                      product.image_thumbs?.xam ||
                                      "/placeholder.png"
                                  }
                                  alt={product.name || "Sản phẩm"}
                              />
                              <p className="text-gray-400 text-sm">{product.category}</p>
                              <h1 className="font-bold">{product.name}</h1>
                              <p className="font-bold text-red-500">
                                  {product.price ? `${product.price}đ` : "Giá liên hệ"}
                              </p>
                          </Link>
                      ))
                    : Array.from({ length: 12 }, (_, index) => index + 1).map((item) => (
                          <div
                              role="status"
                              className="max-w-sm border border-gray-300 rounded-lg p-4">
                              <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
                                  <svg
                                      className="w-8 h-8 stroke-gray-400"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path
                                          d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z"
                                          stroke="stroke-current"
                                          stroke-width="1.6"
                                          stroke-linecap="round"></path>
                                  </svg>
                              </div>
                              <div className=" w-full flex justify-between items-start animate-pulse">
                                  <div className="block">
                                      <h3 className="h-3 bg-gray-300 rounded-full  w-48 mb-4"></h3>
                                      <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5"></p>
                                  </div>
                                  <span className="h-2 bg-gray-300 rounded-full w-16 "></span>
                              </div>
                          </div>
                      ))}
            </div>

            <div className="flex justify-center mt-5 space-x-3">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50">
                    Trước
                </button>
                <span className="px-4 py-2">
                    Trang {currentPage} / {totalPages}
                </span>
                <button
                    disabled={currentPage >= totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50">
                    Sau
                </button>
            </div>
        </div>
    );
}
