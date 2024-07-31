import { IUpbitPrice } from "@/types/upbit";
import React from "react";
import Chart from "./Chart";
import "./CandleChart.css";

interface IProps {
  data: IUpbitPrice[];
}

const CandleChart = ({ data }: IProps) => {
  const chart_width = 500;
  const chart_height = 300;

  return (
    <div className="App">
      <h1>Demo Candlestick Chart</h1>
      <div className="content">
        <div>
          <Chart data={data} width={chart_width} height={chart_height} />
        </div>
        <span>STOCK</span>
      </div>
    </div>
  );
};

export default CandleChart;
