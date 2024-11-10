"use client";

import { useEffect, useState } from 'react';
import { columns } from "@/components/molecules/Data-Table-Columns/inventory-inventoryBreakdown-columns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import InfoCard from "@/components/ui/info-card";
import { useStore } from "@/stores/layout";
import { LuBox, LuBoxes, LuPackage, LuRecycle } from "react-icons/lu";

interface StockCategory {
  CategoryName: string;
  AvailableStockMT: number;
}

interface StockResponse {
  status: string;
  message: string;
  data: StockCategory[];
}

const TableView = () => {
  const { startDate, endDate } = useStore();
  const [stockData, setStockData] = useState<StockCategory[]>([]);
  const [stockGodownWiseData, setStockGodownWiseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch stock data
        const stockResponse = await fetch('http://13.233.157.58:3000/api/para/total-stock-by-category', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            startDate,
            endDate
          })
        });
        const stockResult = await stockResponse.json();
        setStockData(stockResult.data);
        console.log(stockResult.data)

        // Fetch godown-wise stock data
        const godownResponse = await fetch('http://13.233.157.58:3000/api/para/total-stock-by-godown-and-category', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            startDate,
            endDate
          })
        });
        const godownResult = await godownResponse.json();
        setStockGodownWiseData(godownResult.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [startDate, endDate]);

  const infoCardData = stockData.length ? [
    {
      title: "Raw Material",
      value: stockData[2].AvailableStockMT.toFixed(4).toString(),
      badge: "",
      info: "Total raw materials in inventory",
      link: "/inventory/raw-material",
      icon: LuPackage
    },
    {
      title: "Finished Goods",
      value: stockData[0].AvailableStockMT.toFixed(4).toString(),
      badge: "",
      info: "Total finished products ready for dispatch",
      link: "/inventory/finished-goods",
      icon: LuBoxes
    },
    {
      title: "Scrap",
      value: stockData[3].AvailableStockMT.toFixed(4).toString(),
      badge: "",
      info: "Total waste material from production",
      link: "/inventory/scrap",
      icon: LuRecycle
    },
    {
      title: "Ladder",
      value: stockData[1].AvailableStockMT.toFixed(4).toString(),
      badge: "+3%",
      info: "Total packaging materials available",
      link: "",
      icon: LuBox
    }
  ] : [];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 mb-6 border-b-2 border-gray-200">
        {infoCardData.map((item, index) => (
          <InfoCard
            key={index}
            title={item.title}
            value={`${item.value} MT`}
            badge={item.badge}
            info={item.info}
            icon={<item.icon className="w-4 h-4" />}
            link={item.link}
          />
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Inventory Breakdown</CardTitle>
          <CardDescription>View the inventory breakdown for each plant.</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={stockGodownWiseData} filter="plant" />
        </CardContent>
      </Card>
    </>
  );
};

export default TableView;