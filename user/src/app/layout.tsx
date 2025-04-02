"use client"
import { Inter } from "next/font/google";
import React from 'react'
import './globals.scss'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="winter" lang="en" className="text-black m-0 p-0">
      <head>
        <title>GlassesVT</title>
        <meta name='description' content='Description' />
        <link rel="apple-touch-icon.png" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="x-icon" sizes="16x16" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

      </head>
      <body className={`${inter.className} selection:bg-base-content selection:text-base-100`}>
        <Header />
        <div className="body my-10 bg-white">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
