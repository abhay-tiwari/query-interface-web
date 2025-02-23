import ReactECharts from "echarts-for-react";

export type QueryResultChartProps = {
  chartType: string;
  xAxisItems: string[];
  yAxisItems: string[];
};

const QueryResultChart = ({
  xAxisItems,
  yAxisItems,
  chartType,
}: QueryResultChartProps) => {
  const option = {
    xAxis: {
      type: "category",
      data: xAxisItems,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: yAxisItems,
        type: chartType.toLowerCase(),
      },
    ],
  };

  return (
    <div>
      <ReactECharts option={option} style={{ height: "600px" }} />
    </div>
  );
};

export default QueryResultChart;
