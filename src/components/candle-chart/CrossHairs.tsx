import React from "react";
import classNames from "classnames";

interface IChartDims {
  pixel_width: number;
  pixel_height: number;
  dollar_high: number;
  dollar_low: number;
  dollar_delta: number;
}

interface IProps {
  x: number;
  y: number;
  chart_dims: IChartDims;
}

const CrossHairs = (props: IProps) => {
  const { x, y, chart_dims } = props;

  if (x + y === 0) {
    return <></>;
  }

  return (
    <>
      <line
        x1={0}
        y1={y}
        x2={chart_dims.pixel_width}
        y2={y}
        className={classNames({
          cross_hair: true,
          horz: true,
        })}
      />
      <line
        x1={x}
        y1={0}
        x2={x}
        y2={chart_dims.pixel_height}
        className={classNames({
          cross_hair: true,
          vert: true,
        })}
      />
    </>
  );
};

export default CrossHairs;
