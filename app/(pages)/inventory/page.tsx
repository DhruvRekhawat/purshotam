import ChartView from "./chart/page";
import TableView from "./table/page";

const Page = ({searchParams}:{searchParams: {view: string}}) => {
  const view = searchParams.view;
  return (
    <>
      {view === "chart" ? <ChartView /> : <TableView />}
    </>
  );
}

export default Page