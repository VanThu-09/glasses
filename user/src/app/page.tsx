"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import Opening  from '@/components/opening';
import { Imprima } from 'next/font/google';
import Onsale from '@/components/onsale';
import Why from '@/components/why';
import ItemsNew from '@/components/itemsNew';
import YouKnow from '@/components/youKnow';
export default function Home({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='mt-10'>
      <Opening />
      <Onsale />
      <Why />
      <ItemsNew/>
      <YouKnow />
    </div>
  )
}
