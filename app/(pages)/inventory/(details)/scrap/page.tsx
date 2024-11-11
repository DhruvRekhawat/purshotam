"use client"
import { BarSingle } from "@/components/molecules/Charts/bar-single"
import { DonutTitle } from "@/components/molecules/Charts/donut-title"
import { columns } from "@/components/molecules/Data-Table-Columns/total-stock-by-godown-SCRAP-columns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import InfoCard from "@/components/ui/info-card"
import { useEffect, useState } from "react"
import { LuPackage, LuChevronDown } from "react-icons/lu"
import { DataTable } from "@/components/ui/data-table"

const Page = () => {
  const [cardData, setCardData] = useState([])
  const [tableData, setTableData] = useState([])
  const [visibleCards, setVisibleCards] = useState(8)
  const ITEMS_PER_PAGE = 8

  useEffect(() => {
    fetch("http://13.233.157.58:3000/api/para/total-stock-item-wise-by-category", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        "Category": "SCRAP"
      })
    })
      .then(res => res.json())
      .then(data => data.data)
      .then(data => setCardData(data))
      .catch(err => console.error(err))
  }, [])

  useEffect(()=>{
    const apiData= fetch("http://13.233.157.58:3000/api/para/total-stock-by-category-for-all-godowns",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        "Category":"SCRAP"
    })
    }).then((res)=>res.json()).then((data)=>data.data).then((data)=>setTableData(data))
    .catch((err)=>console.error(err))
  },[])


  const infoCardData = cardData.map(({ ItemName, AvailableStockMT }) => ({
    title: ItemName,
    value: AvailableStockMT,
    badge: "",
    info: `Available stock of ${ItemName}`,
    icon: LuPackage
  }))

  const loadMore = () => {
    setVisibleCards(prev => Math.min(prev + ITEMS_PER_PAGE, infoCardData.length))
  }

  const displayedCards = infoCardData.slice(0, visibleCards)
  const remainingCards = infoCardData.length - visibleCards

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-4 p-6 mb-6 border-b-2 border-gray-200">
          {displayedCards.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              value={item.value}
              badge={item.badge}
              info={item.info}
              icon={<item.icon className="w-4 h-4" />}
              link=""
            />
          ))}
        </div>
        
        {remainingCards > 0 && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={loadMore}
              className="gap-2"
            >
              View More ({remainingCards} more items) <LuChevronDown className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Scrap</CardTitle>
            <CardDescription>View the inventory breakdown for each plant.</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={tableData} filter="plantName" />
          </CardContent>
        </Card>
        <BarSingle />
        <DonutTitle />
      </div>
    </>
  )
}

export default Page