"use client"
import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import React from 'react'
import './globals.css'
import Header from "@/components/header";
import Sidebar from "@/components/Sidebar";
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="winter" lang="en" className="text-black m-0 p-0">
      <head>
        <title>Glasses Admin</title>
        <meta name='description' content='Description' />
        <link rel="apple-touch-icon.png" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="x-icon" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" crossOrigin="use-credentials" href="/manifest.json" />
      </head>
      <body className={`${inter.className} selection:bg-base-content selection:text-base-100`}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <div className='grid grid-cols-7'>
          <div className='col-span-1 sticky top-0 h-screen'>
            <Sidebar sidebarOpen={false} setSidebarOpen={() => { }} />
          </div>
          <div className="col-span-6 body my-10 bg-slate-100 h-screen ">
            <div className='top-0'>
              <Header />
            </div>
            <div className="mt-10 mx-10">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}