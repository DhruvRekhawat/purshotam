import TableView from "./table/page"
import ChartView from "./chart/page"

const page = ({searchParams}:{searchParams: {view: string}}) => {
  const view = searchParams.view;
  return (
    <>
      {view === "chart" ? <ChartView /> : <TableView />}
    </>
  );
}

export default page