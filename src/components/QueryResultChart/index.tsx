import ReactECharts from "echarts-for-react";

export type QueryResultChartProps = {
  option: any;
};

const QueryResultChart = ({ option }: QueryResultChartProps) => {
  return (
    <div>
      <ReactECharts option={option} style={{ height: "600px" }} />
    </div>
  );
};

export default QueryResultChart;
