"use client"
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
export default function Acountdetails() {
    return (
        <div className='mx-32 mb-20 mt-10'>
            <div className=" flex justify-center text-black py-10 rounded-lg bg-red-50 w-full">
                <div className="bg-white rounded-lg shadow p-10">
                    <div className="flex justify-center items-center mb-4">
                        <h2 className="text-3xl font-bold bg-slate-200 p-2 px-3 rounded-lg">Edit User Form</h2>
                    </div>
                    <div className="space-y-4 gap-2 grid">
                        <div className="flex flex-col">
                            <label className="font-medium">Email</label>
                            <input type="email" placeholder="Email" className="border px-2 py-1 bg-white rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Password</label>
                            <input type="password" placeholder="Password" className="border bg-white px-2 py-1 rounded-md" />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Name</label>
                            <div className="flex gap-2">
                                <input type="text" placeholder="First Name" className="border bg-white px-2 py-1 rounded-md w-1/2" />
                                <input type="text" placeholder="Last Name" className="border bg-white px-2 py-1 rounded-md w-1/2" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Address</label>
                            <input type="password" placeholder="Hoai Duc que toi" className="border bg-white px-2 py-1 rounded-md" />
                        </div>
                        <div className="flex flex-col gap-1 sm:flex-row">
                            <p className="w-32 shrink-0 font-medium text-black  ">
                                Gender
                            </p>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="h-5 w-5 cursor-pointer text-black  "
                                    id="Male"

                                />
                                <label
                                    htmlFor="Male"
                                    className="ml-2 flex cursor-pointer gap-2 text-black  "
                                >
                                    Male
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="h-5 w-5 cursor-pointer text-black  "
                                    id="Female"

                                />
                                <label
                                    htmlFor="Female"
                                    className="ml-2 flex cursor-pointer gap-2 text-black  "
                                >
                                    Female
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="h-5 w-5 cursor-pointer text-black  "
                                    id="Other"

                                />
                                <label
                                    htmlFor="Other"
                                    className="ml-2 flex cursor-pointer gap-2 text-black "
                                >
                                    Other
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-medium">Phone</label>
                            <input type="text" placeholder="Phone number" className="border bg-white px-2 py-1 rounded-md" />
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/img/avt.png" alt="Avatar" className="h-16 w-16 rounded-full mb-2" />
                            <input type="file" className="text-sm" />
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <Link href={"/profile"}><button className="bg-gray-300 px-3 py-1 rounded mr-2">Cancel</button></Link>
                        <button className="bg-blue-500 text-white px-5 py-1 rounded">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
