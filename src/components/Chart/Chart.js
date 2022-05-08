import React from "react";
import "./Chart.css";
import Chartbar from "./ChartBar";

const Chart = (props) => {
    const dataPointsValue=props.dataPoints.map(datavalue=>datavalue.value);
    const finalMaximum=Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <Chartbar
          key={dataPoint.label}  
          value={dataPoint.value}
          maxValue={finalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
