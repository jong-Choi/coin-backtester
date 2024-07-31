import React from "react";

interface IProps {
  width?: number;
  height: number;
  ticks: number;
  dollarAt: (pixel: number) => string;
}
const ChartYAxis = ({ width = 300, height, ticks, dollarAt }: IProps) => {
  const padding = 10;
  const tickValues = Array.from(
    { length: ticks },
    (_, i) => ((height - 2 * padding) / (ticks - 1)) * i + padding
  );

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width}, 0)`}>
        {tickValues.map((value, index) => (
          <g key={index} transform={`translate(0, ${height - value})`}>
            <line x2="-6" stroke="white" />
            <text
              x="-9"
              dy=".32em"
              style={{ textAnchor: "end", fill: "white" }}
            >
              {dollarAt(height - value)}원
            </text>
          </g>
        ))}
        <line y2={height} stroke="white" />
      </g>
    </svg>
  );
};

export default ChartYAxis;
