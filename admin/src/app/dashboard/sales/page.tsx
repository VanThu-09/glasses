'use client'
import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Sales() {
  return (
    <div className="flex flex-col gap-10">
      <div className="rounded-sm border border-stroke bg-white shadow-default ">
        <div className=" px-4 py-6 md:px-6 xl:px-7">
          <h4 className="text-2xl font-semibold text-black">
            Top sales
          </h4>
        </div>
        <div className="flex justify-between border-t border-stroke px-4 py-4 text-gray-500 sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-2 flex items-center">
            <p className="font-medium">Product Name</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Sold</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between border-t border-stroke px-4 py-4 text-black sm:grid-cols-8 md:px-6 2xl:px-7.5">
            <div className="col-span-3 flex items-center">
              <div className="flex flex-col  gap-4 sm:flex-row sm:items-center">
                <img className='w-12 border' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt=''></img>
                <p className=''>GỌNG KÍNH BLANCY 1012 - C12</p>
              </div>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-green-500 text-meta-3">100</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-sm border border-stroke bg-white shadow-default ">
        <div className="flex justify-between px-4 py-6 md:px-6 xl:px-7">
          <h4 className="text-2xl font-semibold text-black">
            New arrivals
          </h4>
        </div>
        <div className="flex justify-between border-t border-stroke px-4 py-5 text-gray-500 sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-3 flex items-center">
            <p className="font-medium">Product Name</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Sold</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between border-t border-stroke px-4 py-4 text-black sm:grid-cols-8 md:px-6 2xl:px-7.5">
            <div className="col-span-3 flex items-center">
              <div className="flex flex-col  gap-4 sm:flex-row sm:items-center">
                <img className='w-12 border' src="https://kinhmateyeplus.com/wp-content/uploads/2024/11/IMG_9798.png" alt=''></img>
                <p className=''>GỌNG KÍNH BLANCY 1012 - C12</p>
              </div>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-green-500 text-meta-3">100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
