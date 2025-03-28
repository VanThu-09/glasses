"use client";
import React, { useEffect, useState } from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
// import { getAllProductApi, getAllUserApi, makeRequestApi } from "@/lib/api";
import { useSession } from "next-auth/react";

interface Totals {
  totalSales: number;
  totalProfit: number;
  totalProducts: number;
  totalUsers: number;
  previousDayUsers: number;
}

interface PercentageChanges {
  totalSalesChange: number;
  totalProfitChange: number;
  totalProductsChange: number;
  totalUsersChange: number;
  revenueLevel: string; 
}

const ECommerce: React.FC = () => {

  const [totals, setTotals] = useState<Totals>({
    totalSales: 0,
    totalProfit: 0,
    totalProducts: 0,
    totalUsers: 0,
    previousDayUsers: 0,
  });

  const [percentageChanges, setPercentageChanges] = useState<PercentageChanges>({
    totalSalesChange: 0,
    totalProfitChange: 0,
    totalProductsChange: 0,
    totalUsersChange: 0,
    revenueLevel: '', // Initialize revenue level
  });

  // Function to calculate percentage change and revenue level
  const calculatePercentageChange = (current: number, previous: number): { totalChange: number; revenueLevel: string } => {
    const percentageChange = previous === 0 ? (current === 0 ? 0 : 100) : ((current - previous) / previous) * 100;
    const revenueLevel = current > previous ? 'levelUp' : 'levelDown'; // Determine revenue level
    return { totalChange: percentageChange, revenueLevel };
  };

  return (
    <div className="container mx-auto px-4">

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
      </div>
    </div>
  );
};

export default ECommerce;
