"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Profile() {
    const [user, setUser] = useState({
        email: "",
        phone: "",
        name: "",
        address: ""
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                try {
                    const parsedUser = JSON.parse(storedUser);
                    setUser({
                        email: parsedUser.email || "",
                        phone: parsedUser.phone || "",
                        name: parsedUser.name || "",
                        address: parsedUser.address || ""
                    });
                } catch (error) {
                    console.error("Lỗi khi parse user:", error);
                    localStorage.removeItem("user");
                }
            }
        }
    }, []);
    

    return (
        <div className="mx-32 mb-20 mt-10">
            <div className="flex justify-center text-black py-10 rounded-lg bg-red-50 w-full">
                <div className="bg-white rounded-lg shadow p-10 w-2/5">
                    <div className="flex justify-center items-center mb-4">
                        <h2 className="text-3xl font-bold bg-slate-200 p-2 px-3 rounded-lg">User Profile</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={""} alt="Avatar" className="h-16 w-16 rounded-full mb-2" />
                    </div>
                    <div className="space-y-4 gap-2 grid">
                        <div className="flex justify-between border p-3 rounded-md">
                            <label className="font-medium text-lg">Email:</label>
                            <p>{user.email || "Chưa có dữ liệu"}</p>
                        </div>
                        <div className="flex justify-between border p-3 rounded-md">
                            <label className="font-medium text-lg">Phone:</label>
                            <p>{user.phone || "Chưa có dữ liệu"}</p>
                        </div>
                        <div className="flex justify-between border p-3 rounded-md">
                            <label className="font-medium text-lg">Name:</label>
                            <p>{user.name || "Chưa có dữ liệu"}</p>
                        </div>
                        <div className="flex justify-between border p-3 rounded-md">
                            <label className="font-medium text-lg">Address:</label>
                            <p>{user.address || "Chưa có dữ liệu"}</p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <Link href={"/"}>
                            <button className="bg-gray-300 px-3 py-1 rounded mr-2">Cancel</button>
                        </Link>
                        <Link href={"/acountdetails"} className="bg-blue-500 text-white px-5 py-1 rounded">
                            Edit
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
