"use client"
import ChartView from "./chart/page";
import TableView from "./table/page";
import { useStore } from "@/stores/layout";

const page = ({searchParams}:{searchParams: {view: string}}) => {
  const {startDate,endDate} = useStore()
  const view = searchParams.view;
  return (
    <>
      {view === "chart" ? <ChartView /> : <TableView startDate={startDate} endDate={endDate} />}
    </>
  );
}

export default page